# for headings 

- for dotted points 

# BACKEND AUTHENTICATION 

## FOLDER STRUCTURE AND WHAT EVERTHING CONTAINS
### index.js
- this file is the starting point of the express file and it contains all the main connections and everthing merges to this file 
### package.json
- this file contains all the dependencies and basic settings of the whole project 
### .env
- this file will contain all the enviourment variable (kundali) this will contain all the ports and passwords (like databases and hashing keys) . This is the most sensitive part of a project (credential wise)

### utils folder -> db.js
- the utils folder contain db.js file and this file imports mongodb and then sets a coonection and exports is for further use (in index.js -> import db from "./utils/db.js";)

### routes folder -> user.routes.js
- the folder routes contains user.routes.js file that contains all the urls for the webpage . It import all the contollers login and make routes from it . And then exports all the router ( router = express.Router() )

### model folder -> User.model.js
- the model folder contains User.model.js file that contains the userSchema (the structure of a user to be stored in db) . This file also contains HOOKS (any task you need to perform just before saving to the database or just after saving to the database)

### controller -> user.controller.js
- the folder controller contains user.controller.js file that contains all the buisness logic that routes use and load like (login , register , mailing servicse and etc)


## About index.js