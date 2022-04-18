import { useQuery } from "react-query";
import axiosClient from "../../axiosClient";
import { QueryKey } from "../../constants";
import PostComment from "../../models/Comment";

const getCommentsPostApi = async (id: number) => {
  const res = await axiosClient.get<PostComment[]>(`/posts/${id}/comments`);

  return res.data;
};
const useGetComments = (id: number) => {
  const { status, data: comments = [] } = useQuery([QueryKey.comments, id], () =>
    getCommentsPostApi(id)
  );

  return {
    loading: status === "loading",
    comments,
  };
};

export default useGetComments;
