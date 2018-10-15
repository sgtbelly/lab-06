![CF](http://i.imgur.com/7v5ASc8.png) LAB: HTTP and REST
========================================================

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment
###### Requirements
* Implement an API server for a storefront, using json-server
  * Create a sub-folder called `data` with a `db.json` file
  * Start your json-server from within this folder
  * Data models:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`

* Implement a Web Server with express and ejs
  * Static routes and assets served from the public folder
  * 2 dynamic routes:
  * /categories
    * Lists each categories and draws a link to a detail page (/category/:name)
  * /category/:name
    * Lists the products in the category

* Implement a next.js based REST client (RESTy)
  * Perform a GET request to a typed in URL and spit out the output separately:
    * Headers
    * Body


###### Testing
**Web Server**

* Use `supertest` to assert that the server responds to the routes
* Mock out the API calls in the web server test


##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

