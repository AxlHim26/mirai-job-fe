import { default as dayjs } from "dayjs";

export const formatDate = (date: string | number) => {
  return dayjs(date).format("MMM D, h:mm A");
};
