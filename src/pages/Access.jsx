import { useEffect, useState } from "react";
import excusesServices from "../services/excuses-services";
import { useNavigate } from "react-router-dom";
import accessServices from "../services/access-services";

const Access = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const findList = async () => {
        let inicio = document.getElementById("inicio").value
        let fin = document.getElementById("fin").value
        if(inicio == null || inicio == "" || fin == null || fin == ""){
            alert("Las fechas son obligatorias")
            return;
        }
        let response = await accessServices.findByDates(inicio, fin)
        if(response.success){
            setList(response.data)
        }else{
            alert("Ocurrio un error consultando el listado, inicia sesion nuevamente")
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Reporte de entradas y salidas</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label>Fecha inicio</label>
                        <input id="inicio" type="date" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label>Fecha fin</label>
                        <input id="fin" type="date" className="form-control" format="yyyy-mm-dd" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <button className="btn btn-primary mt-4" onClick={() => { findList() }}> Consultar </button>
                    </div>
                </div>
            </div>
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Persona</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tipo</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map(item => 
                        <tr>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.Persona.nombres + " " + item.Persona.apellidos + " (" + item.Persona.identificacion + ")" }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.tipo }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.creacion }</p></td>
                        </tr>
                    )}
                  </tbody>
                </table>
            </div>
        </div>
    );
};
export default Access;