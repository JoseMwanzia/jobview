# Jobview

Jobview is a web app that connects potential talents to people looking for talent online.

## Description

In this application, the employer logs in and uploads the job details and what it is they are looking for. The jobseeker then can also log in and search for the the job they want.
Due to its ease of use, react.js was used in this project with a react bootstrap framework for web responsiveness.
The biggest challenge faced was building appropriate associations for the DB tables, I however managed to get a work around this, not the best way to solve such a problem but there will be improvements on in future releases.

## Installation

Ensure that you are using postgresql version 15 on your local machine, you can install it by `brew install postgresql@15`, on a Mac OS, if you are using brew, you can start the database by `brew services start postgresql`

To run the server do the following: 
    - clone the repository
    - run `bundle install` to install the rails dependencies.
    - run `rails db:create` to create your postgresql development database.
    - then run `rails db:migrate` to do migrations of your schema.
    - run `rails server` to start your rails backend serverand your good

To run the client do the following:
    - install dependenciens with `npm install --prefix client`
    - run `npm start --prefix client` to start your client

## Usage



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

