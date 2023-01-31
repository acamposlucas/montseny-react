import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import { HomePage } from "./pages/Home/HomePage";
import { ReservaPage } from "./pages/Reserva/ReservaPage";
import { SobrePage } from "./pages/Sobre/SobrePage";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/sobre",
        element: <SobrePage />
      },
      {
        path: "/reserva",
        element: <ReservaPage />
      },
      {
        path: "/acomodacoes",
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
