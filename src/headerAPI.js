import axios from "axios";

const headerAPI = (url,langType)=>axios.get("http://bukhara.xushnazarov.uz"+url,{
    headers:{
        accept:"*/*",
        langType,
    }
});

export default headerAPI;