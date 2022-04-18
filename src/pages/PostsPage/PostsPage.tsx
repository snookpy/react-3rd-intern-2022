import useGetPost from "../../hooks/useGetPost/useGetPost";
import PostDetail from "../../components/PostDetail/PostDetail";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

function PostsPage() {
  const { loading, posts } = useGetPost();

  return (
    <>
      <h1>Post Page</h1>
      <CreatePostForm />
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
