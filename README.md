## Instructions
Make sure you are in the base folder.<br><br>
In order to run the application server, run the following commands:
```bash
cd api
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Open the swagger page on http://localhost:8000/docs