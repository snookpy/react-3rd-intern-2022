import { useParams } from "react-router";
import useGetPostInfo from "../../hooks/useGetPostInfo/useGetPostInfo";

function Info() {
  const { id } = useParams<"id">();
  const { loading, post } = useGetPostInfo(parseInt(id ?? ""));

  return (
    <div>
      {loading && <div>Loading Post... </div>}
      {post && (
        <div>
          <p>Post Id: {post.id}</p>
          <p>Title: {post.title}</p>

          <p>Body: {post.title}</p>

          <p>Title: {post.body}</p>

          <p>User Id: {post.userId}</p>
        </div>
      )}
    </div>
  );
}

export default Info;
