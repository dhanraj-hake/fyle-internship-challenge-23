# Fyle Frontend Challenge
Completed the Fyle Frontend Challenge with all requirements and edge cases
Design a single-page application that takes a GitHub username as input and displays the public Github repositories belonging to the user.


### How to run
Install requirements or packages.
```
npm install
```
Run Project
```
ng serve
```

## Added Futurs
* Added search
* showed topics in a particular repository.
* Added pagination with a default of 10 repositories per page to 100
* added showing a skeleton loader when the API calls are in progress.
* added test cases for one component and one service with 100% code coverage to run using this command
```
ng test
```
* Hosted this app on Firebase Hosting, Live Link: <https://fyle-frontend-challenge.web.app/>
* Cached GET API calls for 60 seconds
* All edge cases are thought through and handled.
* Styling is done in Tailwind.


### Assumptions

* If topics list large and do not fit in the repository box, visibility is hidden when overflowing content.
* API caching time is 60 seconds.


### Additional Libraries
* primeng for the skeleton loader