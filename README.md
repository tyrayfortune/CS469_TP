# CS469_TP
look under washingtonStateParks readme for run commands, mostly just ng build, and ng serve.


# Assets folder
for our images and json data so we can call data dynamically into our html using {{}}

# pages folder
for complete pages, our three pages will go here, and all the reusable components will be called within them

# reusableComponents folder
for header/footer/etc, anything that can be reused

# services folder
for keeping track of media querys,  as well as any other service functions we need to create. Probably wont be nessesary for project

# Keep in mind all pages are connected thru app.routes.ts, so localhost:4200/blahblahblah, would be made under app.routes.

# Create new component
 use "ng generate component component-name" to make a component, be sure to be under the right directory, so for a reusableComponent, make sure your under that folder structure

# INSTALLS
you may need to install bootstrap as i think it is ignored right now. do it at base level for project
"npm install bootstrap bootstrap-icons"

 ## FOR MORE INFO
 look at header reusable component for comments I made about how angular works if you want too