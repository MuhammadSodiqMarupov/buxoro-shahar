import axios from "axios";

const headerAPI = (url,langType)=>axios.get("https://api.buxoro.uz/"+url,{
    headers:{
        accept:"*/*",
        langType,
    }
});
export const domen = "https://api.buxoro.uz/"
export default headerAPI;