/**
 * File name: RecipeInformation.tsx
 * Task - This component displays images for recipe making, the procedure to make the dish and the 
 * trivia and factual info related to it.
 * This component is a dynamic component and is seen only when you click on a recipe from the recipe list
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
 import { Grid, Paper, Stack, Typography } from '@mui/material';
 import StarIcon from '@mui/icons-material/Star';
 import React, { useEffect } from 'react';
 import { Provider } from 'react-redux'
 import applicationStore from '../../../store'
 import { useDispatch, useSelector } from 'react-redux';
 import {useParams} from "react-router-dom";
 import { getRecipeInfoInitiator } from './getRecipeInformation.action';
 import './RecipeInformation.css'
 import noImage from './no-image.png';
 
 let triviaPaperStyles = {
   backgroundColor: '#f2f4f4',
   marginTop: '20px',
   padding: '20px',
   marginLeft: '30px',
   marginRight: '30px'
 }
 
 const store = applicationStore()

 const RecipeInformationWrapped = () => {
   let { id } = useParams();
   const dispatch = useDispatch();
 
   // accesses the state of the component from the app's store
   const recipeInfo = useSelector((state: any) => state.getRecipeInfoAppState);
 
   /* the effect hook below does an api call to get the recipe details
      using the recipe id as soon as the compnent gets loaded up */
   useEffect(() => {
     dispatch(getRecipeInfoInitiator('http://localhost:8000/recipe/'+id));
     return () => {
       // state cleanup here
     }
   }, []);
   
   if (recipeInfo.isGetRecipeInfoLoading) {
     return <div data-testid="RecipeInfo-comp-43"> Loading ... </div>
   } else if (recipeInfo.isGetRecipeInfoSuccess) {
     const recipe = recipeInfo.getRecipeInfoData;
     return (
        <div style={{ width: '100vw', color: '#f2f4f4', paddingTop: '20px'}} data-testid = "RecipeInfo-comp-43">
         <Typography variant="h4" gutterBottom className='recipe-header'>{recipe.name}</Typography>
         <div style={{ float: 'left', width: '25vw'}}>
         <Paper elevation={24} style={triviaPaperStyles}>
           <Grid container spacing={3}>
             <Grid item xs={12} style={{textAlign: 'center'}}>
               <Typography variant="h5" gutterBottom>Summary</Typography>
             </Grid>
             <Grid item xs={12} textAlign={'left'}>
                <Typography variant="h6">
                   Ingredients:
                   <Typography variant="subtitle1" gutterBottom>
                    {recipe?.ingredients?.map((ele: any, idx: number) => {
                      return <>{ele}{recipe?.ingredients?.length-1 === idx ? `` : `,`}</>
                    })}
                 </Typography>
                </Typography>
             </Grid>
             <Grid item xs={6}>
             <Stack direction="column" spacing={2} paddingBottom='20px' textAlign={'left'}>
                 <Typography variant="h6">
                   Rating:
                    <Typography variant="subtitle1" gutterBottom>
                     {Array.from({length: Math.floor(Number(recipe?.rating))}).map((ele: any) => {
                       return <StarIcon fontSize='small'/>
                     })}
                    </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Prep Time:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.prepTime}
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Sugar:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.sugar}g
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Carbs:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.carbs}g
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Proteins:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.protein}g
                   </Typography>
                 </Typography>
               </Stack>
             </Grid>
             <Grid item xs={6}>
             <Stack direction="column" spacing={2} paddingBottom='20px' textAlign={'left'}>
                  <Typography variant="h6">
                   Cuisine:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.category}
                  </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Servings:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.servings}
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Cook Time:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.cookTime}
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Cholestrol:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.cholesterol}mg/dl
                   </Typography>
                 </Typography>
                 <Typography variant="h6">
                   Fats:
                   <Typography variant="subtitle1" gutterBottom>
                     {recipe?.fat}g
                   </Typography>
                 </Typography>
               </Stack>
             </Grid>
             
           </Grid>
           </Paper>
         </div>
         <div style={{ float: 'left', width: '40vw', marginTop: '15px'}}>
           <Grid container spacing={3}>
             <Grid item xs={12}>
                <Stack direction="column" spacing={2} paddingBottom='20px' textAlign={'left'}>
                 {recipe?.instructions.map((inst: string, idx: number) => {
                   return (
                     <>
                       <Typography variant="h6">
                         Step {idx+1}:
                         <Typography variant="subtitle1" gutterBottom>
                           {inst}
                         </Typography>
                       </Typography>
                     </>
                   )
                 })}
               </Stack>
             </Grid>
           </Grid>
         </div>
         <div style={{ float: 'left', width: '30vw'}}>
          {recipe?.images?.length > 0 && recipe?.images[0] !== '' ? 
            <Typography variant="subtitle1" gutterBottom>
              <Stack direction="column" spacing={2} padding='25px'>
                {recipe.images.reverse().slice(0, 3).map((imageLink: string, idx: number) => {
                  imageLink = imageLink.replaceAll('"', '');
                  return <img src={imageLink} alt={`Cannot display pic ${idx+1}`} />
                })}
              </Stack> 
            </Typography>
          : (
            <img src={noImage} alt={`Cannot display pic`} />
          )}
        </div>
       </div>
      
     );
   } else {
     return <> Error! Recipe not found! </>
   }
 };
 const RecipeInformation = () => {
  return (
    <Provider store={store}>
      <RecipeInformationWrapped />
    </Provider>
  )
 }
 export default RecipeInformation;
