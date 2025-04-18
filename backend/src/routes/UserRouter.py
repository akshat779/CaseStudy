from ..repository import User
from fastapi import APIRouter, Depends, HTTPException, status,Query
from sqlalchemy.orm import Session
from ..utils.database import get_db
from ..schemas import schemas
from typing import List
from ..models import models
from ..utils import keycloak
import httpx

router = APIRouter(
    prefix="/user",
    tags=["Users"]
)

@router.get("/", response_model=List[schemas.User])
def getAll(db: Session = Depends(get_db),limit:int = Query(10),offset:int = Query(0)):  
    return User.getAll(limit,offset,db)

@router.get("/username/{username}",response_model=schemas.User,dependencies=[Depends(keycloak.has_role("user"))])
def get_user_by_username(username: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == username).first()
    if(user is None):
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/create")
async def create_user(user_request: schemas.UserCreate,db: Session = Depends(get_db)):
    print(user_request)
    token = await keycloak.get_keycloak_admin_token()

    
    async with httpx.AsyncClient() as client:
        #checking if the user already exists
        response = await client.get(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users",
            headers={"Authorization": f"Bearer {token}"},
            params={"username": user_request.username}
        )
        response.raise_for_status()
        if response.json():
            raise HTTPException(status_code=409, detail="User already exists")

        # User Creation, if not already exists
        response = await client.post(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users",
            json={
                "username": user_request.username,
                "enabled": True,
                "email": user_request.email,
                "firstName": user_request.firstname,
                "lastName": user_request.lastname,
                "credentials": [{"type": "password", "value": user_request.password, "temporary": False}],
            },
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()
        
        user_id = response.headers["Location"].split("/")[-1]
        
    #    user id milegi
        response = await client.get(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/roles",
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()
        roles = response.json()
        user_role = next((role for role in roles if role["name"] == "user"), None)
        if not user_role:
            raise HTTPException(status_code=404, detail="User role not found")
        user_role_id = user_role["id"]
        
        # assigning the role
        response = await client.post(
            f"{keycloak.KEYCLOAK_URL}/admin/realms/{keycloak.REALM_NAME}/users/{user_id}/role-mappings/realm",
            json=[{"id": user_role_id, "name": "user"}],
            headers={"Authorization": f"Bearer {token}"},
        )
        response.raise_for_status()

    return User.create(user_request, db)
    # return {"message": "User created successfully"}


@router.put("/{id}", response_model=str)
def update(id: int, request: schemas.UserCreate, db: Session = Depends(get_db), current_user=Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.update(user_id, request, db)

@router.get("/favorites")
def get_favorite_products(db: Session = Depends(get_db),current_user = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.get_favorite_products(user_id, db)

@router.post("/favorites", response_model=schemas.Product)
def add_favorite_product(request: schemas.FavoriteCreate, db: Session = Depends(get_db), current_user = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.add_favorite_product(user_id, request, db)

@router.get("/orders", response_model=List[schemas.Order])
def get_user_orders( db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.get_user_orders(user_id, db)

@router.delete("/delete", response_model=str)
def delete( db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.delete(user_id, db)

@router.post("/order-items/", response_model=schemas.OrderItem, dependencies=[Depends(keycloak.has_role("user"))])
def create_order_item(request: schemas.OrderItemCreate, db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.create_order_item(user_id, request, db)


@router.put("/order-items/{id}", response_model=schemas.OrderItem)
def update_order_item(id: int, request: schemas.OrderItemCreate, db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.update_order_item(user_id, id, request, db)


@router.get("/orders/order-items", response_model=List[schemas.OrderItem])
def get_order_items_by_order_id(db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user),limit:int = Query(10),offset:int =  Query(0)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.get_order_items_by_user_id(user_id, db,limit,offset)


@router.post("/placeorders", response_model=schemas.Order)
def create_order(db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.create_order(user_id, db)

@router.get("/all-orders")
def get_all_orders(db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user),limit:int = Query(10),offset:int =  Query(0)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.get_all_orders(user_id, db,limit,offset)

@router.delete("/order-items/{id}", response_model=str)
def delete_order_item(id: int, db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.delete_order_item(user_id, id, db)

@router.delete("/orderitems",response_model=str)
def delete_order_items(db: Session = Depends(get_db), current_user: models.User = Depends(keycloak.get_current_user)):
    user_id = db.query(models.User).filter(models.User.username == current_user.username).first().id
    return User.delete_order_items(user_id, db)