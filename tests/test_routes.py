import sys
sys.path.insert(0, '../')
from fastapi.testclient import TestClient
from api.main import app
import ast

def main():
    result = 0
    tests = [test_list_recipes, test_find_recipe]
    with TestClient(app) as client:
        for test in tests:
            result += test(client)
    print(result, " tests failed")
    print(len(tests) - result, " tests passed")
    return result

def test_list_recipes(client: TestClient):
    response = client.get("/recipe/")
    recipes = ast.literal_eval(response.content.decode("utf-8"))
    return 0 if response.status_code == 200 and len(recipes) == 10 else 1

def test_find_recipe(client: TestClient):
    response = client.get("/recipe/44")
    recipe = ast.literal_eval(response.content.decode("utf-8"))
    test_name = 'Warm Chicken A La King'
    return 0 if response.status_code == 200 and recipe['name'] == test_name else 1

if __name__ == '__main__':
    main()