## Requirements

- Install MongoDB resources/MongoDB-Installation-Guide.pdf
  - Unzip and open the "forum" folder inside "resources/resources" and copy the path
  - Navigate to the mongo Tools folder and open with CMD (C:\Program Files\MongoDB\Server\5.0\bin )
  - write the following command(replace the path!): mongorestore -d forum C:\Users\Name\Downloads\resources\forum
- Unzip resources/Rest-api.zip
  - Install the dependancies: npm -i
  - open Rest-api and run npm start (! if db error need to change dbURL: 'mongodb://localhost:27017/forum', with 127.0.0.1)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Functionality

- Resources are imported with the angular architecture. There is used ApiService with observables requesting data from server and MongoDb.
- Loads dynamic Themes Remotly
- Loads dynamic Posts Remotly
- Loadrer
- Login, logout, register user
- Profile page for logged user
- Details themes on header click
- Dynamic comments in theme detais
- Routing
- Route Guards for new-theme
