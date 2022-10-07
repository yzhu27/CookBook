import sys
sys.path.insert(0, '../')
from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from api.routes import router
from fastapi.middleware.cors import CORSMiddleware

config = dotenv_values(".env")

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.on_event("startup")
def startup_db_client():
    """Connects to database client on startup"""
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print(app.database.list_collection_names())
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    """Closes database connection on shutdown"""
    app.mongodb_client.close()

app.include_router(router, tags=["recipes"], prefix="/recipe")