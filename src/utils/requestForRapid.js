// 网络请求封装
import axios from 'axios'
import {API_URL_Rapid} from "./connection";

// 创建一个axios实例
const request = axios.create({
    baseURL: API_URL_Rapid,  // 基础URL
    timeout: 100000,  // 请求超时时间
    headers: {
        'x-rapidapi-key': 'c943ffbbb0mshda7ac59ad2f9d08p1f9b7bjsnb487ed3d6513',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    }
});


export default request;