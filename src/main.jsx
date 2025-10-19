import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { EventDetails } from "./pages/EventDetails";
import { Settings } from "./pages/Settings";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: `/`, element: <Home /> },
      { path: `/about`, element: <About /> },
      { path: `/events`, element: <Events /> },
      { path: `/events/:eventId`, element: <EventDetails /> },
      { path: `/settings`, element: <Settings /> },
      { path: `*`, element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
