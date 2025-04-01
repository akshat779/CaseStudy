from sqlalchemy.orm import Session
from ..models import models
from ..schemas import schemas

def get_all_products(db: Session, offset: int = 0, limit: int = 10):
    products = db.query(models.Product).offset(offset).limit(limit).all()
    return products

def get_product_by_id(db: Session, product_id: int):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    return product
