import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

function AppLayout() {
  return (
    <Fragment>
      AppLayout
      <p>banner</p>
      <p>navbar</p>
      <main className="min-h-screen">{<Outlet />}</main>
      <p>footer</p>
      <p>cart sidebar</p>
    </Fragment>
  );
}

export default AppLayout;
