import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PaymentMethodPage } from './pages/payment-method';
import { PixCreditCard } from "./pages/pix+credit-card";
import { Layout } from "./pages/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/payment-method",
        element: <PaymentMethodPage />,
      },
      {
        path: "/pix+credit-card",
        element: <PixCreditCard />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />
}