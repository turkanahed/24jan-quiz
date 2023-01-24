import MainRoot from "../components/MainRoot";
import Add from "../pages/Add";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Pages from "../pages/Pages";
import Shop from "../pages/Shop";

const ROUTES = [
    {
        path: "/",
        element: <MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/pages",
                element:<Pages/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/add",
                element:<Add/>
            },
        ]
    }
]

export default ROUTES