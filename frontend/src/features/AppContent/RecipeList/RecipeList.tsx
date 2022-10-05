import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import { Typography, Card, CardContent, CardMedia, CardActionArea} from '@mui/material';
import { getRecipeInfoInitiator } from '../RecipeInformation/getRecipeInformation.action';
import './RecipeList.css';

interface RecipeListData {
  id: string;
  name: string;
  description: string;
  cookTime: string;
  prepTime: string;
  category: string;
  rating: string;
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
        setRecipeList((list) => list.concat(
          {
            id: item._id, 
            name: item.name, 
            description: item.description,
            cookTime: item.cookTime,
            prepTime: item.prepTime,
            category: item.category,
            rating: item.rating
          }))
      });
    }
    return () => {
      setRecipeList([])
    }
  }, [getRecipeListState.getRecipeListData]);

  const gotoRecipe = (id : string) => {
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
            <CardActionArea onClick={() => gotoRecipe(data.id)}>
              <CardContent>
                <div className='d-flex flex-row'>
                  <Typography sx={{fontWeight: 600}} gutterBottom variant="h5" component="div">
                    {data.name} | <StarIcon sx={{color: '#dede04'}} fontSize='medium'/> {data.rating}/5.0
                  </Typography>
                  <Typography gutterBottom variant="h6" component="span" className='supplemental-info'>
                    {data.category}
                  </Typography>
                  {/* <span className='supplemental-info'>{data.category}</span> */}
                </div>
                <Typography sx={{textAlign: 'left'}} variant="subtitle2" color="text.secondary">
                  Prep Time : {data.prepTime} | Cook Time : {data.cookTime}
                </Typography>
                
                <Typography sx={{textAlign: 'left', marginTop: 2, fontStyle: 'italic'}} variant="body2" color="text.secondary">
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