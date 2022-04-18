import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage/LayoutPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFound from "./pages/NotFound/NotFound";
import Comments from "./pages/PostInfoPage/Comments";
import Info from "./pages/PostInfoPage/Info";
import PostInfoPage from "./pages/PostInfoPage/PostInfoPage";
import PostsPage from "./pages/PostsPage/PostsPage";

const mainRouteObj: RouteObject = {
  path: "/",
  element: <LayoutPage />,
  children: [
    { path: "*", element: <NotFound /> },
    { path: "posts", element: <PostsPage /> },
    { path: "posts/:id", element: <PostInfoPage />, 
      children: [
        {
          path: "info",
          element: <Info />
        },
        {
          path: "comments",
          element: <Comments />
        }

      ] 
    },
    { path: "about", element: <AboutPage /> },
    { path: "/", element: <Navigate to="posts" /> }
  ],
};
// {
//   path: "/",
//   element: <LayoutPage disableFooter={disableFooter} />,
//   children: [
//     // normal page no need auth
//     { path: "*", element: <Navigate to="/404" replace={true} /> },
//     { path: "/", element: <Home /> },
//     { path: "suppliers", element: <Suppliers /> },
//     { path: "buyers", element: <Buyers /> },
//     { path: "service-providers", element: <ServiceProviders /> },
//     { path: "success-stories", element: <SuccessStories /> },
//     { path: "login", element: <Login /> },
//     { path: "reset-password/:token", element: <ResetPassword /> },
//     { path: "forgot-password", element: <ForgotPassword /> },
//     { path: "signup/:role", element: <Signup /> },
//     { path: "404", element: <PageNotFoundView /> },
//     { path: "no-permission", element: <PageNoPermissionView /> },
//     { path: "product/:productId", element: <ProductWrapper /> },
//     {
//       path: "company/:bid",
//       element: (
//         <RequireAuth>
//           <Company />
//         </RequireAuth>
//       ),
//       children: [
//         { path: "products", element: <BrandProducts /> },
//         { path: "profile", element: <BrandProfile /> },
//         { path: "submissions", element: <BrandSubmissions /> },
//         {
//           path: "/company/:bid",
//           element: <Navigate to="products" />,
//         },
//       ],
//     },

//     // need auth
//     {
//       path: "profile",
//       element: (
//         <RequireAuth>
//           <ProfileLayout />
//         </RequireAuth>
//       ),
//       children: [
//         { path: "main", element: <Profile /> },
//         {
//           path: "change-password",
//           element: <ProfileChangePassword />,
//         },
//         { path: "your-categories", element: <ProfileCategories /> },
//         {
//           path: "save-searches",
//           element: <ProfileSavedSearches />,
//         },
//         {
//           path: "notifications",
//           element: <ProfileNotifications />,
//         },
//         {
//           path: "sample-settings",
//           element: <ProfileSampleSettings />,
//         },
//         {
//           path: "custom-responses",
//           element: <ProfileCustomResponses />,
//         },
//         { path: "/profile", element: <Navigate to="main" /> },
//       ],
//     },
//     {
//       path: "edit-product/:brandId/:productId",
//       element: (
//         <RequireAuth>
//           <EditProduct />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "chat",
//       element: (
//         <RequireAuth>
//           <Chat />
//         </RequireAuth>
//       ),
//     },
//     {
//       path: "chat/:id",
//       element: (
//         <RequireAuth>
//           <Conversation />
//         </RequireAuth>
//       ),
//     },
//   ],
// };

function MainRoute() {
  return <>{useRoutes([mainRouteObj])}</>;
}
export default MainRoute;
