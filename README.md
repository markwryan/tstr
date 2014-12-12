# tstr
Manage CasperJS tests for multiple sites.
## Adding a new site
Use Grunt to setup a new site. Grunt will create test and module directories and a site-specific config file.
```
grunt create:[site_name]
```
## Running CasperJS
CasperJS should be setup to run within Grunt.
```
grunt casper
```
or run tests for a specific site:
```
grunt casper:[site]
```