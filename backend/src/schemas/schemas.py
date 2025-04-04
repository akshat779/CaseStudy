from pydantic import BaseModel, EmailStr
from typing import List, Optional,Dict
from enum import Enum

class RoleEnum(str, Enum):
    user = "user"
    admin = "admin"
    tenant = "tenant"

class UserBase(BaseModel):
    username: str
    email: EmailStr
    firstname: str
    lastname: str
    role: RoleEnum
    image: Optional[str]


class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    class Config:
        orm_mode = True


class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: int
    category: Optional[str] = None
    quantity: int
    image: Optional[str] = None

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    tenant_id: Optional[int]

    class Config:
        orm_mode = True

class OrderItemBase(BaseModel):
    product_id: int
    quantity: int
    unit_price: float
    product_name: str
    total_price: float

class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int
   


class OrderItem(OrderItemBase):
    id: int
    user_id: int  
    order_id: int

    class Config:
        orm_mode = True

class OrderBase(BaseModel):
    total_quantity: int
    total_amount: int
    status: str
    order_items_data: List[Dict]


class OrderCreate(OrderBase):
    pass

class Order(OrderBase):
    id: int
    user_id: int
    
    class Config:
        orm_mode = True

class FavoriteBase(BaseModel):
    product_id: int

class FavoriteCreate(FavoriteBase):
    pass

class Favorite(FavoriteBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class KeycloakToken(BaseModel):
    username: str
    roles: List[str]

class Login(BaseModel):  
    username:str
    password:str