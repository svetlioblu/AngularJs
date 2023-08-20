# Facecare

## To start

- Development client server <br/>
Run `npm i` within server directory to install the dependencies <br/>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`
- RESTful Node.js server <br/>
Can find it into https://github.com/svetlioblu/AngularJs/tree/main/facecare%20server <br/>
Run `npm i` within server directory to install the dependencies <br/>
Run `npm start` within server directory
- MongoDB required

## Features
- Login, Register, Logout / users
- Conditional rendering  if a user is logged or a guest
- My Profile (! in process of development)
- Dynamic procedures List
- CRUD operations on the Dynamic procedures List (! Edit is in process of development)
- Details on procedures List item
- In Module Routing (forChild)
- Template-driven form inline validations
- Lazy loading
- Spinner on fetching data into the procedures List

## Next
- My Profile page to display the added procedures per user plus user details(age, tel, last procedure time, next procedure time, achievements)
- Only admin user to be able to Add, Edit and Delete procedures. The users should be ablle to add only procedures to their profile.
- The Admin should be able to search for a user and display his profile page
- Add Stars Rating per procedure only for the users
