import { useListService } from "./useListService";

export const List = () => {
  const list = useListService();
  return list;
};
