import sys
sys.path.insert(0, '../')
from fastapi.testclient import TestClient
from api.main import app
from api.models import RecipeListResponse
import json
import ast

def main():
    result = 0
    tests = [test_list_recipes, test_find_recipe, test_search_ingredient, test_search_ingredients, test_list_ingredients]
    with TestClient(app) as client:
        for test in tests:
            result += test(client)
    print(result, " tests failed")
    print(len(tests) - result, " tests passed")
    return result

def test_list_recipes(client: TestClient):
    print("Testing functionality to list recipes...")
    response = client.get("/recipe/")
    recipes = ast.literal_eval(response.content.decode("utf-8"))
    if response.status_code == 200 and len(recipes) == 10:
        print("Test Successful!")
        return 0 
    else: 
        return 1

def test_find_recipe(client: TestClient):
    print("Testing functionality to find recipe...")
    response = client.get("/recipe/44")
    recipe = ast.literal_eval(response.content.decode("utf-8"))
    test_name = 'Warm Chicken A La King'
    if response.status_code == 200 and recipe['name'] == test_name:
        print("Test Successful!")
        return 0
    else:
        return 1

def test_search_ingredient(client: TestClient):
    print("Testing functionality to search a particular ingredient...")
    response = client.get("/recipe/search/apple")
    recipes = ast.literal_eval(response.content.decode("utf-8"))
    if response.status_code == 200 and len(recipes) > 0:
        print("Test Successful!")
        return 0
    else:
        return 1 

def test_search_ingredients(client: TestClient):
    print("Testing functionality to search for a set of ingredients...")
    requestBody = {"ingredients": ["apple", "walnuts"], "page": 1}
    response = client.post("/recipe/search/", data=json.dumps(requestBody))
    recipes = ast.literal_eval(response.content.decode("utf-8"))
    if response.status_code == 200 and len(recipes) > 0 and recipes['page'] == 1:
        print("Test Successful!")
        return 0
    else:
        return 1 

def test_list_ingredients(client: TestClient):
    print("Testing functionality to suggest ingredients in the search bar...")
    response = client.get("/recipe/ingredients/sug")
    ingredients = ast.literal_eval(response.content.decode("utf-8"))
    if response.status_code == 200 and len(ingredients) > 0:
        print("Test Successful!")
        return 0
    else:
        return 1

if __name__ == '__main__':
    main()