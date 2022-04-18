import useGetPost from "../../hooks/useGetPost/useGetPost";
import PostDetail from "../../components/PostDetail/PostDetail";

function PostsPage() {
  const { loading, posts } = useGetPost();

  return (
    <>
      <h1>Post Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <div>Loading Posts... </div>
        ) : (
          posts.map((m) => <PostDetail post={m} key={m.id} />)
        )}
      </div>
    </>
  );
}

export default PostsPage;
