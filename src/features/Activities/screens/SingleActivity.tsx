import { useParams } from "react-router-dom";

import { useSingleActivity } from "../Activities.hooks.ts";

function SingleActivity() {
  const { id } = useParams();
  const { isPending, data, isFetching, error } = useSingleActivity(id);

  if (isPending || isFetching) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data || !id) return <div>No data</div>;

  return <div>{data.title}</div>;
}

export default SingleActivity;
