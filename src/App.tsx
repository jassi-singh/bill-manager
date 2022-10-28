import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Analytics from "./pages/Analytics";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />

        <Route path="*" element={<div>Errors</div>} />
      </Route>
    </Routes>
  );
}

export default App;
