import { Link } from "react-router-dom";

export default [
  {
    path: "",
    element: (
      <div>
        I am main nested route. <Link to="/nested/deeper">Go deeper</Link>
      </div>
    ),
  },
  {
    path: "deeper",
    element: <div>I am deeper nested route</div>,
  },
];
