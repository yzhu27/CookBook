import sys
sys.path.insert(0, '../')
from fastapi.testclient import TestClient
from api.main import app

def main():
    result = 0
    tests = [test_list_recipes]
    with TestClient(app) as client:
        for test in tests:
            result += test(client)
    print(result, " tests failed")
    print(len(tests) - result, " tests passed")
    return result

def test_list_recipes(client: TestClient):
    response = client.get("/recipe/")
    return 0 if response.status_code == 200 else 1

if __name__ == '__main__':
    main()