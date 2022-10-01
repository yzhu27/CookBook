import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Autocomplete, Button, Chip, Stack, TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Send from '@mui/icons-material/Send';
import { getIngredientsInitiator } from './getIngredients.action';
import { getRecipeListInitiator } from '../AppContent/RecipeList/getRecipeList.action';

interface ChipData {
  key: string;
  label: string;
}
interface ListData {
  key: string;
  label: string;
}

const InputField = ({ field, label, id, onChangeField, onChangeTextField, listData }: any) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    return () => {
      setValue('');
    }
  }, [value])
  
  return (
    <Autocomplete
        freeSolo
        {...field}
        id="free-solo-2-demo"
        disableClearable
        options={listData.map((option: any) => option.label)}
        onChange={(event, val: string) => {
          setValue('');
          onChangeField(val);
          
        }}
        renderInput={(params: any) => {
          return <TextField
            {...params}
            id={id}
            value={value}
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
  const { control, handleSubmit } = useForm();
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
      <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
              <Controller
                render={({ field }) => 
                  <InputField 
                    field={field} 
                    label="Ingredient 1" 
                    id="outlined-size-normal" 
                    listData={listData}
                    onChangeField={onChangeField}
                    onChangeTextField={onChangeTextField}
                  />}
                name="ingredients"
                control={control}
              />
              
              
          </Stack>
          <Stack direction="row" spacing={3} paddingTop="10px">
            {chipData.map((data) => {
              return (
                  <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                  />
                );
            })}
          </Stack>
          <Stack direction="row" spacing={3} paddingTop="10px">
            <Button onClick={onSubmit} type="submit" variant="contained" endIcon={<Send />}>
              SUBMIT
            </Button>
          </Stack>
      </form>    
    </>
  );
};

export default GetIngredients;
