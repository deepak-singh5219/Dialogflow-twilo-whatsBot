const app = require("express");
const axios:any = require("axios");

export const generatePDF = async (details:object) => {

    try {

        const data = await axios.post('https://monkfish-app-29mfl.ondigitalocean.app/',details);
        console.log(data);
        // axios.post('https://monkfish-app-29mfl.ondigitalocean.app/',details)
    // .then((obj:any) => {
    //     console.log(obj.data);
    //     return obj;

    // })
    // .catch((err:any)=> {
    //     console.log(err);
    // })

    } catch (error) {
        console.log(error);
    }
}

// module.exports = generatePDF;