import { useEffect, useState } from "react";
import excusesServices from "../services/excuses-services";
import { useNavigate } from "react-router-dom";
import { parseDate } from "../utils";

const Excuses = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const findList = async () => {
        let response = await excusesServices.all()
        if(response.success){
            setList(response.data)
        }else{
            alert("Ocurrio un error consultando el listado, inicia sesion nuevamente")
        }
    }

    useEffect(() => {
        findList()
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Excusas</h3>
                </div>
                <div className="col-sm-6 text-right">
                    <button className="btn btn-primary" onClick={() => { navigate("/create-excuse") }}>+ Nuevo</button>
                </div>
            </div>
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Persona</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Horario</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fecha de aplicación</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Observaciones</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fecha creación</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map(item => 
                        <tr>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.id }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.Persona.nombres + " " + item.Persona.apellidos + " (" + item.Persona.identificacion + ")" }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.Horario.dia_semana + " de " + item.Horario.hora_inicio + " a " + item.Horario.hora_fin }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.fecha }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.observaciones }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ parseDate(new Date(item.creacion)) }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.estado == 1 ? 'Activo' : 'Inactivo' }</p></td>
                            <td class="align-middle">
                                <span onClick={() => { navigate("/update-excuse/"+item.id) }} class="pointer badge badge-sm bg-gradient-primary">Editar</span>
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
            </div>
        </div>
    );
};
export default Excuses;