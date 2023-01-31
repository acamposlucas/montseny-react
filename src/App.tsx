import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/reserva",
      },
      {
        path: "/acomodacoes"
      },
      {
        path: "/cadastro"
      },
      {
        path: "/login"
      },
      {
        path: "/contato"
      }
    ]
  }
])

export default function App() {
	return (
    <RouterProvider router={router} />
  );
}
