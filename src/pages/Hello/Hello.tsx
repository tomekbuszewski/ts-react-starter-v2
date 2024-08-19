import { Link } from "react-router-dom";

export default function HelloPage() {
  return (
    <>
      <p className="mb-2">Hello from page Hello</p>
      <ul>
        <li>
          <Link to="/nested">Go to a nested route</Link>
        </li>
        <li>
          <Link to="/with-fetch">Go to a page with api calls</Link>
        </li>
        <li>
          <Link to="/goodbye">Go to Goodbye</Link>
        </li>
      </ul>
    </>
  );
}
