import React from 'react';
import {useParams} from "react-router-dom";

const RecipeInformation = () => {
  let { id } = useParams();

  console.log('this is recipe info');
  return (
    <div>
      This is the Recioe Information page for id {id}
    </div>
  );
};

export default RecipeInformation;
