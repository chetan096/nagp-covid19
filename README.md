# NagpCovid19

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Implementation Details: 

Covid-19 Tracker India:

Steps to run on local: 
 
  1. Clone code from the below mentioned repository.
  2  Navigate to project
  3. Run 'ng serve'
  4. Run 'ng test' to check karma runner for test cases report.
  Steps to deploy to surge:
  1. Run 'ng build --prod' 
  2. Navigate to dist folder.
  3. Run 'surge' and enter credentials for deployment.

Working:
  1. Admin can login to the app using some credentials.
  2. Normal User can view the dashboard,news added by the admin and the precautions, have only read access to the application.
  3. To add news admin must have to login to the application.
  4. Add news url is restricted to the normal user using AuthGuard.
  5. Once login, admin cannot navigate to the login page, action restricted using AuthGuard.
  6. Admin can also logout from the application.(will also remove from session storage)
  7. Session is being managed by the browser session storage.
  8. Dashboard will show statewise stats of covid19.
  9. On Clicking one state row, you can view the district wise stats of covid19.
  10. Data is being fetched by the api exposed by the https://www.covid19india.org/.
  11. News are stored using angular in memory web api.
  12. Angular web api GET method has been overriden to sort news(by creation date in descending order)
  13. Angular web api POST has been overriden to set date and  id ,when admin add new news.
  14. All modules are lazy loaded.
  15. Unit testing has been done for every class.
  16. Different views are managed for admin and normal user.
  17. Once started, application will get redirected to dashboard which is the landing page of the application.
  18. Error page will get displayed if no url will get matched to the set routing.
  19. One form-control-error component has been created to show the usage of shared components.
  20. TabTranformPipe is to transform text of application tabs.
  21. DateTranformer is the tranformer used to transform date object to the set news date pattern.
  22. Application has been tested for Google Chrome,Mozila Firefox,Internet explorer11, microsoft edge.
  23. For styling ng prime, angular material and bootstrap have been used.
  
  
Assumptions:

  1.Only one admin is there for managing the application.
  2. In memory web api will not store added news on refresh.

  
Admin login creds:

username: chetan
password: 12345

Github link for the repository: https://github.com/chetan096/nagp-covid19

Surge link for deployed app: http://closed-destruction.surge.sh/
