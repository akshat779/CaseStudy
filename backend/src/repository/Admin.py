# this is the admin repository
from ..models import models
from ..schemas import schemas
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from ..utils.database import get_db
from fastapi import Depends
from ..utils.hashing import hash_password



def get_all_admins(db: Session = Depends(get_db)):
    admins = db.query(models.User).filter(models.User.role == schemas.RoleEnum.admin).all()
    return admins

def create_admin(request: schemas.UserCreate, db: Session = Depends(get_db)):
    print(f"Creating admin with role: {request}")
    if request.role != schemas.RoleEnum.admin:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Role must be admin to create an admin")

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

def show_admin(id: int, db: Session = Depends(get_db)):
    admin = db.query(models.Admin).filter(models.Admin.id == id).first()
    if not admin:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Admin with the id {id} is not available")
    return admin

def update_admin(id: int, request: schemas.User, db: Session = Depends(get_db)):
    admin = db.query(models.Admin).filter(models.Admin.id == id).first()
    if not admin:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Admin with the id {id} is not available")

    user = admin.user
    if request.password:
        request.password = hash_password(request.password)
    user_data = request.dict(exclude_unset=True)
    for key, value in user_data.items():
        setattr(user, key, value)

    db.commit()
    return "Updated"

def delete_admin(id: int, db: Session = Depends(get_db)):
    admin = db.query(models.Admin).filter(models.Admin.id == id).first()
    if not admin:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Admin with the id {id} is not available")

    db.delete(admin)
    db.commit()
    return "Deleted"

def create_product(request: schemas.ProductCreate, db: Session, admin_id: int):
    new_product = models.Product(
        name=request.name,
        description=request.description,
        price=request.price,
        quantity=request.quantity,
        category=request.category,
        admin_id=admin_id
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

def get_product(id: int, db: Session):
    product = db.query(models.Product).filter(models.Product.id == id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    return product

def update_product(id: int, request: schemas.ProductCreate, db: Session):
    product = db.query(models.Product).filter(models.Product.id == id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")

    product.name = request.name
    product.description = request.description
    product.price = request.price
    product.quantity = request.quantity
    product.category = request.category
    db.commit()
    db.refresh(product)
    return product

def delete_product(id: int, db: Session):
    product = db.query(models.Product).filter(models.Product.id == id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    db.delete(product)
    db.commit()
    return "Product deleted"

def get_products_by_admin(admin_id:int, db: Session):
    products = db.query(models.Product).filter(models.Product.admin_id == admin_id).all()
    if not products:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No products found for this admin")
    return products


# def get_all_orders(id:int, db: Session = Depends(get_db)):
#     # orders = db.query(models.Order).filter(models.Order.user_id == id).all()
#     # return orders
#     products = get_products_by_admin(id, db)
#     product_ids = [product.id for product in products]
    
#     order_items = db.query(models.OrderItem).filter(models.OrderItem.product_id.in_(product_ids)).all()
#     if not order_items:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No order items found for this admin's products")
    
#     orders = db.query(models.Order).filter(models.Order.id.in_([item.order_id for item in order_items])).all()
    
#     return {
#         "orders": orders,
#         "order_items": order_items
#     }