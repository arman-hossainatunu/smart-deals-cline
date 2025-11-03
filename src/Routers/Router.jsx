import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyProducts from "../Pages/MyProducts";
import MyBids from "../Pages/MyBids";
import CreateProduct from "../Pages/CreateProduct";
import ProductsDetails from "../Components/ProductsDetails";
import PrivateRoute from "../Context/PrivateRoute";
import Update from "../Components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/products-latest"),
      },
      {
        path: "allProducts",
        Component: AllProducts,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            {" "}
            <ProductsDetails></ProductsDetails>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/update/:_id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "myProducts",
        Component: MyProducts,
      },
      {
        path: "myBids",
        Component: MyBids,
      },
      {
        path: "createProduct",
        Component: CreateProduct,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

export default router;
