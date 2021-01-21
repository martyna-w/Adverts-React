# Adverts-React
 Adverts-React is an frontend ReactJs application that we prepaired to pass the React subject. It works with the [Adverts-express-api](https://github.com/dancesWithMachines/adverts-express-api) which is also a part of the subject. Application is using Bootsrap 5.
 
 ## Table of contents
 
* [What does it do](#what-does-it-do)
* [Main features](#main-features)
* [Technical stuff](#technical-stuff)
* [Additional galery](#additional-galery)


## What does it do
Adverts-React is written in ReactJs and is using additional libraries. It's a simple market-place that shows advertisments. It support user accounts, so everyone that is registered and logged can add, view, modify and delete their adverts. Non registered users are allowed just to display adverts. It has additional features like: dynamicaly updated navbar and allerts allerts.

## Main features

### User accounts
App supporst user accounts. It allows user to register, login and delete account if it is needed. Beeing an user is required to use all features conected with creating, modyfying etc. adverts. When user is logged in, their data is stored in sesssion. Navbar is also dynamicaly rendered to provide user interface.

![Register & login](./scr/register_login.gif)

### Home page
App has the home page that is accessible for all users. Advert owners have additional features.

![View adverts](./scr/view_adverts.gif)

### User panel
Navnbar is dynamically rendered to provide user panel.

![user_panel](./scr/menus.gif)

## Crud methods
Appliaction has support for all crud methods provided by api

![supported_methods](./scr/addvert.gif)

![supported_methods](./scr/dltadvert.gif)

### Additional features

* deleting account also removes all user posts (but that's an api's feature)
* logged users have feature to see just their adverts
* app support allerts
* there is an ,,no image" template for adverts without pictures

## Technical stuff

Adverts-React uses axios to fetch data from the api

![api calls](./scr/axios.png)

App suports token authentication, it stores necessary data in session.

![api calls 2](./scr/api_call.png)

Aplication uses [simple-react-alert](https://www.npmjs.com/package/simple-react-alert)

![alerts](./scr/alert.png)

### Additional galery

Modifying advert

![Modifying advert](./scr/edtadvrt.gif)

Showing user's adverts

![Users adverts](./scr/show_adverts.gif)

Switching between components

![Switching](./scr/switching.png)

Template for adverts without pictures

![template](./scr/nopicture.png)
