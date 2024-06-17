import { useEffect, useState } from "react";
import peoplesServices from "../../services/peoples-services";
import { useNavigate, useParams } from "react-router-dom";

const PeoplesForm = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id: null,
        tipo: "",
        identificacion: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        direccion: "",
        estado: 1 
    });

    useEffect(() => {
        if(id != null && id != ""){
            findData()
        }
    }, [])

    const findData = async () => {
        const response = await peoplesServices.findById(id)
        if(response.success){
            setForm(response.data)
        }else{
            alert(response.message)
        }
    }

    const save = async () => {
        const response = await peoplesServices.save(form)
        alert(response.message)
        if(response.success){
            navigate("/peoples")
        }
    }

    return (
        <div>
            <h3>Formulario de personas</h3>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Identificación</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                identificacion: e.target.value
                            });
                        }} type="text" class="form-control" value={form.identificacion} />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Nombres</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                nombres: e.target.value
                            });
                        }} type="text" class="form-control" value={form.nombres} />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Apellidos</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                apellidos: e.target.value
                            });
                        }} type="text" class="form-control" value={form.apellidos} />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Telefono</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                telefono: e.target.value
                            });
                        }} type="text" class="form-control" value={form.telefono} />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Correo Electronico</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                correo: e.target.value
                            });
                        }} type="text" class="form-control" value={form.correo} />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Direccion</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                direccion: e.target.value
                            });
                        }} type="text" class="form-control" value={form.direccion} />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Tipo</label>
                        <select onChange={(e) => {
                            setForm({
                                ...form,
                                tipo: e.target.value
                            });
                        }} className="form-control">
                            <option selected={form.tipo == "PROFESOR"} value="PROFESOR">Profesor</option>
                            <option selected={form.tipo == "RECTOR"} value="RECTOR">Rector</option>
                            <option selected={form.tipo == "SECRETARIA"} value="SECRETARIA">Secretaria</option>
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
export default PeoplesForm;