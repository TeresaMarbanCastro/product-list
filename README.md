# online-shop

## :large_blue_circle:Basic features
This is a small shopping cart application mock in which the user can: 

• See a large list of products. Due to the large number of items, only a few portion of them are displayed. In order to be able to display more, a See More button was included. 

• See stock availability for each product

• See the list of items in the cart

• Add a product to the cart

• Increase/decrease the quantity of the products already in the cart, decreasing down to 0 will remove the product from the cart
Additionally, only available products in stock are shown in the products list section and increasing an item which has no more stock will not affect the cart, because it is unavailable. 

• Descriptions are only seen in desktop screens (over 1200px)

• See cart total amount

Moreover, it is a responsive, mobile-first app (min screen size 400px).


## :red_circle: Technologies

• Vue 2 as main Framework

• Vuex 3 to store and manage state

• Axios for endpoint calls

    Available entry points:
- | GET | /grocery: | get the list of products |
- | PATCH | /grocery/:id: | update the item stock |

## :white_circle: Architecture , app structure and component responsibility

This app is build upon component oriented architecture.
The smaller components ( Product Card and Shopping Cart ) are "dumb" components which only receive data to render.
These small components are managed by the view component ( Products View ) which is in charge of executing directives to ask for data and send data. 
The Store contains the state of the application and its mutations to alter it by commits sent by the actions.
App view is in charge of holding the Products View and App is loaded in the main.js 


## :black_circle: Setup 

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



## :large_orange_diamond: Further improvements

- Pagination: In order to see a large number of items, an overflow was created so that user can scroll up and down.
However, while it is ok for mobile,  it is not a very elegant option for desktop. Thus, as a further improvement, 
pagination may be included in order to display different views per products or load more content with scrolling down. 
- Styling: styles have been disregarded in favour of JS functionality. Trying to be decisive in the Store and main features, there are 
several styling issues that should be fix such as more appropriate responsive designs and general UX and UI experience. 
- Testing: Testing has not been done, even though it was first thought of starting TDD, it was not possible to even attempt it,
 so unit testing should be incorporated.
- Accessibility: Keyboard navigation has been key to the development of this site, an assessment should be conducted in order to 
incorporate other measures such as proven screen reader effectiveness, zooming and html semantics and ARIA.
- Refactor: Even though focus was set on clean code, there are certain patterns that could be extracted to be reusable,
such as the patch actions in the store or the creation of a button component to be reused along the application.
