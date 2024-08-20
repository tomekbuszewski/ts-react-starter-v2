import { Link } from "react-router-dom";

import { useActivities } from "../Activities.hooks.ts";

function AllActivities() {
  const { isPending, data, isFetching, error } = useActivities();

  if (isPending || isFetching) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;

  return (
    <ul>
      {data.map((activity) => (
        <li key={activity.id}>
          <Link to={`${activity.id}`}>{activity.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AllActivities;
