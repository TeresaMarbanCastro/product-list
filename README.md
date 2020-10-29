# online-shop

## Basic features
This is a small shopping cart application mock in which the user can: 

• See a large list of products

• See stock availability for each product

• See the list of items in the cart

• Add a product to the cart

• Increase/decrease the quantity of the products already in the cart, decreasing down to 0 will remove the product from the cart

• See cart total amount

Moreover, it is a responsive, mobile-first app. 

##  Bonus

• The application will adapt from a single view layout (desktop mockup) to a multiple view layout as in the mobile mockup, the user will be able to navigate from product list view to cart view using the navigation arrow buttons.

• Add a product to favorite list

• List the favorite products

## Technologies

• Vue 3 as main Framework

• Vuex ^4.0.0-beta.4 to store and manage state

• Axios for endpoint calls

    Available entry points:
- | GET | /grocery: | get the list of products |
- | PATCH | /grocery/:id: | update the item stock |
- | GET | /grocery?favorite=1: |get the list of favorite items |

## Architecture , app structure and component responsibility

This app is build upon component oriented architecture.
The smaller components ( Product Card and Shopping Cart ) are "dumb" components which only receive data to render.
These small components are managed by the view component ( Products View ) which is in charge of executing directives to ask for data and send data. 
The Store contains the state of the application and its mutations to alter it by commits sent by the actions.
App view is in charge of holding the Products View and App is loaded in the main.js 


## Setup 

### Installing dependencies
```
npm i 
```

### Serving locally for development
```
npm run serve
```

### JSON server
Theres is a server-api folder containing the db.json to be run locally on http://localhost:3000 with :

```json-server --watch db.json```

More info on its README file.


## Testing
Only four basic tests regarding search usage have been implemented. Further testing is recommended.

They can be run through the command: npm run test.

## Further improvements

- 