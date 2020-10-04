# Task_Manager
This REST API allows the user to create a profile for which they can add personalised tasks that are stored in a MongoDB database. The user will also have the ability to read, update and delete their profile and the tasks created as well as add their own avatar image. This API comes with its own authentication system so that the user can log into their exisiting profile with a POST request, preventing any other users from tampering with a profile they don't have access to the credentials for. Furthermore, passwords are hashed for security purposes prior to storing them in the database.

## Installation

### Clone
Clone this repository to your machine using https://github.com/MMacdonald07/Task_Manager.git

### Setup
Use the package manager npm to install prerequisite node modules so the program can run:

```bash
npm install
```

## Usage
Requests are ready to be made from https://macd-task-manager.herokuapp.com with an API client. 

Alternatively, to open the program ordinarily on your device:

```bash
npm run start
```

Developer mode can also be used - this will run the script with nodemon so the server is restarted upon saving a .js or .hbs file:

```bash
npm run dev
```

From here, load localhost:3000 \(default port is set to 3000\) on an API client e.g. Postman.

In Postman, set up an environmental variable of "authToken" and add the following code to "Tests" for the Create user request:

```bash
if (pm.response.code === 201) \{
    pm.environment.set('authToken', pm.response.json().token) 
}
```

For login user:

```bash
if (pm.response.code === 200) \{
    pm.environment.set('authToken', pm.response.json().token) 
}
```

From here, select both to have no authorization and the remainder of requests to inherit authorization from parent. This will set up the authentication so all requests can be made as long as the user is logged in.

Finally, test suites are available through Jest if the user wishes to add any new features and test them out beforehand by adding new tests to ./tests/task.test.js or ./tests/user.test.js. These suites can be accessed by running:

```bash
npm run test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.