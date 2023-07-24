import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import SharedLayout from "./SharedLayout";

import { ProductListing } from "../pages";

const Index = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route
        element={
            <Outlet />
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
