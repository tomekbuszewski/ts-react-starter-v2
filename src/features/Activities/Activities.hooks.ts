import type { DefaultError, UseQueryResult } from "@tanstack/react-query";
import type { Activity } from "./Activities.types.ts";

import { useQuery } from "@tanstack/react-query";

export const useActivities = (): UseQueryResult<Activity[], DefaultError> => {
  return useQuery<Activity[]>({
    queryKey: ["/api/v1/Activities"],
  });
};

export const useSingleActivity = (
  id?: string,
): UseQueryResult<Activity, DefaultError> => {
  return useQuery<Activity>({
    queryKey: [`/api/v1/Activities/${id}`],
    enabled: typeof id === "string",
    staleTime: 1000 * 60 * 5,
  });
};
