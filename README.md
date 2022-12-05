<p align="center"><img width="500" src="./assets/logo.png"></p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Build](https://github.com/sam16222/CSC510_43_Project1/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/541238337.svg)](https://zenodo.org/badge/latestdoi/541238337)
![Github Issues](https://img.shields.io/github/issues-closed/sam16222/CookBook)
![Github Issues](https://img.shields.io/github/issues/sam16222/CookBook)
![Github Pull Requests](https://img.shields.io/github/issues-pr/sam16222/CookBook)
![Github Pull Requests](https://img.shields.io/github/issues-pr-closed/sam16222/CookBook)
![Commit Status](https://img.shields.io/github/commit-status/sam16222/CookBook/main/65d1725521ee8cb701d47e4ad19fc8d586a4691f)
[![codecov](https://codecov.io/gh/sam16222/CSC510_43_Project1/branch/main/graph/badge.svg?token=LT9NFPUR7R)](https://codecov.io/gh/sam16222/CSC510_43_Project1) <br/>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

</div>
<br><br>

# What is Cook Book ?

CookBook is a platform to search for recipes that can be made using the available ingredients.

- **Easy**: CookBook is a very user friendly website, where you can just enter the ingredients available and the platform will suggest various recipes that can be made using these ingredients.

- **Convenient**: Apart from saving you from the dilemma of deciding what to cook, it is meant to make your cooking experience convenient by suggesting detailed step-by-step recipes.

- **Flexible**: You can add as little or as many ingredients as you want.

With over recipes, there is something in the store for everyone !<br><br>

# Content

<p align="center">
    |
  <a href="#backend-installation">Backend Installation</a>
  |
  <a href="#backend-installation">Frontend Installation</a>
  |
  <a href="#golf-flags-and-command-line-arguments">Swagger</a>
  |
  <a href="#card_index_dividers-some-examples">Examples</a>
  |
  <a href="#page_facing_up-why">Why</a>
  |
  <a href="#roadmap">Roadmap</a>
  |
  <a href="#sparkles-contributors">Meet the Team</a>
    |
  <a href="#email-support">Support</a>
  |
  
</p><br><br>

# Demo

<p align="center"><img width="700" src="./assets/demo.gif"></p><br><br>

# Installations

## Backend Installation

To set up the back end, do:<br>
Make sure you are in the base folder.<br><br>
In order to run the application server, run the following commands:

```bash
cd api
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Refer to the [Swagger](#swagger) section for sample API calls.
<br>

### Trouble Shooting

In case you run into any issues running the above commands, some operating systems may require you to use `python3` instead of `python` and `pip3` instead of `pip`.<br><br>

## Frontend Installation

To set up the front end React app, do:<br>

```bash
cd frontend
npm install

// if npm install fails, try this
npm install --legacy-peer-deps
```

<br>

## Style Checker and Code Fomatter

- IDE and Style Checker: [VSCode](https://code.visualstudio.com/)

- Code Style Formatter: [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

- Code Syntax Checker : [Eslint](https://https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Vscode plugin.

Following extensions have to be added to you VS Code editor:

- For Eslint: Install - dbaeumer.vscode-eslint
- For Prettier: Install - esbenp.prettier-vscode
- Update the settings.json of your VS Code editor to include these statements (you can add them to your existing ones):

```bash

{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.alwaysShowStatus": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}

```


## To run the front end React app, do:

```bash
cd frontend
npm start
```

<br>

# Swagger

Open the swagger page here: [Swagger](http://localhost:8000/docs)<br><br>

# Examples

- This is the CookBook HomePage that should automatically open in a browser after executing the command: 'npm start'
  <br><br>

![HomePage](assets/HomePage.PNG)

<br>

- The user can use the search bar to enter the ingredients one by one, and then proceed by clicking the arrow on the right.
  <br><br>

![HomePage](assets/SearchBar.PNG)

<br>

- The user would then be redirected to the page showing the recipe suggestions.
  <br><br>

![HomePage](assets/SearchResults.PNG)

<br>

- The details of a recipe can be viewed by simple clicking on a recipe from the list of recipes being displayed.
  <br><br>

![HomePage](assets/RecipeDetails.PNG)

<br><br>

# Use cases tutorials

- Above content mentions that users may manually input keyword, and click on 'search tag' to create some keyword search tags to search recepies. Besides, users may also click on some "food tags" to search receipes without specific input. For example, we may select "milk" tag:

![case](assets/tagSearch1.jpg)

<br>

- Then, we may have results shown as below:

![case](assets/tagSearch2.jpg)

<br>

- What is more, if users are not sure that tags to be chosen, they are able to use sliders to set some values for [Calorie, Fat, Suger, Protain]. The filtered recepies will be shown after using this kind of search. For example, if we want receipes that fulfill some requirements as:

![case](assets/filterSearch1.png)

<br>

- As former example cases, filtered results are displayed:

![case](assets/filterSearch2.png)

# Why CookBook?

- Most of us might have been in a situation where you are craving for something to eat and due to some reason it won't be delivered to your place. And then you decide to cook it yourself you can't find a recipe with the ingredients you have.
- In this fast-paced world, we are often confused about what can be cooked with the ingredients that are available right away.
- CookBook addresses this issue and is designed to suggest recipes to you which would use the key ingredients that are available with you.
- It not only suggests the recipe based on the ingredients entered by you, it also gives the ratings, step-by-step cooking instructions and other granular details about the recipe.
- Apart from giving the user a smooth and a stress-free experience, it also serves as a platform to find recipes across multiple cuisines and cultures.
- The interface of CookBook is somewhat similar to most of the search-engines, giving a sense of familiarity to the user. The user would have to just enter the available ingredients in a search bar and click on the proceed icon to get a list of suggestions for recipes.

# Roadmap

  <h3> Completed tasks</h3>
  <ol>
  <li> Hosted the dataset on Mongo Database System. </li>
  <li> Created a lightweight REST API for communicating with the MongoDB Cloud instance.</li>
  <li> Created a dynamic UI with routes dedicated to individual components.</li>
  <li> Create autocomplete to suggest ingredients based on partial input.</li>
  <li> Added support for recommendations based on multiple Ingredients.</li>
  <li> Created card based paginated layout for showing recipes.</li>
  <li> Added macros to recipe information.</li>
  </ol>
  
  <h3> Future tasks</h3>
  <ol>
  <li> Add filtering system based on cusine, and other macros.</li>
  <li> Create a scraper for updating and maintaining the database.</li>
  <li> Add support for user profiles and user specific recommendations.</li>
  <li> Create a form for reporting corrections, improving the data set.</li>
  <li> Create a form for reporting corrections, improving the data set.</li>
  </ol>

# Meet the Team

![Team](assets/team_edit.png)

# Support
You can find the dataset used for this project [here](https://drive.google.com/file/d/12CZFb7Ugmiw9zQ7M_qpRsn7pmaV1zW0c/view?usp=sharing)

In case of any queries and for additional help, please email us at: help.cookbook@gmail.com
