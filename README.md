[![DOI](https://zenodo.org/badge/541238337.svg)](https://zenodo.org/badge/latestdoi/541238337)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# CSC510_43_Project1

## To set up the front end React app, do:
```bash
cd frontend
npm install

// if npm install fails, try this
npm install --legacy-peer-deps
```

## To run the front end React app, do:
```bash
cd frontend
npm start
```

## To set up the back end, do:
Make sure you are in the base folder.<br><br>
In order to run the application server, run the following commands:
```bash
cd api
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Open the swagger page on http://localhost:8000/docs