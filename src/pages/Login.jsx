import { useState } from "react";
import authServices from "../services/auth-services";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleSubmitEvent = async (e) => {
        e.preventDefault();
        let request = {
            username: input.username,
            password: input.password
        }
        
        let response = await authServices.login(request)
        if(response.success){
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard");
        }else{
            alert(response.message);
        }
    };
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <>
            <link rel="icon" type="image/png" href="/plantilla/assets/img/favicon.png" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            <link href="/plantilla/assets/css/nucleo-icons.css" rel="stylesheet" />
            <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
            <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
            <link id="pagestyle" href="/plantilla/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet" />
            <main class="main-content  mt-0">
                <section>
                    <div class="page-header min-vh-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                                    <div class="card card-plain">
                                        <div class="card-header pb-0 text-start">
                                            <h4 class="font-weight-bolder">CAB</h4>
                                            <p class="mb-0">Bienvenido</p>
                                        </div>
                                        <div class="card-body">
                                            <form role="form" onSubmit={handleSubmitEvent}>
                                                <div class="mb-3">
                                                    <input name="username" type="text" class="form-control form-control-lg" placeholder="Usuario"
                                                        aria-label="Usuario" onChange={handleInput} />
                                                </div>
                                                <div class="mb-3">
                                                    <input name="password" type="password" class="form-control form-control-lg" placeholder="Contraseña"
                                                        aria-label="Contraseña" onChange={handleInput} />
                                                </div>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="rememberMe" />
                                                    <label class="form-check-label" for="rememberMe">Recordarme</label>
                                                </div>
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Ingresar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                    <div
                                        class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden">
                                        <span class="mask bg-gradient-primary opacity-6"></span>
                                        <h4 class="mt-5 text-white font-weight-bolder position-relative">"Sistema de Control de Acceso"</h4>
                                        <p class="text-white position-relative">Identificación Precisa y Segura del Personal de tu Institucion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <script src="/plantilla/assets/js/core/popper.min.js"></script>
            <script src="/plantilla/assets/js/core/bootstrap.min.js"></script>
            <script src="/plantilla/assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="/plantilla/assets/js/plugins/smooth-scrollbar.min.js"></script>
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <script src="/plantilla/assets/js/argon-dashboard.min.js?v=2.0.4"></script>
        </>
    );
};
export default Login;
