import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        All Department Events
      </h1>

      <table className="w-full bg-white rounded-xl shadow">

        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              Event
            </th>
            <th className="p-4 text-left">
              Department
            </th>
            <th className="p-4 text-left">
              Date
            </th>
            <th className="p-4 text-left">
              Venue
            </th>
          </tr>
        </thead>

        <tbody>

          {events.map((event) => (
            <tr
              key={event.id}
              className="border-b"
            >
              <td className="p-4">
                {event.title}
              </td>

              <td className="p-4">
                {event.department}
              </td>

              <td className="p-4">
                {event.date}
              </td>

              <td className="p-4">
                {event.venue}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Events;