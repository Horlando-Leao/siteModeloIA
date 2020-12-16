import Axios from 'axios';

class api_model(){
    constructor(ulr){
        this.url = ulr;
    }

    get call_api_model_predict_complet(){
        const detect_complet = () => {
            axios.get(`htpp://127.0.0.1/alerta/semtratamento/${this.url}`)
                .then(response => {
                    const predict = response.data.data;
                    return predict
                })
                .catch(error => console.error(error));
        };
    }
    get call_api_model_predic_face(){
        const detect_complet = () => {
            axios.get(this.url)
                .then(response => {
                    const predict = response.data.data;
                    return predict
                })
                .catch(error => console.error(error));
        };
    }
    get call_api_model_predic_body(){
        const detect_complet = () => {
            axios.get(this.url)
                .then(response => {
                    const predict = response.data.data;
                    return predict
                })
                .catch(error => console.error(error));
        };
    }
    get call_api_model_predic_guns(){
        const detect_complet = () => {
            axios.get(this.url)
                .then(response => {
                    const predict = response.data.data;
                    return predict
                })
                .catch(error => console.error(error));
        };
    }


    
}

