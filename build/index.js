"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDatosDeUsuario3 = exports.obtenerDatosDeUsuario = void 0;
const axios_1 = __importDefault(require("axios"));
function obtenerDatosDeUsuario(usuario) {
    const url = `https://api.github.com/users/${usuario}`;
    return axios_1.default.get(url).then(data => data.data).
        catch(error => error.response.data);
}
exports.obtenerDatosDeUsuario = obtenerDatosDeUsuario;
function obtenerDatosDeUsuario3(usuario) {
    const url = `https://api.github.com/users/${usuario}`;
    axios_1.default.get(url).then(data => {
        const estilos = 'background-color: #ff3300; color: white; font-size: 30px; display:block;text-align:center;text-decoration:none;';
        console.log(data.data, estilos);
    }).
        catch(error => error.response.data);
}
exports.obtenerDatosDeUsuario3 = obtenerDatosDeUsuario3;
