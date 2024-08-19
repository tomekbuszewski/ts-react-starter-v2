import { AllActivities } from "./AllActivities.tsx";
import { SingleActivity } from "./SingleActivity.tsx";

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
