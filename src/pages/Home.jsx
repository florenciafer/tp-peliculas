import React from "react";
import CardContainer from "../components/Card-Container";
import CategoryPreview from "../components/CategoryPreview";

const Home = () => {
  // const [categoriasTendencias, setCategoriasHome] = useState(null)
  //CategoryPreview va a tener un ituulo con Link me va redireccionar a "/media/categotry/page/1",ej "movie/trending/page/1"
  // CardContainer que me va a monstrar solo 5 cards que la informacion la voy a obtener del endpoint que corresponda
  // voy a usar useEffect y axios para consumir la api
  return (
    <div>

      <CategoryPreview media="movie" category="trending" />
      <CategoryPreview category="popular" media="tv" />

    </div>
  );
};

export default Home;
