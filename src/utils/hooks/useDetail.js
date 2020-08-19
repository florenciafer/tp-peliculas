import useGet from "./useGet";
import { URL_BASE } from "../../constantes/apiConfig";

const useDetail = (media, id, subresource = "", language = "en-US") => {
    const endpoint = `${media}/${id}${subresource ? `/${subresource}` : ""}`;
    return useGet(`${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`);
}

export default useDetail