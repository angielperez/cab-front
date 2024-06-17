import enviroment from '../enviroment.json'
import { consumeBack } from './consumer';
class PeopleService{
    all = async () => {
        try {
            const url = `${enviroment.backend}/persona/all`
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

    findById = async (id) => {
        try {
            const url = `${enviroment.backend}/persona/find-by-id/` + id
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
            const url = `${enviroment.backend}/persona/${request.id == null ? 'create' : 'update/'+request.id}`
            const response = await consumeBack(request.id == null ? 'POST' : 'PUT', url, request);
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

export default new PeopleService();