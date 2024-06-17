import { Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Peoples from "./pages/Peoples";
import Horaries from "./pages/Horaries";
import Access from "./pages/Access";
import Excuses from "./pages/Excuses";
import Users from "./pages/Users";
import FormValidateAccess from "./pages/FormValidateAccess";
import PeoplesForm from "./pages/forms/PeoplesForm";
import UsersForm from "./pages/forms/UsersForm";
import ExcusesForm from "./pages/forms/ExcusesForm";
import HoraryForm from "./pages/forms/HoraryForm";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/validate-access/:type" element={<FormValidateAccess />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/peoples" element={<Peoples />} />
            <Route path="/create-people" element={<PeoplesForm />} />
            <Route path="/update-people/:id" element={<PeoplesForm />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create-user" element={<UsersForm />} />
            <Route path="/update-user/:id" element={<UsersForm />} />
            <Route path="/horaries" element={<Horaries />} />
            <Route path="/config-horary/:id_persona" element={<HoraryForm />} />
            <Route path="/access" element={<Access />} />
            <Route path="/excuses" element={<Excuses />} />
            <Route path="/create-excuse" element={<ExcusesForm />} />
            <Route path="/update-excuse/:id" element={<ExcusesForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
