import requests
import pytest

BASE_URL = "http://localhost:8000/recipe"

def test_list_recipes():
    """Test retrieving a list of recipes."""
    response = requests.get(f"{BASE_URL}/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_find_recipe():
    """Test finding a recipe by ID."""
    recipe_id = 46  
    response = requests.get(f"{BASE_URL}/{recipe_id}")
    assert response.status_code == 200
    assert "name" in response.json()

def test_list_recipes_by_ingredient():
    """Test listing recipes by ingredient."""
    ingredient = "tomato"
    response = requests.get(f"{BASE_URL}/search/{ingredient}")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_list_recipes_by_ingredients():
    """Test listing recipes by multiple ingredients."""
    data = {
        "ingredients": ["tomato", "basil"],
        "page": 1
    }
    response = requests.post(f"{BASE_URL}/search/", json=data)
    assert response.status_code == 200
    assert "recipes" in response.json()

def test_list_recipes_by_non_existent_ingredient():
    """Test listing recipes by a non-existent ingredient."""
    ingredient = "unicorn"
    response = requests.get(f"{BASE_URL}/search/{ingredient}")
    assert response.status_code == 200
    assert response.json() == []

def test_list_recipes_by_ingredients():
    """Test listing recipes by multiple ingredients."""
    data = {
        "ingredients": ["tomato", "basil"],
        "page": 1
    }
    response = requests.post(f"{BASE_URL}/search/", json=data)
    assert response.status_code == 200
    assert "recipes" in response.json()

def test_list_recipes_by_empty_ingredients():
    """Test listing recipes with an empty ingredients list."""
    data = {
        "ingredients": [],
        "page": 1
    }
    response = requests.post(f"{BASE_URL}/search/", json=data)
    assert response.status_code == 200

def test_list_ingredients():
    """Test listing ingredient suggestions."""
    query_string = "to"
    response = requests.get(f"{BASE_URL}/ingredients/{query_string}")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_list_ingredients_no_matches():
    """Test listing ingredient suggestions with no matches."""
    query_string = "xyz"
    response = requests.get(f"{BASE_URL}/ingredients/{query_string}")
    assert response.status_code == 200
    assert response.json() == []

def test_recommend_recipes():
    """Test recommending recipes based on a query."""
    query_data = {
        "query": "easy pasta recipes"
    }
    response = requests.post(f"{BASE_URL}/recommend-recipes/", json=query_data)
    assert response.status_code == 200
    assert "response" in response.json()

def test_recommend_recipes_with_empty_query():
    """Test recommending recipes with an empty query."""
    query_data = {
        "query": ""
    }
    response = requests.post(f"{BASE_URL}/recommend-recipes/", json=query_data)
    assert response.status_code == 400
    assert "detail" in response.json()

def test_response_time_for_list_recipes():
    """Test the response time for listing recipes."""
    response = requests.get(f"{BASE_URL}/")
    assert response.elapsed.total_seconds() < 1

def test_find_recipe_with_query_params():
    """Test retrieving a recipe with query parameters."""
    recipe_id = 46
    response = requests.get(f"{BASE_URL}/{recipe_id}?include_nutrition=true")
    assert response.status_code == 200
    data = response.json()
    assert "calories" in data

def test_list_recipes_with_pagination():
    """Test retrieving a paginated list of recipes."""
    page = 1
    response = requests.get(f"{BASE_URL}/?page={page}")
    assert response.status_code == 200

def test_list_recipes_with_invalid_page():
    """Test retrieving recipes with an invalid page number."""
    page = -1
    response = requests.get(f"{BASE_URL}/?page={page}")
    assert response.status_code == 200

def test_find_recipe_invalid_id_format():
    response = requests.get(f"{BASE_URL}/invalid-id")
    assert response.status_code == 404
    assert "detail" in response.json()

def test_find_recipe_non_existent_id():
    non_existent_id = "000000000000000000000000"
    response = requests.get(f"{BASE_URL}/{non_existent_id}")
    assert response.status_code == 404
    assert "detail" in response.json()

def test_list_recipes_by_ingredient_special_characters():
    ingredient = "@$%^&*"
    response = requests.get(f"{BASE_URL}/search/{ingredient}")
    assert response.status_code == 400

def test_list_recipes_by_multiple_criteria():
    """Test searching recipes with various nutritional limits."""
    data = {
        "page": 1,
        "caloriesUp": 500.0,
        "fatUp": 30.0,
        "sugUp": 20.0,
        "proUp": 25.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 200
    response_data = response.json()
    assert "recipes" in response_data
    assert isinstance(response_data["recipes"], list)

def test_list_recipes_by_invalid_page():
    """Test for invalid page number (less than 1)."""
    data = {
        "page": 0,
        "caloriesUp": 500.0,
        "fatUp": 30.0,
        "sugUp": 20.0,
        "proUp": 25.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 422

def test_list_recipes_by_high_calories():
    """Test for calories upper limit exceeding allowed range."""
    data = {
        "page": 1,
        "caloriesUp": 1500.0,
        "fatUp": 30.0,
        "sugUp": 20.0,
        "proUp": 25.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 422

def test_list_recipes_by_high_fat():
    """Test for fat upper limit exceeding allowed range."""
    data = {
        "page": 1,
        "caloriesUp": 500.0,
        "fatUp": 200.0,
        "sugUp": 20.0,
        "proUp": 25.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 422

def test_list_recipes_by_zero_limits():
    """Test for edge case where all limits are at the minimum."""
    data = {
        "page": 1,
        "caloriesUp": 0.0,
        "fatUp": 0.0,
        "sugUp": 0.0,
        "proUp": 0.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 200
    response_data = response.json()
    assert "recipes" in response_data
    assert isinstance(response_data["recipes"], list)

def test_list_recipes_by_nonexistent_page():
    """Test for a page that does not exist (assuming less than 100 pages)."""
    data = {
        "page": 100,
        "caloriesUp": 500.0,
        "fatUp": 30.0,
        "sugUp": 20.0,
        "proUp": 25.0
    }
    response = requests.post(f"{BASE_URL}/search2/", json=data)
    assert response.status_code == 200
    response_data = response.json()
    assert response_data["recipes"] == []