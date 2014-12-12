# tstr
Manage CasperJS tests for multiple environments
## Setup
Clone
```
git clone https://github.com/markwryan/tstr.git tstr
```
Move into tstr directory
```
cd tstr
```
Run npm install
```
npm install
```

## Adding a New Site
Use Grunt to setup a new environment . Grunt will create test and module directories and a env specific config file.
```
grunt create:[env_name]
```
## Running CasperJS Tests
CasperJS should be setup to run within Grunt.
```
grunt casper
```
or run tests for a specific environment:
```
grunt casper:[env]
```
