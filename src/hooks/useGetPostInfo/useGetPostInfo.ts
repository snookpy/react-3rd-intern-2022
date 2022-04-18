import { useQuery } from "react-query";
import axiosClient from "../../axiosClient";
import { QueryKey } from "../../constants";
import Post from "../../models/Post";

const getPostByIdApi = async (id: number) => {
  const res = await axiosClient.get<Post>("/posts/" + id);

  return res.data;
};
const useGetPostInfo = (id: number) => {
  const { status, data: post } = useQuery([QueryKey.postInfo, id], () =>
    getPostByIdApi(id)
  );

  return {
    loading: status === "loading",
    post,
  };
};

export default useGetPostInfo;
