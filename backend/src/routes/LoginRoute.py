from fastapi import APIRouter, Depends, HTTPException, status,Response
import httpx
from ..models import models
from ..schemas import schemas
from ..utils.database import get_db
from sqlalchemy.orm import Session
from ..utils import keycloak


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
    print(payload)
    cookieData = httpx.post('http://localhost:8080/realms/CaseStudy/protocol/openid-connect/token', data=payload)
    print(cookieData)
    response.set_cookie(key="access_token",value=cookieData.json()['access_token'])
    print(cookieData.json())
    
    return cookieData.json()
    


@router.get("/username/{username}",response_model=schemas.User)
def get_user_by_username(username: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == username).first()
    if(user is None):
        raise HTTPException(status_code=404, detail="User not found")
    return user