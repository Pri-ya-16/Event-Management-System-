function Navbar() {
  return (
    <div className="bg-white p-5 shadow flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-4 py-2"
        />

        <div className="bg-slate-100 px-4 py-2 rounded">
          Admin
        </div>

      </div>

    </div>
  );
}

export default Navbar;