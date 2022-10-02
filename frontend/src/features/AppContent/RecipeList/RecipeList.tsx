import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getRecipeInfoInitiator } from '../RecipeInformation/getRecipeInformation.action';

interface RecipeListData {
  id: string;
  name: string;
  description: string;
}

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [recipeList, setRecipeList] = useState<readonly RecipeListData[]>([]);

  const getRecipeListState = useSelector((state: any) => state.getRecipeListAppState);

  useEffect(() => {
    let recipes = getRecipeListState.getRecipeListData;
    if (Array.isArray(recipes)) {
      recipes.forEach((item: any, index: number) => {
        setRecipeList((list) => list.concat({id: item._id, name: item.name, description: item.description}))
      });
    }
    return () => {
      setRecipeList([])
    }
  }, [getRecipeListState.getRecipeListData]);

  const sayHello = (id : string) => {
    console.log('hello' + id);
    dispatch(getRecipeInfoInitiator('http://localhost:8000/recipe/'+id));
    navigateTo('/recipe-details/'+id);
  }
  
  console.log('this is recipe list ---- ', getRecipeListState);
  return (
    <>
      {recipeList.map((data : any) => {
        return (
          <Card variant="outlined" sx={{ width: 4/5, m: 1 }}>
            <CardActionArea onClick={() => sayHello(data.id)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
};

export default RecipeList;