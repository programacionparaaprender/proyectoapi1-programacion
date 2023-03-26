const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example
     * usuario = 'mugan86' 
     * @param { string } usuario Usuario del que queremos los datos de la API
     */
    obtenerDatosDeUsuario: function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        return axios.get(url).then(
            data => data.data
        ).
        catch( error => error.response.data);
    },
    obtenerDatosDeUsuario3: function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        axios.get(url).then(
            data => {
                console.log(data.data);
            }
        ).
        catch( error => error.response.data);
    },
    obtenerDatosDeUsuario2: async function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        try{
            const response = await axios.get(url);
            return response.data;
        }catch(error){
            return error.response.data;
        }
    }
}