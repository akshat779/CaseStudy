from sqlalchemy import Column, Integer,String, ForeignKey, Text, DECIMAL, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

import enum

Base = declarative_base()

class RoleEnum(enum.Enum):
    user = "user"
    admin = "admin"
    tenant = "tenant"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer,primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String,unique=True,nullable=False)
    firstname = Column(String,nullable=False)
    lastname = Column(String, nullable=False)
    password = Column(Text,nullable=False)
    role = Column(Enum(RoleEnum),nullable=False)
    image = Column(String)
    products = relationship("Product", back_populates="tenant")
    orders = relationship("Order",back_populates="user")
    order_items = relationship("OrderItem", back_populates="user")
    favorites = relationship("Favorite", back_populates="user")
    

# create a products model
class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    price = Column(DECIMAL, nullable=False)
    category = Column(String, nullable=False)
    image = Column(String)
    quantity = Column(Integer, nullable=False)
    tenant_id = Column(Integer, ForeignKey("users.id"))
    tenant = relationship("User", back_populates="products")
    order_items = relationship('OrderItem', back_populates='product')
    favorites = relationship('Favorite', back_populates='product')


class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id',))
    total_quantity = Column(Integer)
    total_amount = Column(DECIMAL(10, 2))
    status = Column(String)
    user = relationship('User', back_populates='orders')
    order_items = relationship('OrderItem', back_populates='order')

class OrderItem(Base):
    __tablename__ = 'order_items'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id',)) 
    order_id = Column(Integer, ForeignKey('orders.id',))
    product_id = Column(Integer, ForeignKey('products.id',))
    quantity = Column(Integer, nullable=False)
    unit_price = Column(DECIMAL(10, 2), nullable=False)
    total_price = Column(DECIMAL(10, 2), nullable=False)

    user = relationship('User', back_populates='order_items')  
    order = relationship('Order', back_populates='order_items')
    product = relationship('Product', back_populates='order_items')

class Favorite(Base):
    __tablename__ = 'favorites'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id',))
    product_id = Column(Integer, ForeignKey('products.id',))

    user = relationship('User', back_populates='favorites')
    product = relationship('Product', back_populates='favorites')