import { useEffect, useState } from "react";
import peoplesServices from "../../services/peoples-services";
import { useNavigate, useParams } from "react-router-dom";
import horariesService from "../../services/horaries-service";

const HoraryForm = () => {
    const navigate = useNavigate();
    let { id_persona } = useParams();
    const [form, setForm] = useState({
        id_persona: id_persona,
        dias: []
    });

    const diasSemana = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"]

    useEffect(() => {
        if(id_persona != null && id_persona != ""){
            findData()
        }
    }, [])

    const findData = async () => {
        const response = await horariesService.findByPeople(id_persona)
        if(response.success){
            let dias = []
            response.data.forEach(item => {
                dias.push({
                    "dia": item.dia_semana,
                    "entrada": item.hora_inicio,
                    "salida": item.hora_fin
                })
            });
            setForm({
                id_persona: id_persona,
                dias: dias
            })
        }else{
            alert(response.message)
        }
    }

    const save = async () => {
        const response = await horariesService.save(form)
        alert(response.message)
        if(response.success){
            navigate("/horaries")
        }
    }

    const deleteDay = (index) => {
        let _dias = form.dias
        _dias.splice(index, 1)
        setForm({
            id_persona: id_persona,
            dias: _dias
        })
    }

    const addDay = () => {
        let _dias = form.dias
        _dias.push({
            "dia": "LUNES",
            "entrada": "07:00",
            "salida": "18:00"
        })
        setForm({
            id_persona: id_persona,
            dias: _dias
        })
    }

    const setDayWeek = (index, value) => {
        let _dias = form.dias
        _dias[index].dia = value
        setForm({
            id_persona: id_persona,
            dias: _dias
        })
    }

    const setTimeInput = (index, value) => {
        let _dias = form.dias
        _dias[index].entrada = value
        setForm({
            id_persona: id_persona,
            dias: _dias
        })
    }

    const setTimeOutput = (index, value) => {
        let _dias = form.dias
        _dias[index].salida = value
        setForm({
            id_persona: id_persona,
            dias: _dias
        })
    }
    return (
        <div>
            <h3>Horario de persona #{id_persona}</h3>
            <button className="btn btn-primary" onClick={() => {addDay()}}>+ Nuevo</button>
            { form.dias.map((item, index) => 
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Dia semana</label>
                            <select onChange={(e) => {
                                setDayWeek(index, e.target.value)
                            }} className="form-control">
                                { diasSemana.map(diaSemana => 
                                    <option selected={item.dia == diaSemana} value={diaSemana}>{diaSemana}</option>
                                ) }
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Hora inicio</label>
                            <input onChange={(e) => {
                                setTimeInput(index, e.target.value)
                            }} type="time" class="form-control" value={item.entrada} />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Hora fin</label>
                            <input onChange={(e) => {
                                setTimeOutput(index, e.target.value)
                            }} type="time" class="form-control" value={item.salida} />
                        </div>
                    </div>

                    <div class="col-md-3">
                        <br />
                        <button onClick={() => {deleteDay(index)}} className="btn btn-danger mt-1">Eliminar</button>
                    </div>
                </div>
            )}
            <div class="row">
                <div class="col-md-12 text-center">
                    <button onClick={() => {save()}} className="btn btn-primary">Guardar cambios</button>
                </div>
            </div>
        </div>
    );
};
export default HoraryForm;