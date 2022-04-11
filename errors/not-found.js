import {StatusCodes} from 'http-status-codes'
import CustomAPIError from './custom-api.js'


class NotFounderError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.Not_Found
    }
}

export default NotFounderError