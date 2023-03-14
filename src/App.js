import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Fragment } from "react";

import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Admin from "./components/admin/admin.component";
import AllProducts from "./components/admin/all-products/all-products.components";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AllProducts />}/>
          <Route path="/admin/all-products" element={<AllProducts />}/>
        </Route>
      </Fragment>
      
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
