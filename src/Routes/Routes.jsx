import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Home from "../pages/Home/Home";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../Root/Root";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee />,
                loader: ({params})=> fetch(`http://localhost:5001/coffee/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <CoffeeDetails />,
                loader: ({params})=> fetch(`http://localhost:5001/coffee/${params.id}`)
            }
        ]
    }
])

export default Routes;