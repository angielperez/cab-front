import { useAuth } from "../AuthProvider";
const Dashboard = () => {
    const auth = useAuth();
    return (
        <div>
            <h1>Inicio</h1>
        </div>
    );
};
export default Dashboard;