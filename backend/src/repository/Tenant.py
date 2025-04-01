from ..models import models
from ..schemas import schemas   
from sqlalchemy.orm import Session
from fastapi import HTTPException, status,Depends
from ..utils.database import get_db
from ..utils.hashing import hash_password
from ..utils import keycloak
import httpx


def get_all_tenants(db:Session = Depends(get_db)):
    tenants = db.query(models.User).filter(models.User.role == schemas.RoleEnum.tenant).all()
    return tenants


def create_new_tenant(request: schemas.UserCreate, db: Session = Depends(get_db)):
    print(f"Creating tenant with role: {request}")
    if request.role != schemas.RoleEnum.tenant:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Role must be admin to create an tenant")

    hashed_password = hash_password(request.password)
    new_user = models.User(
        username=request.username,
        email=request.email,
        password=hashed_password,
        role=request.role,
        firstname = request.firstname,
        lastname = request.lastname,
        image = request.image
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    finalUser = db.query(models.User).filter(models.User.id == new_user.id).first()
    return finalUser

def tenant_delete(db:Session,id:int):
    tenant = db.query(models.User).filter(models.User.id == id).first()
    db.delete(tenant)
    db.refresh(tenant)
    db.commit()
    return "Tenant Deleted"


def get_tenant(id:int,db:Session ):
    tenant = db.query(models.User).filter(models.User.id == id).first()
    return tenant


def productCreate(request: schemas.ProductCreate, db: Session, tenant_id:int):
    new_product = models.Product(
        name=request.name,
        description=request.description,
        price=request.price,
        quantity=request.quantity,
        category=request.category,
        image=request.image,
        tenant_id=tenant_id
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

def productDelete(db:Session,product:models.Product):
    db.delete(product)
    db.refresh(product)
    db.commit()
    return "Product Deleted"

def productUpdate(db:Session,product:models.Product,request:schemas.ProductCreate):
    print(product)
    product.name = request.name
    product.description = request.description
    product.price = request.price
    product.quantity = request.quantity
    product.category = request.category
    product.image = request.image
    db.commit()
    return product


def getMyProducts(db:Session,tenant_id:int):
    products = db.query(models.Product).filter(models.Product.tenant_id == tenant_id).all()
    # print(tenant_id)
    return products