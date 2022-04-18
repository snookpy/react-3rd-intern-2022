import { Outlet, useNavigate } from "react-router";
import SideBarNav from "./SideBarNav";

function PostInfoPage() {
  const navi = useNavigate();
  return (
    <>
      <button
        style={{
          marginBottom: 12,
        }}
        onClick={() =>
          navi("/posts", {
            replace: true,
          })
        }
      >
        back
      </button>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "30%",
          }}
        >
          <SideBarNav />
        </div>
        <div
          style={{
            width: "70%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PostInfoPage;
