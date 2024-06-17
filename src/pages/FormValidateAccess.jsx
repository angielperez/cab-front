import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import accessServices from "../services/access-services";

const FormValidateAccess = () => {
    let { type } = useParams();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(true);
    useEffect(() => {
    }, [])

    const validateAccess = async (event) => {
        if(event.keyCode == 13) {
            let request = {
                identificacion: event.target.value,
                tipo: type
            }
            document.getElementById("identificacion").value = ""
            let response = await accessServices.validateAccess(request)
            setErrorMessage(!response.success)
            setMessage(response.message)
            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 5 * 1000);
        }
    }
    return <>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <link href="/plantilla/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <link href="/plantilla/assets/css/nucleo-svg.css" rel="stylesheet" />
        <link id="pagestyle" href="/plantilla/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet" />
        <link href="/general.css" rel="stylesheet"></link>
        <div class="g-sidenav-show">
            <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <main class="main-content position-relative border-radius-lg ">
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-lg-12 mb-lg-0 mb-4">
                            <div class="card z-index-2 h-100 m-4">
                                <div class="card-body text-center p-6">
                                <h1 className="text-black">Control de acceso</h1>
                                <h3 className="text-black">{type == 'ENTRADA' ? 'Zona de entrada' : 'Zona de salida'}</h3>
                                <img src="/id.png" height={270} />
                                    <div className="text-center">
                                        <input id="identificacion" onKeyUp={validateAccess} type="text" className="form-control input-access" placeholder="Ingrese su numero de identificación" />
                                    </div>
                                    { show && 
                                        <h2 className={errorMessage ? 'msg-error' : 'msg-success'}>{message}</h2>
                                    }
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
export default FormValidateAccess;