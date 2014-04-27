[PunchStarter](http://punchstarter.herokuapp.com/)
==

This is my Clone of kickstarter.com.

Users can make an account, and make projects to be kick- I mean punchstarted! Alternatively, visitors may click on the `Demo User` button to sign in as a mock user.

Projects
=======

Visitors can browse projects without signing up. However, to make a project, they must sign up.
Users have the option to "like" and donate to projects as well.

Technical Details
=================

+ Composed of Rails back-end with MVC architecture and Backboone.js front end with MV*.
+ Uses PostgreSQL for the database, and of course HTML, CSS, JavaScript for populating content.
+ Utilizes jQuery for small UX features.
+ After Backbone AJAX requests, sends large amounts of nested JSON data using jbuilder back to the front-end.
+ Enabled client-side "drag-and-drop" picture upload and preview using Filepicker.io API. Pictures uploaded are stored in Amazon Web Services' (AWS) S3.
+ Fires custom SQL queries to extract specific collections of data entries.
+ REST API, including more RESTful actions through collection routes.