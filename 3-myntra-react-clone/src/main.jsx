import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Routes/App";
import "./index.css";
import Bag from "./Routes/Bag";
import { createRoot } from "react-dom/client";
import Home from "./Routes/Home";
import { Provider } from "react-redux";
import myntreStore from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import Notification from "./Components/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader*/ },
      { path: "/bag", element: <Bag /> /*, action: CreatePostAction*/ },
      { path: "/profile", element: <Profile/> },
      { path: "/notification", element: <Notification/> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntreStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
