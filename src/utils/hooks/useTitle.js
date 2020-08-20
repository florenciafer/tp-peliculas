import { MEDIA, CATEGORY } from "../../constantes/tags";
// movies upcoming
// peliculas a estrenar
const useTitle = (media, category) => {
    if (media === "multi") {
        return `Resultados para :${category}`
    }
    return `${MEDIA[media]} ${CATEGORY[category]}`
}

export default useTitle
