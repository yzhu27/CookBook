import React from 'react';
import {useParams} from "react-router-dom";

const RecipeInformation = () => {
  let { id } = useParams();

  console.log('this is recipe info');
  return (
    <div style={{ width: '100vw'}}>
      <div style={{ float: 'left', width: '25vw'}}>Recipe pic</div>
      <div style={{ float: 'left', width: '50vw'}}>Recipe</div>
      <div style={{ float: 'left', width: '25vw'}}>Facts</div>
    </div>
  );
};

export default RecipeInformation;
