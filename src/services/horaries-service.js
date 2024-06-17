import enviroment from '../enviroment.json'
import { consumeBack } from './consumer';
class HoraryService{
    findByPeople = async (id_persona) => {
        try {
            const url = `${enviroment.backend}/horario/find-by-people/${id_persona}`
            const response = await consumeBack('GET', url);
            return response.data
        } catch (error) {
            return {
                success: false,
                message: "Ocurrio un error, intentelo nuevamente",
                data: error
            }
        }        
    }

    save = async (request) => {
        try {
            const url = `${enviroment.backend}/horario/save`
            const response = await consumeBack('POST', url, request);
            return response.data
        } catch (error) {
            return {
                success: false,
                message: "Ocurrio un error, intentelo nuevamente",
                data: error
            }
        }        
    }
}

export default new HoraryService();