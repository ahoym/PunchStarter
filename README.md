[PunchStarter](http://punchstarter.herokuapp.com/)
==

This is my Clone of kickstarter.com.

Users can make an account, and make projects to be kick- I mean punchstarted! Alternatively, visitors may click on the `Demo User` button to sign in as a mock user.

Projects
=======

Visitors can browse projects without signing up. However, to make a project, they must sign up.
Users have the option to "like" and dontae to projects as well.

Technical Details
=================

+ Composed of Rails back-end with MVC architecture and Backboone.js front end with MV*.
+ Uses PostgreSQL for the database, and of course HTML, CSS, JavaScript for populating content.
+ Enabled client-side "drag-and-drop" picture upload and preview using Filepicker.io API.
+ Fires custom SQL queries to extract specific collections of entries.
+ After AJAX requests, sends large amounts of nested JSON data using jbuilder back to the front-end.
+ REST API, including more RESTful actions through collection routes.