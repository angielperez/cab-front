import { Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Horaries from "./pages/Horaries";
import Access from "./pages/Access";
import Excuses from "./pages/Excuses";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/horaries" element={<Horaries />} />
            <Route path="/access" element={<Access />} />
            <Route path="/excuses" element={<Excuses />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
