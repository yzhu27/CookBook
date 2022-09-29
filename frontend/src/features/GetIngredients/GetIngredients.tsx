import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Send from '@mui/icons-material/Send';
import { getIngredientsInitiator } from './getIngredients.action';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const InputField = ({ field, label, id }: any) => {
  return (
    <Autocomplete
        freeSolo
        {...field}
        id="free-solo-2-demo"
        disableClearable
        
        options={top100Films.map((option) => option.title)}
        filterOptions = {(options, { inputValue }) => { 
          console.log('the state is -- ', inputValue.length)
          if (inputValue.length > 3)
            return false;
          else
            return true;
        }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            id={id}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
  )
}

const GetIngredients = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const navigateTo = useNavigate();
  const [isAdd, setIsAdd] = useState(false);

  const getIngredientsState = useSelector((state) => state);

  useEffect(() => {  
    return () => {
      setIsAdd(false);
    }
  }, [])
  

  console.log('the state is --->', getIngredientsState);

  const handleAddIngredients = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log('inside handle add ingredients');
    setIsAdd(true);
  };

  const handleRemoveIngredients = () => {
    setIsAdd(false);
    navigateTo('/recipe-list');
  }

  const onSubmit = (data: any) => {
    console.log('inside handle submit ingredients --- ', data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
              <Controller
                render={({ field }) => <InputField field={field} label="Ingredient 1" id="outlined-size-normal" />}
                name="ingredient1"
                control={control}
              />
              <Controller
                render={({ field }) => <TextField {...field} label="Ingredient 2" id="outlined-size-normal" />}
                name="ingredient2"
                control={control}
              />
              <Controller
                render={({ field }) => <TextField {...field} label="Ingredient 3" id="outlined-size-normal" />}
                name="ingredient3"
                control={control}
              />
            </Stack>
            {isAdd && 
              <Stack direction="column" spacing={2}>
                <Controller
                  render={({ field }) => <TextField {...field} label="Ingredient 4" id="outlined-size-normal" />}
                  name="ingredient4"
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField {...field} label="Ingredient 5" id="outlined-size-normal" />}
                  name="ingredient5"
                  control={control}
                />
                <Controller
                  render={({ field }) => <TextField {...field} label="Ingredient 6" id="outlined-size-normal" />}
                  name="ingredient6"
                  control={control}
                />
              </Stack>
            }
          </Stack>
          <Stack direction="row" spacing={3} paddingTop="10px">
            <Button variant="contained" startIcon={<AddCircleOutlineIcon />} onClick={handleAddIngredients}>
              Add Ingredients
            </Button>
            {isAdd && <Button variant="contained" startIcon={<RemoveCircleOutlineIcon />} onClick={handleRemoveIngredients}>
              Remove Ingredients
            </Button>}
            <Button type="submit" variant="contained" endIcon={<Send />}>
              SUBMIT
            </Button>
          </Stack>
          </form>
    </>
  );
};

export default GetIngredients;
