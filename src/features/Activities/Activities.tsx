import AllActivities from "./screens/AllActivities.tsx";
import SingleActivity from "./screens/SingleActivity.tsx";

export default [
  {
    path: "",
    element: <AllActivities />,
  },
  {
    path: ":id",
    element: <SingleActivity />,
  },
];
