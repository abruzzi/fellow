import { Boards } from "../Boards.tsx";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Boards />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export { Root };
