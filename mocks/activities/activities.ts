import { API_URL } from "@config/consts.ts";
import { http, HttpResponse } from "msw";

const data = [
  {
    id: 1,
    title: "Activity 1",
    dueDate: "2024-08-19T11:25:23.722459+00:00",
    completed: false,
  },
  {
    id: 2,
    title: "Activity 2",
    dueDate: "2024-08-19T12:25:23.7224615+00:00",
    completed: true,
  },
  {
    id: 3,
    title: "Activity 3",
    dueDate: "2024-08-19T13:25:23.7224618+00:00",
    completed: false,
  },
  {
    id: 4,
    title: "Activity 4",
    dueDate: "2024-08-19T14:25:23.7224621+00:00",
    completed: true,
  },
];

const getAllActivities = http.get(`${API_URL}/api/v1/Activities`, () => {
  return HttpResponse.json(data);
});

const getSingleActivity = http.get(
  `${API_URL}/api/v1/Activities/:id`,
  ({ params }) => {
    const { id } = params;
    const activity = data.find((activity) => activity.id === Number(id));

    if (!activity) {
      return new HttpResponse("Not found", { status: 404 });
    }

    return HttpResponse.json(activity);
  },
);

export const activities = [getAllActivities, getSingleActivity];
