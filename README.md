# Kanban

## Installing Backend
Open the terminal
### Traverse to the backend folder
```bash
cd backend
```
### Create a new Python virtual environment in the backend directory named env.
```bash
python -m venv env
```

### Activate the virtual environment
```bash
.\env\Scripts\activate
```
### Install Requirements
```bash
pip install -r requirements.txt
```

### Setting up the database
Open a new Terminal without closing the present terminal and ensure docker desktop is running in your system. From the kanban directory run the below code
```bash
docker-compose up
```
PostgreSQL will be running in the port 8080
[http://127.0.0.1:8080](http://127.0.0.1:8080/)
You can login with the username: **postgres** and password **Password1** and ensure you have selected **postgresSQL** from the dropdown in system
Press Login
Select DB as postgres from the dropdown near the left side of the screen below Adminer tab

### Hosting the backend after setting up the database
Go back to the previous terminal and run the command to complete the backend setup
```bash
uvicorn main:app --reload 
```
## Setting up the frontend
Please ensure that you are using  node v16 or below
Open a new terminal and got to the frontend directory
```bash
cd .\frontend\
```

run the below command
```bash
npm start
```







