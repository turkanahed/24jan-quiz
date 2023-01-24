import ROUTES from "./routes/route";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router=createBrowserRouter(ROUTES)
function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
