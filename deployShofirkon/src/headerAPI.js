import axios from "axios";

const headerAPI = (url,langType)=>axios.get("https://api1.buxoro.uz/"+url,{
    headers:{
        accept:"*/*",
        langType,
    }
});
export const domen = "https://api1.buxoro.uz/"
export default headerAPI;