
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../../Shared"
import MainPageComponent from "./MainPageComponent";

export default function MainPage() {
  const location = useLocation()
  // console.log(location);
  return <div className="w-full h-full overflow-hidden">
    <Navigation />

    {location.pathname == "/main" ? <MainPageComponent /> : <Outlet />}

  </div>;
}
