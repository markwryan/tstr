# tstr
Manage CasperJS tests for multiple sites.
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
Use Grunt to setup a new site. Grunt will create test and module directories and a site-specific config file.
```
grunt create:[site_name]
```
## Running CasperJS Tests
CasperJS should be setup to run within Grunt.
```
grunt casper
```
or run tests for a specific site:
```
grunt casper:[site]
```