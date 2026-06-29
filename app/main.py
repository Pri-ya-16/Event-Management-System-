from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.students import router as student_router
from app.api.routes.departments import router as department_router
from app.api.routes.guests import router as guest_router
from app.api.routes.events import router as event_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.registrations import router as registration_router
from app.api.routes.auth import router as auth_router


app = FastAPI(
    title="College Event Management System"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student_router)
app.include_router(department_router)
app.include_router(guest_router)
app.include_router(event_router)
app.include_router(dashboard_router)
app.include_router(registration_router)
app.include_router(auth_router)

@app.get("/")
def root():
    return {
        "message": "Event Management API Running"
    }