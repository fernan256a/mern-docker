import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {getQueryClient} from "@/app/utils/getQueryClient";
import {dehydrate} from "@tanstack/query-core";

const fetchData = async () => {
  const {data} = await axios.get(`/api/posts`)
  return data;
}

export const usePrefetchPost = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['post-list', fetchData]);
  return dehydrate(queryClient);
}

export const useGetPosts = () => {
  const {
    data = [],
    isError,
    isLoading,
    isSuccess
  } = useQuery(['post-list'], fetchData)

  return {data, isError, isLoading, isSuccess}
}
