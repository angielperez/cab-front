import enviroment from '../enviroment.json'
import { consumeBack } from './consumer';
class AuthService{
    login = async (request) => {
        try {
            const url = `${enviroment.backend}/auth/login`
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

export default new AuthService();