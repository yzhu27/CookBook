import requests
import pytest

BASE_URL = "http://localhost:8000/recipe"  # Your FastAPI app's URL

# Test for listing all recipes
def test_list_recipes():
    """Test retrieving a list of recipes."""
    response = requests.get(f"{BASE_URL}/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)  # Assuming it returns a list of recipes

# Test for retrieving a recipe by ID
def test_find_recipe():
    """Test finding a recipe by ID."""
    # Replace with a valid recipe ID from your database
    recipe_id = 46  
    response = requests.get(f"{BASE_URL}/{recipe_id}")
    assert response.status_code == 200
    assert "name" in response.json()  # Assuming 'name' is a field in your recipe model

# Test for listing recipes by ingredient
def test_list_recipes_by_ingredient():
    """Test listing recipes by ingredient."""
    ingredient = "tomato"  # Replace with a valid ingredient
    response = requests.get(f"{BASE_URL}/search/{ingredient}")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

# Test for listing recipes by multiple ingredients using POST
def test_list_recipes_by_ingredients():
    """Test listing recipes by multiple ingredients."""
    data = {
        "ingredients": ["tomato", "basil"],
        "page": 1
    }
    response = requests.post(f"{BASE_URL}/search/", json=data)
    assert response.status_code == 200
    assert "recipes" in response.json()

# Test for getting ingredient suggestions
def test_list_ingredients():
    """Test listing ingredient suggestions."""
    query_string = "to"  # Replace with a query string for ingredients
    response = requests.get(f"{BASE_URL}/ingredients/{query_string}")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

# Test for recommending recipes
def test_recommend_recipes():
    """Test recommending recipes based on a query."""
    query_data = {
        "query": "easy pasta recipes"
    }
    response = requests.post(f"{BASE_URL}/recommend-recipes/", json=query_data)
    assert response.status_code == 200
    assert "response" in response.json()

