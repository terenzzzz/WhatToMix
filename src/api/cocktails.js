// 导入 axios配置
import request from "../utils/request"

export const search = (name) => request({
    url: '/search.php',
    method: 'GET',
    params: {s: name}
});

