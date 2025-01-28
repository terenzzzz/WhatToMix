// 导入 axios配置
import request from "../utils/request"
import requestForRapid from "@/utils/requestForRapid.js";

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


export const randomCocktail = () => request({
    url: '/random.php',
    method: 'GET',
});

export const searchByIngredient = (name) => requestForRapid({
    url: '/filter.php',
    method: 'GET',
    params: {i: name}
});

export const searchIngredientByName = (name) => request({
    url: '/search.php',
    method: 'GET',
    params: {i: name}
});



