import axios from "axios";
// get All
export const getDoctor = (url) => {
    return axios
        .get("http://localhost:8000/")
        .then(resp => {
            const response = resp.data;
            return Promise.resolve(response);
        })
        .catch(resp => {
            return Promise.reject("Error");
        });
};
