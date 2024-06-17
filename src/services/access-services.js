import enviroment from '../enviroment.json'
import { consumeBack } from './consumer';
class AccessService{
    validateAccess = async (request) => {
        try {
            const url = `${enviroment.backend}/entrada-salida/validate`
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

    findByDates = async (inicio, fin) => {
        try {
            let request = {
                inicio: inicio,
                fin: fin
            }
            const url = `${enviroment.backend}/entrada-salida/find-by-date`
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

export default new AccessService();