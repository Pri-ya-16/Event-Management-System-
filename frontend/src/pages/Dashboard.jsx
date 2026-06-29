function Dashboard() {
  return (
    <div className="h-screen overflow-hidden">
      

      {/* Background Section */}
      <div
        className="h-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/college-bg.jpg')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/60 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">

          <div className="ml-20 max-w-3xl text-white">

            <h2 className="text-5xl font-bold mb-4">
              Welcome to
            </h2>

            <h1 className="text-7xl font-extrabold leading-tight">
              PKR Event
              <br />
              Management System
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Organize events, manage guests,
              track department activities and
              streamline college event planning
              from a single platform.
            </p>

            

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;