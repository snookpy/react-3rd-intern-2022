import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../../axiosClient";
import { ICreatePost } from "../../components/CreatePostForm/CreatePostForm";
import { QueryKey } from "../../constants";

const createPostApi = (newPost: ICreatePost) =>
  axiosClient.post("/posts", newPost);
const usePostMutate = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation(createPostApi, {
    onSuccess: (data, variables, context) => {
      alert("created the post: " + JSON.stringify(data.data));
    },
    onError: () => {},
    onSettled: () => {
      queryClient.invalidateQueries([QueryKey.posts]);
    },
  });
  return mutate;
};

export default usePostMutate;
