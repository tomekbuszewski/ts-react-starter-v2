import { Outlet } from "react-router-dom";

export default function ApiPage() {
  return (
    <div className="border-1">
      <Outlet />
    </div>
  );
}
