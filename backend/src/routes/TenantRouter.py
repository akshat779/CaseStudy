from fastapi import APIRouter, Depends,HTTPException,status 
import httpx
from ..models import models
from ..schemas import schemas
from ..utils.database import get_db
from ..utils import keycloak
from sqlalchemy.orm import Session
from typing import List
from ..repository import Tenant

router = APIRouter(
    prefix='/tenant',
    tags=["Tenants"]
)

@router.get("/",response_model=List[schemas.User],dependencies=[Depends(keycloak.has_role("admin"))])
def get_all_tenants(db:Session = Depends(get_db)):
    return Tenant.get_all_tenants(db)

# ,dependencies=[Depends(keycloak.has_role("admin"))]
@router.post("/create",dependencies=[Depends(keycloak.has_role("admin"))])
async def create_tenant(tenant_request: schemas.UserCreate,db: Session = Depends(get_db)):
    print(tenant_request)
    token = await keycloak.get_keycloak_admin_token()
    
    async with httpx.AsyncClient() as client:
        # Check if user already exists
        response = await client.get(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users",
            headers={"Authorization": f"Bearer {token}"},
            params={"username": tenant_request.username}
        )
        response.raise_for_status()
        if response.json():
            raise HTTPException(status_code=409, detail="User already exists")

        # Create user in Keycloak
        response = await client.post(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users",
            json={
                "username": tenant_request.username,
                "enabled": True,
                "email": tenant_request.email,
                "firstName": tenant_request.firstname,
                "lastName": tenant_request.lastname,
                "credentials": [{"type": "password", "value": tenant_request.password, "temporary": False}],
            },
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()
    
        # Get the user ID
        user_id = response.headers["Location"].split("/")[-1]
    
        # Fetch the admin role ID
        response = await client.get(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/roles",
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()
        roles = response.json()
        tenant_id = next((role for role in roles if role["name"] == "tenant"), None)
        if not tenant_id:
            raise HTTPException(status_code=404, detail="Tenant role not found")
        tenant_id_id = tenant_id["id"]
    
        # Assign the "tenant" role to the user
        response = await client.post(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users/{user_id}/role-mappings/realm",
            json=[{"id": tenant_id_id, "name": "tenant"}],
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()
    
    return Tenant.create_new_tenant(tenant_request, db)


@router.delete("/delete/{id}",response_model=str,dependencies=[Depends(keycloak.has_role("admin"))])
async def delete_tenant(id:int,db:Session = Depends(get_db)):
    tenant = db.query(models.User).filter(models.User.id == id).first()
    if not tenant:
        return HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Tenant with the id {id} is not available")

    token = await keycloak.get_keycloak_admin_token()
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users",
            headers={"Authorization": f"Bearer {token}"},
            params={"username": tenant.username}
        )
        response.raise_for_status()
        keycloak_users = response.json()
        if not keycloak_users:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Tenant with the id {id} is not available in keycloak")
        
        keycloak_user_id = keycloak_users[0]["id"]
        print(keycloak_user_id)
        response = await client.delete(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users/{keycloak_user_id}",
            headers={"Authorization": f"Bearer {token}"}
        )
        response.raise_for_status()

    return Tenant.tenant_delete(db,id)


@router.get("/{id}",response_model=schemas.User,dependencies=[Depends(keycloak.hasAdminOrTenatRole())])
def show_tenant(id:int,db:Session = Depends(get_db)):
    return Tenant.get_tenant(id,db)

@router.post("/createproduct", response_model=schemas.Product,dependencies=[Depends(keycloak.has_role("tenant"))])
def create_product(request: schemas.ProductCreate, db: Session = Depends(get_db), current_tenant: models.User = Depends(keycloak.get_current_user)):
    tenant_id = db.query(models.User).filter(models.User.username == current_tenant.username).first().id
    return Tenant.productCreate(request, db, tenant_id)


@router.delete("/deleteproduct/{id}", response_model=str,dependencies=[Depends(keycloak.has_role("tenant"))])
def deleteProduct(id:int, db:Session=Depends(get_db),current_tenant:models.User=Depends(keycloak.get_current_user)):
    tenant_id = db.query(models.User).filter(models.User.username == current_tenant.username).first().id
    product = db.query(models.Product).filter(models.Product.id == id).first()
    if(product.tenant_id != tenant_id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="You are not authorized to delete this product")
    return Tenant.productDelete(db,product)

# response_model=schemas.Product,, dependencies=[Depends(keycloak.has_role("tenant"))]
@router.put("/updateproduct/{id}" ,response_model=schemas.Product, dependencies=[Depends(keycloak.has_role("tenant"))])
def updateProduct(id:int,request:schemas.ProductCreate,db:Session=Depends(get_db),current_tenant:models.User=Depends(keycloak.get_current_user)):
    tenant_id = db.query(models.User).filter(models.User.username == current_tenant.username).first().id
    product = db.query(models.Product).filter(models.Product.id == id).first()
    print(request)
    if(product.tenant_id != tenant_id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="You are not authorized to update this product")
    return Tenant.productUpdate(db,product,request)


@router.get("/myproducts/get",response_model=List[schemas.Product],dependencies=[Depends(keycloak.has_role("tenant"))])
def getMyProducts(db:Session=Depends(get_db),current_tenant:models.User=Depends(keycloak.get_current_user)):
    tenant_id = db.query(models.User).filter(models.User.username == current_tenant.username).first().id
    print(tenant_id)
    return Tenant.getMyProducts(db,tenant_id)