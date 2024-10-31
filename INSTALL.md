  Project Installation and Setup

Project Installation and Setup
==============================

This guide provides instructions for setting up and testing the project using Docker and Docker Compose. Follow the steps below to get your development environment up and running smoothly.

Prerequisites
-------------

*   [Docker](https://docs.docker.com/get-docker/)
*   [Docker Compose](https://docs.docker.com/compose/install/)
*   (Optional) [Python 3.11](https://www.python.org/downloads/) and [pytest 7.4.4](https://docs.pytest.org/) for testing the API

Installation
------------

1.  **Clone the Repository:**
    
        git clone <repository-url>
        cd <repository-folder>
    
2.  **Start the Services:**
    
    Make sure Docker and Docker Compose are installed, then run the following command in the project root:
    
        docker compose up --build -d
    
    This command will:
    
    *   Build the images
    *   Start the backend and frontend services in detached mode
3.  **Access the Application:**
    
    Once the services are up, you can start development right away. Access the frontend and backend as needed from your Docker setup.
    

Testing the API
---------------

To test the API, you'll need to install Python and pytest.

### Steps:

1.  **Install Python 3.11 and pytest:**
    
    Make sure you have Python 3.11 installed, and set up a virtual environment (recommended) to manage dependencies:
    
        python3.11 -m venv venv
        source venv/bin/activate  # On Windows: venv\Scripts\activate
        pip install pytest==7.4.4
    
2.  **Run Tests:**
    
    From the root directory, run the following command to execute all API tests:
    
        pytest tests/test_api.py
    
    This will run all tests in `tests/test_api.py` to verify the API is functioning correctly.
    

Additional Notes
----------------

*   To stop the Docker services, run:
    
        docker compose down
    
*   To view logs for debugging, use:
    
        docker compose logs -f