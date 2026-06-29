function UpcomingEvents() {

  const events = [
    {
      id: 1,
      title: "AI Workshop",
      date: "25-06-2026",
      venue: "Seminar Hall"
    },
    {
      id: 2,
      title: "Hackathon",
      date: "30-06-2026",
      venue: "Auditorium"
    }
  ];

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Upcoming Events
      </h1>

      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white p-6 rounded shadow mb-4"
        >
          <h2 className="text-2xl font-bold">
            {event.title}
          </h2>

          <p>Date: {event.date}</p>
          <p>Venue: {event.venue}</p>

          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded mt-4"
          >
            Register
          </button>

        </div>
      ))}

    </div>
  );
}

export default UpcomingEvents;