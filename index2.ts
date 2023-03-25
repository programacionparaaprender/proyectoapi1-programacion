import axios from 'axios';


export function obtenerDatosDeUsuario( usuario: string ) {
    const url = `https://api.github.com/users/${ usuario }`;
    return axios.get(url).then(
        data => data.data
    ).
    catch( error => error.response.data);
}

export function obtenerDatosDeUsuario3( usuario: string ) {
    const url = `https://api.github.com/users/${ usuario }`;
    axios.get(url).then(
        data => {
            const estilos = 'background-color: #ff3300; color: white; font-size: 30px; display:block;text-align:center;text-decoration:none;';
            console.log(data.data, estilos);
        }
    ).
    catch( error => error.response.data);
}

