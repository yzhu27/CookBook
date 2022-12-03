/*

Copyright (C) 2022 SE CookBook - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: help.cookbook@gmail.com

*/
/**
 * File name: GetIngredients.tsx
 * Task - This component has the logic to accept input i.e. ingredients for the user
 * It displays the inputted ingredients in the form of chips. On submit press, it triggers an API call
 * to retrieve a list of recipes that could be made from the inputted ingredients.
 * Search component remain static throughout the application
 * @author Priyanka Ambawane - dearpriyankasa@gmail.c               om
 */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Chip, Grid, TextField } from '@mui/material'
import { getRecipeListInitiator } from "../RecipeList/getRecipeList.action";

interface ChipData {
  key: string
  label: string
}
const GetTags = () => {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const [chipData, setChipData] = useState<readonly ChipData[]>([])
  const receiptList = ['milk', 'butter', 'blueberries','grapefruits','wine vinegar']
  const getReciptButton = (name: string, key: number) => {
    const onSubmit = () => {
      let ingredientsArray: Array<string> = []
      ingredientsArray.push(name.toLocaleLowerCase())
      if (ingredientsArray.length > 0) {
        sessionStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
        dispatch(
          getRecipeListInitiator('https://cook-book.ml/recipe/search/', {
            ingredients: ingredientsArray,
            page: 1,
          })
        )
        navigateTo('/recipe-list')
      }
    }

    return <Button
      key={key}
      onClick={onSubmit}
      type="submit"
      variant="contained"> {name} </Button>
  }

  // handler to trigger the API call to get the list of recipes according to the user's ingredient's input
  const onSubmit1 = () => {
    let ingredientsArray: Array<string> = []
    ingredientsArray.push('butter'.toLocaleLowerCase())
    if (ingredientsArray.length > 0) {
      sessionStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
      dispatch(
        getRecipeListInitiator('https://cook-book.ml/recipe/search/', {
          ingredients: ingredientsArray,
          page: 1,
        })
      )
      navigateTo('/recipe-list')
    }
  }

  return (
    <>
      <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box paddingTop={'20px'}>
              {chipData.map((data) => {
                return (
                  <Button
                    onClick={onSubmit1}
                    type="submit"
                    variant="contained"
                  ></Button>
                )
              })}
            </Box>
          </Grid>
          {receiptList.map((v, i) => getReciptButton(v, i))}
        </Grid>
      </Box>
    </>
  )
}

export default GetTags