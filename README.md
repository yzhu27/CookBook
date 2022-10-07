[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Build](https://github.com/sam16222/CSC510_43_Project1/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/541238337.svg)](https://zenodo.org/badge/latestdoi/541238337)
![GitHub Issues](https://img.shields.io/badge/Issues-10-lightgrey)
![Github Closed Issues](https://img.shields.io/badge/Closed%20Issues-10-green)
![Github Pull Requests](https://img.shields.io/badge/Pull%20Requests-22-orange)
[![codecov](https://codecov.io/gh/sam16222/CSC510_43_Project1/branch/main/graph/badge.svg?token=LT9NFPUR7R)](https://codecov.io/gh/sam16222/CSC510_43_Project1) <br/>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

# Cooking 101

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
