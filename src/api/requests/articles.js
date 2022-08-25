import { Http } from '../http/axios/axios';

export const indexArticles = async () => Http('GET', `${"/articles"}`)