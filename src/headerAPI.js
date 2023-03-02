import axios from "axios";
const Apis = process.env.REACT_APP_API_ROOT;
//nmaligini bilmayman buni


const headerAPI = (url,langType)=>axios.get("https://api.shofirkon.buxoro.uz/"+url,{
    headers:{
        accept:"*/*",
        langType,
    }
});
export const domen = "https://api.buxoro.uz/"
//mani kodim emas patdagi

export function getData(url, header1, header2) {
    return (
        axios.get(Apis + url, {
            headers: {
                accept: header1,
                langType: header2
            }
        })
    )
}
export default headerAPI;