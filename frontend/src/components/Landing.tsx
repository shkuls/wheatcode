
import About from "./About";
import Problems from "./Problems";
import Activity from "./Activity";
import Leaderboard from "./Leaderboard";
import ProblemDesc from "./[pid]";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { pid } from "process";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About/>,
    
  },
  {
    path: "/about",
    element: <About/>,
    
  },
  {
    path: "/problems",
    element: <Problems/>,
    
  },
  {
    path: "/activity",
    element: <Activity/>,
    
  },
  {
    path: "/leaderboard",
    element: <Leaderboard/>,
    
  },
  {
    path: "/problems/*",
    element: <ProblemDesc />,
    
  },
]);

export default function Landing() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}
