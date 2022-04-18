import { useParams } from "react-router";
import useGetComments from "../../hooks/useGetComments/useGetComments";

function Comments() {
  const { id } = useParams<"id">();
  const { loading, comments } = useGetComments(parseInt(id ?? ""));

  return (
    <div>
        {loading && <p>Loading comments...</p>}
      {comments.map((m) => (
        <div
          key={m.id}
          style={{
            marginBottom: 12,
          }}
        >
          <div>{m.body}</div>
          <div style={{
              fontStyle: 'italic',
              fontSize: 14,
              color: 'gray'
          }}>
            by {m.name} (${m.email})
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
