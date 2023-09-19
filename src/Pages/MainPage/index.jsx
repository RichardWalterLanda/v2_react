
import { Outlet } from "react-router-dom";
import { Navigation } from "../../Shared"

export default function MainPage() {
  return <div className="w-full h-full">
    <Navigation />

    <Outlet />
  </div>;
}
