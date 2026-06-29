from fastapi import APIRouter

router = APIRouter()

events = []

@router.post("/events")
def create_event(event: dict):
    events.append(event)
    return {"message": "Event Added"}

@router.get("/events")
def get_events():
    return events

@router.get("/events/department/{department}")
def department_events(department: str):
    return [
        e for e in events
        if e["department"] == department
    ]