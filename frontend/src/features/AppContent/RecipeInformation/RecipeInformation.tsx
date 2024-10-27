/*

Copyright (C) 2022 SE CookBook - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: help.cookbook@gmail.com

*/

/**
 * File name: RecipeInformation.tsx
 * Task - This component displays images for recipe making, the procedure to make the dish and the 
 * trivia and factual info related to it.
 * This component is a dynamic component and is seen only when you click on a recipe from the recipe list
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
 import { Grid, Paper, Stack, Typography, Button } from '@mui/material';
 import StarIcon from '@mui/icons-material/Star';
 import React, { useEffect, useState } from 'react';
 import { Provider } from 'react-redux'
 import applicationStore from '../../../store'
 import { useDispatch, useSelector } from 'react-redux';
 import {useParams} from "react-router-dom";
 import { getRecipeInfoInitiator } from './getRecipeInformation.action';
 import './RecipeInformation.css'
 import noImage from './no-image.png';
 import axios from 'axios';
 
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
   const [input, setInput] = useState('');
   const [response, setResponse] = useState('');
   const [showInput, setShowInput] = useState(false);

   const handleButtonClick = () => {
     setShowInput(true);
   };

   const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };
 
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
     const recipeDetailsforLLM = `
      Name: ${recipe.name}
      Ingredients: ${recipe.ingredients.join(', ')}
      Rating: ${recipe.rating}
      Prep Time: ${recipe.prepTime}
      Sugar: ${recipe.sugar}g
      Carbs: ${recipe.carbs}g
      Protein: ${recipe.protein}g
      Cuisine: ${recipe.category}
      Servings: ${recipe.servings}
      Cook Time: ${recipe.cookTime}
      Cholesterol: ${recipe.cholesterol}mg/dl
      Fat: ${recipe.fat}g
      Instructions: ${recipe.instructions.join(' ')}
    `;
    const handleSubmit = async () => {
      try {
          const result = await axios.post('http://localhost:8000/recipe/recommend-recipes/', { query: input + recipeDetailsforLLM });
          setResponse(result.data.response);
      } catch (error) {
          console.error('Error fetching recipe recommendations:', error);
      }
    };
      // Function to handle formatting
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Check for "**" bold markers first
      const boldRegex = /\*\*(.*?)\*\*/g;
      let formattedLine = line;
      if (boldRegex.test(line)) {
        // Replace "**text**" with <strong>text</strong>
        formattedLine = line.replace(boldRegex, (match, p1) => `<strong>${p1}</strong>`);
      }

      // Check if the line starts with "*", convert to list items
      if (formattedLine.trim().startsWith('*')) {
        return <li key={index}>{formattedLine.replace('*', '').trim()}</li>;
      }

      // Return as a paragraph for other lines
      return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }}></p>;
    });
  };
     return (
        <div style={{ width: '100vw', color: '#f2f4f4', paddingTop: '20px'}} data-testid = "RecipeInfo-comp-43">
         <Typography variant="h4" gutterBottom className='recipe-header'>{recipe.name}</Typography>
         <div style={{ float: 'left', width: '30vw'}}>
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
                      return <>{ele}{recipe?.ingredients?.length-1 === idx ? `` : `, `}</>
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
               <Stack direction="column" spacing={2} alignItems="center">
             <Button onClick={handleButtonClick} variant="contained" color="primary" style={{ width: '200px' }}>CUSTOMIZE</Button>
             {showInput && (
               <div className="input-group">
                 <input type="text" value={input} onChange={handleInputChange} className="input-textbox" />
                 {input.length > 0 && (
                   <button onClick={handleSubmit} className="submit-button"></button>
                 )}
               </div>
             )}
             <Typography variant="subtitle1" gutterBottom>{formatText(response)}</Typography>
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
