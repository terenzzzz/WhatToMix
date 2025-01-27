// 导入 axios配置
import request from "../utils/request"

export const search = (name) => request({
    url: '/search.php',
    method: 'GET',
    params: {s: name}
});


export const recipe = (id) => request({
    url: '/lookup.php',
    method: 'GET',
    params: {i: id}
});