# Adverts-React
 Adverts-React is an frontend ReactJs application that we prepaired to pass the React subject. It works with the [Adverts-express-api](https://github.com/dancesWithMachines/adverts-express-api) which is also a part of the subject.
 
 ## Table of contents
 
* [What does it do](#what-does-it-do)
* [Main features](#main-features)

## What does it do
Adverts-React is written in ReactJs and is using additional libraries. It's a simple market-place that shows advertisments. It support user accounts, so everyone that is registered and logged can add, view, modify and delete their adverts. Non registered users are allowed just to display adverts. It has additional features like: dynamicaly updated navbar and allerts allerts.

## Main features

### User accounts
App supporst user accounts. It allows user to register, login and delete account if it is needed. Beeing an user is required to use all features conected with creating, modyfying etc. adverts. When user is logged in, their data is stored in sesssion. Navbar is also dynamicaly rendered to provide user interface.

![Register & login](./scr/register_login.gif)

### Home page
App has the home page that is accessible for all users. Advert owners have additional features.

![View adverts](./scr/view_adverts.gif)

![Delete advert](./scr/delete_advert.gif)

### CRUD
Adverts-React supports all api CRUD methods linked to the adverts.

![Add_advert](./scr/add_advert.gif)

Access to user interface requires beeing owner of an advertisment

![Logout](./scr/log_out.gif)

Deleting account also removes all user posts (but that's an api's feature)

![Account delete](./scr/delete_account.gif)

Users have feature to see just their adverts

![View adverts](./scr/show_adverts.gif)
