import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "@/app/config/routes";

const RoutesMap = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={"От такот"}>{route.element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default RoutesMap;
