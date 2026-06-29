function StudentDashboard() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Welcome Priya 👋
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <h2>Upcoming Events</h2>
          <h1 className="text-4xl font-bold">
            5
          </h1>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>My Registrations</h2>
          <h1 className="text-4xl font-bold">
            2
          </h1>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Notifications</h2>
          <h1 className="text-4xl font-bold">
            3
          </h1>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2>Certificates</h2>
          <h1 className="text-4xl font-bold">
            1
          </h1>
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;