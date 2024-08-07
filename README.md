
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/JoseMwanzia/jobview)
![GitHub contributors](https://img.shields.io/github/contributors/JoseMwanzia/jobview)
![GitHub forks](https://img.shields.io/github/forks/JoseMwanzia/jobview)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/JoseMwanzia/jobview)


# Jobview

Jobview is a web app that connects potential talents to people looking for talent online.

## Description

In this application, the employer logs in and uploads the job details and what it is they are looking for. The jobseeker then can also log in and search for the the job they want.
Due to its ease of use, react.js was used in this project with a react bootstrap framework for web responsiveness.
The biggest challenge faced was building appropriate associations for the DB tables, I however managed to get a work around this, not the best way to solve such a problem but there will be improvements on in future releases.

## Installation

Ensure that you are using postgresql version 15 on your local machine, you can install it by `brew install postgresql@15`, on a Mac OS, if you are using brew, you can start the database by `brew services start postgresql`

1. To run the server do the following
    - clone the repository
    - run `bundle install` to install the rails dependencies
    - run `rails db:create` to create your postgresql development database
    - then run `rails db:migrate` to do migrations of your schema
    - run `rails server` to start your rails backend serverand your good

2. To run the client do the following
    - install dependenciens with `npm install --prefix client`

## Usage

To run the project, run `npm start --prefix client` to start your client

![Screen Recording](client/src/assets/recording.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

You can create a pull request by

1. Fork the repository.
2. Create a new branch: `git checkout -b your-feature-name`.
3. Make your changes.
4. Push your branch: `git push origin your-feature-name`.
5. Create a pull request.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE.txt) file for details.