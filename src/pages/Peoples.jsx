import { useEffect, useState } from "react";
import peoplesServices from "../services/peoples-services";
import { useNavigate } from "react-router-dom";

const Peoples = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const findList = async () => {
        let response = await peoplesServices.all()
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
                    <h3>Personas</h3>
                </div>
                <div className="col-sm-6 text-right">
                    <button className="btn btn-primary" onClick={() => { navigate("/create-people") }}>+ Nuevo</button>
                </div>
            </div>
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tipo</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Identificación</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombres</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Apellidos</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Telefono</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Correo Electronico</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Direccion</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fecha creación</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map(item => 
                        <tr>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.id }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.tipo }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.identificacion }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.nombres }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.apellidos }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.telefono }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.correo }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.direccion }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.creacion }</p></td>
                            <td><p class="text-xs text-center font-weight-bold mb-0">{ item.estado == 1 ? 'Activo' : 'Inactivo' }</p></td>
                            <td class="align-middle">
                                <span onClick={() => { navigate("/update-people/"+item.id) }} class="pointer badge badge-sm bg-gradient-primary">Editar</span>
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
            </div>
        </div>
    );
};
export default Peoples;