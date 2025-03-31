from src.utils.database import get_db
from src.models import models
from fastapi import FastAPI
from src.utils.database import engine
from src.routes import UserRouter, AdminRouter, OrderItemRouter
from src.routes import TenantRouter
from src.routes import LoginRoute
from fastapi.middleware.cors import CORSMiddleware
# from src.routes import firstAdmin

models.Base.metadata.create_all(bind=engine)

origins = [

    "http://localhost/8000/login/email/",
    "http://localhost:5173/loginemail",
    "http://localhost:5173/createtenant"
    "http://localhost:8080",
    "http://localhost:5173",
    "http://localhost:5173/signupemail"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(UserRouter.router)
app.include_router(AdminRouter.router)
app.include_router(OrderItemRouter.router)
app.include_router(TenantRouter.router)
app.include_router(LoginRoute.router)
# app.include_router(auth.router)
# app.include_router(firstAdmin.router)