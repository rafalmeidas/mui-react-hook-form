import { Route, Routes } from "react-router-dom";

import WithoutValidation from "./pages/WithoutValidation";
import Layout from "./templates/Layout";

import routes from "./routes";

function App() {
  const { defaultRoute, missing } = routes;

  return (
    <Routes>
      <Route path={defaultRoute} element={<Layout />}>
        {/* public routes */}
        <Route index element={<WithoutValidation />} />

        {/* catch all */}
        <Route path={missing} element={<>Não encontrou a rota</>} />
      </Route>
    </Routes>
  );
}

export default App;
