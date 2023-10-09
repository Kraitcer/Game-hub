import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetalePage from "./pages/GameDetalePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetalePage /> },
    ],
  },
]);

export default router;
