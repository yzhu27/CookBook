from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Recipe

router = APIRouter()

@router.get("/", response_description="List all recipes", response_model=List[Recipe])
def list_recipes(request: Request):
    print(request.app.database.list_collection_names())
    recipes = list(request.app.database["recipes"].find(limit=10))
    return recipes

@router.get("/{id}", response_description="Get a recipe by id", response_model=Recipe)
def find_recipe(id: str, request: Request):
    if (recipe := request.app.database["recipes"].find_one({"_id": id})) is not None:
        return recipe
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Recipe with ID {id} not found")

@router.get("/search/{ingredient}", response_description="List all recipes with the given ingredient", response_model=List[Recipe])
def list_recipes(ingredient: str,request: Request):
    recipes = list(request.app.database["recipes"].find({ "ingredients" : { "$in" : [ingredient] } }))
    return recipes

@router.post("/search/", response_description="Get Recipes that match all the ingredients in the request", status_code=status.HTTP_201_CREATED, response_model=List[Recipe])
def list_recipes(request: Request, arr: list[str] = Body(...)):
    arr = jsonable_encoder(arr)
    print(arr)
    recipes = list(request.app.database["recipes"].find({ "ingredients" : { "$all" : arr } }))
    return recipes