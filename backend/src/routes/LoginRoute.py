from fastapi import APIRouter, Depends, HTTPException, status,Response
import httpx
from ..models import models
from ..schemas import schemas


router = APIRouter(
    prefix='/login',
    tags=["Login"]
)



@router.post("/")
def login(request:schemas.Login,response:Response):
    payload = {
        "grant_type":   "password",
        "client_id":    "CaseStudyEcommerce",
        "client_secret":"g8djnLgHw3kldLnAIPY2PftLjpL9XMb0",
        "scope":        "openid",
        "username":     request.username,
        "password":     request.password
    }
    
    cookieData = httpx.post('http://localhost:8080/realms/CaseStudy/protocol/openid-connect/token', data=payload)
    response.set_cookie(key="access_token",value=cookieData.json()['access_token'],httponly=True)
    print(cookieData.json())
    
    return cookieData.json()
    