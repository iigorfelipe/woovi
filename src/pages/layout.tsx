import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center flex-col gap-2 max-w-[429px]">
        <Header />
          <Outlet />
        <Footer />
      </div>
    </div>
  );
};
