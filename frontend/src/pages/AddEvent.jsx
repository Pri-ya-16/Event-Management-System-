import { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [event, setEvent] = useState({
    title: "",
    venue: "",
    event_date: "",
    event_time: "",
    department: "",
    invitation: "",
    description: "",
    guest_name: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending Data:", event);

      const response = await axios.post(
        "http://127.0.0.1:8000/events/",
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      alert("✅ Event Created Successfully");

      setEvent({
        title: "",
        venue: "",
        event_date: "",
        event_time: "",
        department: "",
        invitation: "",
        description: "",
        guest_name: "",
      });
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        alert(
          `Server Error: ${JSON.stringify(error.response.data)}`
        );
      } else if (error.request) {
        alert(
          "Cannot connect to FastAPI backend. Make sure Uvicorn is running on port 8000."
        );
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Add Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={event.venue}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="date"
          name="event_date"
          value={event.event_date}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="time"
          name="event_time"
          value={event.event_time}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={event.department}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          name="guest_name"
          placeholder="Guest Name"
          value={event.guest_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="invitation"
          placeholder="Invitation Link"
          value={event.invitation}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;