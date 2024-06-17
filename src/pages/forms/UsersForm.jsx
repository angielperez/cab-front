import { useEffect, useState } from "react";
import peoplesServices from "../../services/peoples-services";
import { useNavigate, useParams } from "react-router-dom";
import usersServices from "../../services/users-services";

const UsersForm = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id: null,
        usuario: "",
        clave: "",
        estado: 1 
    });

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        findPeoples()
        if(id != null && id != ""){
            findData()
        }
    }, [])

    const findPeoples = async () => {
        const response = await peoplesServices.all()
        if(response.success){
            setPeoples(response.data)
        }
    }

    const findData = async () => {
        const response = await usersServices.findById(id)
        if(response.success){
            setForm(response.data)
        }else{
            alert(response.message)
        }
    }

    const save = async () => {
        const response = await usersServices.save(form)
        alert(response.message)
        if(response.success){
            navigate("/users")
        }
    }

    return (
        <div>
            <h3>Formulario de usuarios</h3>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Usuario</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                usuario: e.target.value
                            });
                        }} type="text" class="form-control" value={form.usuario} />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                clave: e.target.value
                            });
                        }} type="password" class="form-control" value={form.clave} />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Persona</label>
                        <select onChange={(e) => {
                            setForm({
                                ...form,
                                id_persona: e.target.value
                            });
                        }} className="form-control">
                            { peoples.map(item => 
                                <option selected={form.id_persona == item.id} value={item.id}>{item.nombres + " " + item.apellidos + " (" + item.identificacion + ")"}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Estado</label>
                        <select onChange={(e) => {
                            setForm({
                                ...form,
                                estado: e.target.value
                            });
                        }} className="form-control">
                            <option selected={form.estado == 1} value="1">Activo</option>
                            <option selected={form.estado == 0} value="0">Inactivo</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <button onClick={() => {save()}} className="btn btn-primary">Guardar cambios</button>
                </div>
            </div>
        </div>
    );
};
export default UsersForm;