import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Autocomplete, Box, Button, Chip, Grid, TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Send from '@mui/icons-material/Send';
import { getIngredientsInitiator } from './getIngredients.action';
import { getRecipeListInitiator } from '../AppContent/RecipeList/getRecipeList.action';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface ChipData {
  key: string;
  label: string;
}
interface ListData {
  key: string;
  label: string;
}

const InputField = ({ field, label, id, onChangeField, onChangeTextField, listData }: any) => {    
  return (
    <Autocomplete
        freeSolo
        {...field}
        id="free-solo-2-demo"
        disableClearable
        options={listData.map((option: any) => option.label)}
        onChange={(event, val: string) => {
          onChangeField(val);
        }}
        renderInput={(params: any) => {
          return <TextField
            {...params}
            id={id}
            label={label}
            onChange={(event) => onChangeTextField(event.target.value)}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        }}
      />
  )
}

const GetIngredients = () => {
  const dispatch = useDispatch();
  const { control } = useForm();
  const navigateTo = useNavigate();
  
  const [chipData, setChipData] = useState<readonly ChipData[]>([]);
  const [listData, setListData] = useState<readonly ListData[]>([]);

  const getIngredientsState = useSelector((state: any) => state.getIngredientsAppState);

  useEffect(() => {
    let ingredients = getIngredientsState.getIngredientsData;
    if (Array.isArray(ingredients)) {
      ingredients.forEach((item: string, index: number) => {
        setListData((list) => list.concat({key: item, label: item}))
      });
    }
    return () => {
      setListData([])
    }
  }, [getIngredientsState.getIngredientsData]);

  const onChangeTextField = (val: string) => {
    if (val.length >=3) {
      dispatch(getIngredientsInitiator('http://localhost:8000/recipe/ingredients/'+val));
    }
  }

  const onChangeField = (val: string) => {
    setChipData((chips) => chips.concat({key: val, label: val}))
  }

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};

  const onSubmit = () => {
    let ingredientsArray: Array<string> = [];
    chipData.forEach(chip => ingredientsArray.push(chip.label));
    dispatch(getRecipeListInitiator('http://localhost:8000/recipe/search/', ingredientsArray));
    navigateTo('/recipe-list');
  };

  return (
    
      <>
      <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
        <Grid item xs={10}>
        <Controller
                render={({ field }) => 
                  <InputField 
                    field={field} 
                    label="Type to select Ingredients" 
                    id="outlined-size-normal" 
                    listData={listData}
                    onChangeField={onChangeField}
                    onChangeTextField={onChangeTextField}
                  />}
                name="ingredients"
                control={control}
              />
        </Grid>
        <Grid item xs={1} container justifyContent="flex-start">
          <Button 
              onClick={onSubmit} 
              type="submit"
              style={{ borderRadius: '75%', height: '100%', backgroundColor: '#172e44'}} 
              variant="contained" 
              endIcon={<Send fontSize="large" style={{ marginRight: '10px'}} />} 
          />
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box paddingTop={"20px"}>
        {chipData.map((data) => {
              return (
                  <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    deleteIcon={<HighlightOffIcon fontSize="large" style={{ color: 'white'}}/>}
                    style={{ margin: '5px', backgroundColor: '#34495e', color: '#f2f4f4'}}
                  />
                );
            })}
            </Box>
        </Grid>
        {/* <Grid item xs={12}>
        </Grid> */}
      </Grid>
      </>
  );
};

export default GetIngredients;
