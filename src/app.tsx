import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PaymentMethodPage } from './pages/payment-method';
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Box } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentMethodPage />,
  },
]);

export const App = () => {
  return (
    <Box className="flex items-center justify-center">
      <Box className="flex items-center flex-col gap-2 max-w-[429px]">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </Box>
    </Box>
  )
}
