import { Http } from '../http/axios/axios';

export const postOrPut = async (body, id = null) => {
    return id ? Http('PUT', `${"/newsletter/"}${id}`, body) :  Http('POST', `${"/newsletter"}`, body)
}
