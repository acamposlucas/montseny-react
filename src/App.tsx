import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import { Acomodacoes } from "./pages/Acomodacoes/Acomodacoes";
import { CadastroPage } from "./pages/Cadastro/CadastroPage";
import { HomePage } from "./pages/Home/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
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
        element: <Acomodacoes />
      },
      {
        path: "/cadastro",
        element: <CadastroPage />
      },
      {
        path: "/login",
        element: <LoginPage />
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
