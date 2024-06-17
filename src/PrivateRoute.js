import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
    const user = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo = (route) => {
        navigate(route);
    }
    
    if (user.token == null || user.token == undefined || user.token == "") return <Navigate to="/login" />;
    return <>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <link href="/plantilla/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
        <link href="/general.css" rel="stylesheet" />
        <link id="pagestyle" href="/plantilla/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet" />

        <div class="g-sidenav-show   bg-gray-100">
            <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
                <div class="sidenav-header">
                    <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                        <img src="/plantilla/assets/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo" />
                        <span class="ms-1 font-weight-bold">CAB</span>
                    </a>
                </div>
                <hr class="horizontal dark mt-0" />
                <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class={`nav-link ${location.pathname == "/dashboard" && 'active' }`} onClick={ () => { redirectTo('/dashboard') } }>
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Inicio</span>
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a class={`nav-link ${location.pathname == "/peoples" && 'active' }`} onClick={() => { redirectTo('/peoples') } } >
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-warning text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Personas</span>
                            </a>
                        </li>
                        <li class="nav-item" >
                            <a class={`nav-link ${location.pathname == "/users" && 'active' }`} onClick={() => { redirectTo('/users') } } >
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-warning text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Usuarios</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link ${location.pathname == "/horaries" && 'active' }`} onClick={() => { redirectTo('/horaries') } }>
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-success text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Horarios</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link ${location.pathname == "/access" && 'active' }`} onClick={() => { redirectTo('/access') } }>
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-info text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Entradas y salidas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link ${location.pathname == "/excuses" && 'active' }`} onClick={() => { redirectTo('/excuses') } }>
                                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="ni ni-tv-2 text-danger text-sm opacity-10"></i>
                                </div>
                                <span class="nav-link-text ms-1">Excusas</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
            <main class="main-content position-relative border-radius-lg ">
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                    <div class="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="javascript:;">Paginas</a></li>
                                <li class="breadcrumb-item text-sm text-white active" aria-current="page">Bienvenido {user.user}!</li>
                            </ol>
                        </nav>
                        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group">
                                </div>
                            </div>
                            <ul class="navbar-nav  justify-content-end">
                                <li class="nav-item d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-white font-weight-bold px-0">
                                        <span onClick={() => user.actions.logOut()} class="d-sm-inline d-none">Salir</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-lg-12 mb-lg-0 mb-4">
                            <div class="card z-index-2 h-100">
                                <div class="card-body p-3">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <script src="/plantilla/assets/js/core/popper.min.js"></script>
            <script src="/plantilla/assets/js/core/bootstrap.min.js"></script>
            <script src="/plantilla/assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="/plantilla/assets/js/plugins/smooth-scrollbar.min.js"></script>
            <script src="/plantilla/assets/js/plugins/chartjs.min.js"></script>

            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <script src="/plantilla/assets/js/argon-dashboard.min.js?v=2.0.4"></script>
        </div>
    </>
};
export default PrivateRoute;