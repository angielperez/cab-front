import { useEffect, useState } from "react";
import peoplesServices from "../../services/peoples-services";
import { useNavigate, useParams } from "react-router-dom";
import excusesServices from "../../services/excuses-services";
import horariesService from "../../services/horaries-service";

const ExcusesForm = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id: null,
        id_persona: null,
        id_horario: null,
        observaciones: "",
        fecha: "",
        estado: 1 
    });

    const [peoples, setPeoples] = useState([]);
    const [horaries, setHoraries] = useState([]);

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

    const findHorariesByPeople = async (id_persona) => {
        const response = await horariesService.findByPeople(id_persona)
        if(response.success){
            setHoraries(response.data)
        }
    }

    const findData = async () => {
        const response = await excusesServices.findById(id)
        if(response.success){
            setForm(response.data)
            findHorariesByPeople(response.data.id_persona)
        }else{
            alert(response.message)
        }
    }

    const save = async () => {
        const response = await excusesServices.save(form)
        alert(response.message)
        if(response.success){
            navigate("/excuses")
        }
    }

    return (
        <div>
            <h3>Formulario de excusas</h3>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Fecha de aplicación</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                fecha: e.target.value
                            });
                        }} type="date" class="form-control" value={form.fecha} />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Observaciones</label>
                        <input onChange={(e) => {
                            setForm({
                                ...form,
                                observaciones: e.target.value
                            });
                        }} type="text" class="form-control" value={form.observaciones} />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Persona</label>
                        <select onChange={(e) => {
                            setForm({
                                ...form,
                                id_persona: e.target.value
                            });
                            findHorariesByPeople(e.target.value)
                        }} className="form-control">
                            { peoples.map(item => 
                                <option selected={form.id_persona == item.id} value={item.id}>{item.nombres + " " + item.apellidos + " (" + item.identificacion + ")"}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Horario</label>
                        <select onChange={(e) => {
                            setForm({
                                ...form,
                                id_horario: e.target.value
                            });
                        }} className="form-control">
                            <option value="">Seleccione...</option>
                            { horaries.map(item => 
                                <option selected={form.id_horario == item.id} value={item.id}>{item.dia_semana + " de " + item.hora_inicio + " a " + item.hora_fin}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
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
export default ExcusesForm;