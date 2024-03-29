import "./App.css";
import Welcome from "./Pages/Welcome";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Filtering from "./Pages/Filtering";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movieDetail" element={<MovieDetails />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="w-[1280px] m-auto h-full">
        <Filtering />
      </div> */}
    </>
  );
}

export default App;
