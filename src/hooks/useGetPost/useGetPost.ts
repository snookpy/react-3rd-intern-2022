import { useQuery } from "react-query";
import axiosClient from "../../axiosClient";
import { QueryKey } from "../../constants";
import Post from "../../models/Post";

const getPostApi = async () => {
  const res = await axiosClient.get<Post[]>("/posts");

  return res.data;
};
const useGetPost = () => {
  const { status, data: posts = [] } = useQuery([QueryKey.posts], getPostApi);

  return {
    loading: status === "loading",
    posts,
  };
};

export default useGetPost;
