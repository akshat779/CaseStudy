from fastapi import APIRouter, Depends,Query
from sqlalchemy.orm import Session
from ..utils.database import get_db
from ..schemas import schemas
from ..repository import OrderItem
from typing import List

router = APIRouter(
    prefix="/products",
    tags=["products"]
)



@router.get("/", response_model=List[schemas.Product])
def get_all_products(db: Session = Depends(get_db),page:int=Query(1,ge=1),limit:int=Query(10,le=100)):
    offset=(page-1)*limit   
    return OrderItem.get_all_products(db,offset=offset,limit=limit)

@router.get("/{product_id}", response_model=schemas.Product)
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    return OrderItem.get_product_by_id(db, product_id)