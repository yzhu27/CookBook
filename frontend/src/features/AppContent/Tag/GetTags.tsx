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
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Chip, Grid, TextField} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import Send from '@mui/icons-material/Send'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { getTagListInitiator } from './getTagList.action'
import getTagListAppState from "./getTags.reducer";
import {getRecipeListInitiator} from "../RecipeList/getRecipeList.action";


interface ChipData {
  key: string
  label: string
}
interface ListData {
  key: string
  label: string
}
const Tags = ({
  label,
  id,
} : any) =>{
  return (
       <TextField
            id="test"
            label="Standard"
            variant = "standard"
       />
  )
}
const GetTags= () => {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()

  const [chipData, setChipData] = useState<readonly ChipData[]>([])
  const [listData, setListData] = useState<readonly ListData[]>([])

  // accesses the state of the component from the app's store
  const getTagsState = useSelector(
    (state: any) => state.getTagListAppState
  )
  useEffect(() => {
    let tags = getTagsState.getTagListData
    if (Array.isArray(tags)) {
      tags.forEach((item: string, index: number) => {
        setListData((list) => list.concat({ key: item, label: item }))
      })
    }
    return () => {
      setListData([])
    }
  }, [getTagsState.getTagListData])

  // on enter or ingredient selection from suggestion list, this function stores the input in the chipData state
  // const onChangeField = (val: string) => {
  //   setChipData((chips) => chips.concat({ key: val, label: val }))
  // }
  const requestTags = () =>{
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (results) => {
    //       results.forEach(
    //             setChipData(
    //                 (chips) => chips.concat({ key: results, label: results}))
    //       )
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //
    //     }
    //   )
    setChipData((chips) => chips.concat({ key: 'aa', label: 'aa'}))
  }

  // handler to delete the ingredient
  // const handleDelete = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) =>
  //     chips.filter((chip) => chip.key !== chipToDelete.key)
  //   )
  // }

  // handler to trigger the API call to get the list of recipes according to the user's ingredient's input
  const onSubmit1 = () => {
    let ingredientsArray: Array<string> = []
    ingredientsArray.push('butter'.toLocaleLowerCase())
    if (ingredientsArray.length > 0) {
      sessionStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
      dispatch(
        getRecipeListInitiator('http://localhost:8000/recipe/search/', {
          ingredients: ingredientsArray,
          page: 1,
        })
      )
      navigateTo('/recipe-list')
    }
  }
   const onSubmit2 = () => {
    let ingredientsArray: Array<string> = []
    ingredientsArray.push('milk'.toLocaleLowerCase())
    if (ingredientsArray.length > 0) {
      sessionStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
      dispatch(
        getRecipeListInitiator('http://localhost:8000/recipe/search/', {
          ingredients: ingredientsArray,
          page: 1,
        })
      )
      navigateTo('/recipe-list')
    }
  }
   const onSubmit3 = () => {
    let ingredientsArray: Array<string> = []
    ingredientsArray.push('blueberries'.toLocaleLowerCase())
    if (ingredientsArray.length > 0) {
      sessionStorage.setItem('ingredients', JSON.stringify(ingredientsArray))
      dispatch(
        getRecipeListInitiator('http://localhost:8000/recipe/search/', {
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
                  onClick = {onSubmit1}
                  type="submit"
                  variant="contained"
                ></Button>
              )
            })}
          </Box>
        </Grid>
                   <Button
                    onClick={onSubmit1}
                    type="submit"
                    variant="contained"> butter </Button>
                   <Button
                    onClick={onSubmit3}
                    type="submit"
                    variant="contained"> blueberries </Button>
                   <Button
                    onClick={onSubmit2}
                    type="submit"
                    variant="contained"> milk </Button>
          </Grid>
      </Box>
    </>
  )
}

export default GetTags
