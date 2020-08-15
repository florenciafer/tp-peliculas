import React from "react";
import CardContainer from "../Card-Container";
import { useParams } from "react-router-dom";
import useTitle from "../../utils/hooks/useTitle";

const Category = () => {
  const { media, category } = useParams();
  const title = useTitle(media, category);
  return {

  }

};

export default Category;
