import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import SharedLayout from "./SharedLayout";

import { ProductListing } from "../pages";
import { useAuthContext } from "../contexts";

const Index = () => {
  const { token } = useAuthContext();
  const location = useLocation();

  return (
    <Routes>
      <Route
        element={
          token ? (
            <Navigate
              to={location?.state?.from?.pathname ?? "/"}
              replace={true}
            />
          ) : (
            <Outlet />
          )
        }
      >
      </Route>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<ProductListing />} index />
        <Route path="*" element={<ProductListing />} />
      </Route>
    </Routes>
  );
};

export { Index };
