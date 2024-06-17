import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import peoplesServices from "../services/peoples-services";
import horariesService from "../services/horaries-service";

const Horaries = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [id_persona, setIdPersona] = useState(null);
    
    const findPeoples = async () => {
        const response = await peoplesServices.all()
        if(response.success){
            setPeoples(response.data)
        }
    }
    const findList = async (id_persona) => {
        setIdPersona(id_persona)
        if(id_persona == null){
            alert("Debe escoger una persona")
            return;
        }
        let response = await horariesService.findByPeople(id_persona)
        if(response.success){
            setList(response.data)
        }else{
            alert("Ocurrio un error consultando el listado, inicia sesion nuevamente")
        }
    }

    useEffect(() => {
        findPeoples()
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <h3>Horarios por persona</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label>Persona</label>
                        <select id="id_persona" onChange={(e) => {
                            findList(e.target.value)
                        }} className="form-control">
                            <option selected disabled>Seleccione...</option>
                            { peoples.map(item => 
                                <option value={item.id}>{item.nombres + " " + item.apellidos + " (" + item.identificacion + ")"}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Dia de semana</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hora inicio</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hora fin</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map(item => 
                        <tr>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.id }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.dia_semana }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.hora_inicio }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.hora_fin }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.estado == 1 ? 'Activo' : 'Inactivo' }</p></td>
                        </tr>
                    )}
                  </tbody>
                </table>
                
                
            </div>
            { id_persona != null && 
                <div className="row">
                    <div className="col-sm-12 text-right mt-2">
                        <button className="btn btn-primary" onClick={() => { navigate("/config-horary/"+id_persona) }}>Configurar horario</button>
                    </div>
                </div>
            }
        </div>
    );
};
export default Horaries;