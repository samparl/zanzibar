# Client TypeScript Template
## About the project
This template is intended to facilitate launching new client side projects with the following features:
* TypeScript
* Absolute imports
* Linting - defaults to Airbnb but with named exports
* Basic project structure

## To use
1. clone this repository.
2. Repoint the git remote origin your project.
3. Commit and push whatever configurational changes you desire to your own project.

## Project structure
The following configuration and environmental files are included:
*.gitignore
* .nvmrc
* .eslintrc
* tsconfig.json
* webpack/index.js

The webpack directory is intended as a place to put all environmental webpack configurations, to be parsed in the index file (which currently houses all configuration).