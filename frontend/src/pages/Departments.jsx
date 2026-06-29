import { useParams } from "react-router-dom";

function Department() {
  const { name } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize">
        {name.replace("-", " ")} Department
      </h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold">
          Department Events
        </h2>

        <p className="text-gray-500 mt-2">
          Upcoming events for {name}
        </p>
      </div>
    </div>
  );
}

export default Department;