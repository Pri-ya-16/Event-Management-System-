from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.user import User

from app.schemas.user import UserRegister

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post("/login")
def login():
    return {
        "message": "Login Success"
    }

@router.post("/register")
def register_user(
    user: UserRegister,
    db: Session = Depends(get_db)
):

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password,
        role=user.role
    )

    db.add(new_user)

    db.commit()

    return {
        "message": "User Created"
    }