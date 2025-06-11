import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
