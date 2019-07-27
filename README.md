# Toy storie shop (Second Milestone Project)
 
 #### <a name="Description"></a>Description :

This short program that represents the second project for the Front End developer diploma from Code Institute integrates Javascript and **d3** plus **crossfilter** and **dc.js** and **queue** used in conjunction with a **csv. file**,  as part of the  **Front end Development** module.

Its goal is to exctract the data from the **csv** dataset and to design with it statistical functions that ease the final lecture of the data and it's interpretation. In addition, the site uses jQuery to hide and display parts of the website, and other functions through the DOM.

In this case the data belongs to an **American Toys company** that with the purpose of expansion has presented an extract of their sales with the purpose of understanding the market trends.


 #### Sumary :


* [Description](#Description)
* [Name](#Name)
* [UX](#UX)
* [User Stories](#User_Stories)
   - [Wireframes](#Wireframes)
* [Features](#Features)
  * [Current Features](#Current_Features)
 
    --[Existing_functionality](#Existing_functionality)
    
    --[Coding languages](#Coding_languages)

    --[Libraries](#Libraries)
    
    --[Miscelaneous](#Miscelaneous)
    
    --[Google API](#Google_API)
    
* [Features left to implement](#Features_left_to_implement)    
* [Testing](#Testing)
  * [Responsiveness Testing](#Responsiveness_Testing)
  * [Code Testing](#Code_Testing)
* [Dataset](#Dataset)
* [Media](#Media)
* [Deployment](#Deployment)
  * [Developer environment](#Developer_environment)
* [The DOM](#The_DOM)
* [Challenges](#Challenges)
* [Bugs](#Bugs)
* [Acknowledgements](#Acknowledgements) 
 

#### <a name="Name"></a>Name :

The name of the project is a generic one, __Toy story shop__. As there is not present in the database. I tried to find the easiest to remember, without to much complication. A link of the working project can be found [here](https://github.com/Rahmenordnung/toy_storie_shop/tree/master/assets/images/mockups)

---
## <a name="UX"></a>UX :

#### <a name="User_Stories"></a>User Stories :

I tried to approach the page in the most proffesional manner that I could, so that it will be mostly used in marketing, sales and business area and/or other investigations.

__Example 1__

The page is made for any investor/client that is interested in seeing tha sales report of their bussines, or their rival, etc
As a client I have a special interest in knowing more about this Toys company. I have bought some products from them and I want to track where and when all the products batch was sold. I would like to compare how many products of this tipe were bought from this Company.
As a investor I am interesting in seying how the sales volumes distribute along a time distribution so I can build a marketing plan for my investition.

__Example 2__

Is also made for the managers of the company , with the intention of expanding the shops, or to improve their products, etc. The lead board can easily find time patterns of better time when to sell their products, they can explore the map and plan promotions of their products in new geographical areas. They also can analyse how the sale of new productucts have evolved and if it worth it to keep on saling or if their prsent looses for the business.

__Example 3__

Last but not least is created for anybody, manufacturer, importer, wholesaler interested in seeing how a medium toy company spread their products around world, and the level of sales that they have. 
As a possible client, or retailer I want to see if they are selling products in my area or they will, what type of toys they have in the deposit, how many they sell in a specific period or in average. 


#### <a name="Wireframes"></a>Wireframes :

You can find a pdf link for the wirefranes here: [Mockups](https://github.com/Rahmenordnung/toy_storie_shop/tree/master/assets/images/mockups)

---
##  <a name="Features"></a>Features

In the constuction of the project I have used the libraries donated by the Code institute, and other functional elements.


#### <a name="Current_Features"></a>Current Features ##


#### <a name="Existing_functionality"></a> Existing functionality ##

-- __Navbar__: Allows all users to easily navigate to the different sections of the website, regardless of which page they are currently on, simply by clicking the name of the area they wish to visit in the navbar. Also contain an logo that redirect to the user.

-- __Full screen background with button in hover effect__: The image contextualize the business in an the right sector. And the __hover efect__ brings the attention to the the __button__ that leads the user to the charts page.

-- __Charts in bootrap cards in differnt sizes__: This charts represent the data in easy to understand manner and makes easy to find connections between different variables from the dataset. Each chart is contained in a bootstrap card that improves the visibility and ads some extra info. The site contains the following types of graphs: bar charts, row charts, pie charts, and scatter plots.

-- __Useful information__: Allows the user to understand better the charts, and to discover them in a better way, with more detail and attention. this is contained in __bootrap cards__

-- __Toggle hide button__: Once one graph is fully viewed one can hide it or make it appear back so that it will visualize only the needed information.

-- __Search selectors__: There are three selectors that ease the customers display a lot. One can look after the __City__ where the products were delievered, the __Customer name__ and the __order date__ of the delievery. In that way the user can have differents perspectives in which the the data can be analized

-- __Google map__: Allwos the user to locate precisely all the custommers adresses listed in the database. On hover it appears the city name and by clicking the marker the CUstomer firma name, and the adress available in the records. (Uses Google Maps and Google Places). See js/maps.js. *Misstaches by the adress could appear due to the geographical localizators

-- __Footer__: Informs the user that the site is hosted by Github Pages, and provides as link to where they can view the source code on Github, and also a link to the dataset in a elegant dark green color.


#### <a name="Coding_languages"></a>Current Features ##

-- [HTML5](https://www.w3schools.com/html/html_intro.asp) --Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.

-- [CSS3](http://www.css3.info/) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[

-- [Javascript](https://www.javascript.com/) is a high-level, interpreted programming language that conforms to the ECMAScript specification


#### <a name="Libraries"></a> Libraries ##

--  [d3.js](https://d3js.org/) D3.js is a JavaScript library for manipulating documents based on data using HTML, SVG, and CSS. D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document.

--  [crossfilter](https://square.github.io/crossfilter/) Crossfilter is a JavaScript library for exploring large multivariate datasets in the browser. 

--  [dc.js](https://dc-js.github.io/dc.js/), dc.js is an easy yet powerful javascript library for data visualization and analysis in the browser and on mobile devices. Is a javascript charting library with native crossfilter support that help to interconect and render big datasets, and to visulize them with svg, and d3.js

--  [queue.js](https://github.com/d3/d3-queue)  A queue evaluates zero or more deferred asynchronous tasks with configurable concurrency: you control how many tasks run at the same time.


#### <a name="Miscelaneous"></a> Miscelaneous ##

--  [Font-awesome] (https://fontawesome.com/) Font Awesome is a web font containing all the icons from the Twitter Bootstrap framework, and now many more.

--  [Goolgle fonts] (https://fonts.google.com/)A collection from Goolgle with diverse fonts. (not needed to see the graphs but to style them) that were used for the graphs building. 

--  [b]

--  [jquery.js](https://jquery.com/) is a library of Java scripts that simplifies lots of its functions, the main differance with javascriptis that it performs many common scripting functions in fewer lines of codes

--  [bootstap](https://getbootstrap.com/) is a framework to help you design websites faster and easier.


#### <a name="Google_API"></a> Google API  ## 

--[Google APIs(Google maps)](https://developers.google.com/maps/documentation/) is a set of application programming interfaces developed by Google which allow communication with Google Services and their integration to other services

Finally I have used the Google Maps API and added to it the clients adresses so that the user can relate and see where each project has been delivered.

These is a representative map, but not a dynamic one connected to the crossfilter, because that is beyond the lessons provided in the course and my skills, yet

## <a name="Features left to implement"></a>Features_left_to_implement ##

* First of all I like a lot the graphical distributions in general. So one of the thing that I would like to do is to implement more types of Charts, but for that I have to learn more abot javascript.

* I would like also to connect maybe more datasets and work with them

* Also is my intention to maybe work with geographical data in which I am interested.

* Also it would be nice also to make maybe graphics more complicated with more variables connected.


---
## <a name="Dataset"></a>Dataset

The data set has been exported from Kaggle. A link of the exact dataset used can be found here .>>[Kaggle](https://www.kaggle.com/kyanyoga/sample-sales-data)

## <a name="Media"></a> Media  ##
All the images used in the project are taken from Google images page and there are free of copyright.

In this project I used just one image __url url url url shepher shepherd__


## <a name="Testing"></a> Testing  ## 

#### <a name="Responsiveness_Testing"></a> Responsiveness Testing  ## 

The responsiveness of the website was tested on Chrome developer tool and also in the Mopzzila developer tool.

At this stage, the positioning of the footer and background image was tested on the following devices:

Blackberry Playbook
Galaxy sIII, NOte II, 3
Laptop with HiDPI
Microsoft Lumia 550
Nexus 4,5,6,10, etc
Nokia Lumia, N9
iPhone 5/SE,6 7,8,X
iPad, /Pro/ Mini
etc

The full page is responsive in small, medium, and big devices. The charts are fully responsive thanks to the __ .useViewBoxResizing(true) __ property added in all the charts. Also I create this responsivness with help of the bootrap cards and classes used in their grid system. The selector bar, navbar and footer I edited myself and created some media queries with css help as I learned in previous modules.

#### <a name="Code_Testing"></a> Code Testing  ####
The HTML was validated using the HTML Validator.

The CSS was validated using the CSS Validator. In total, 1 issues was found. This has to do with the parsing of a property. But as it doesn´t really affect the project I considerated to ignore it.

TheJavaScript files were tested using JSHint.com. Initially, 1 warnings were detected: Duplicate key 'mapTypeId'. But that is the normal type of expression for map.js. The rest is clean.

User Story Testing
Here are the results for the user story tests:



Jumbotron:

Click the 'Take me there' button, and verify it does in fact take the user to the weather section.
Travel Inspiration:

Click both the right and left arrows to ensure that the active photo in the carousel slides smoothly to the next photo.

Adjust size of browser window to various sizes, to ensure the carousel resizes well and is responsive.

Enter in a search location (such as 'Ireland'), click 'submit' and verify that the user is shown a carousel of photos matching their search term. (This was tested with multiple search terms, however it should be noted that the results do depend on how they were tagged when uploaded to the unsplash website, and so I cannot guarantee that all photos shown will be relevant).

Enter in a search term/ location, press 'enter' on the keyboard to ensure this also triggers a search and verify that the user is shown a carousel of photos relating to their search.

Enter in an invalid search term/ location, submit, and verify that a message appears advising the user that there are no results.

Click the left and right arrows to ensure that the photo changes as the user clicks.

Adjust size of browser window to various sizes, to ensure the unsplash carousel resizes well and is responsive.

Leave the input box blank and click submit, to verify that the input box border turns red to indicate to the user that the field is required.

Flights:

Enter locations in the 'From', 'To, 'Depart' and 'Return' fields, click 'search flights'.

Ensure results are shown in a new tab.

Leave the 'To' destination blank and search for flights. Verify that when no 'To' destination is entered, results are shown to 'everywhere'.

Leave the ''Depart' or 'Return' fields blank and search for flights. Verify that when no date is entered, results are shown based on the cheapest month.

Verify that when no 'To' destination is entered and no dates are chosen, results are shown to 'everywhere' based on the cheapest month.

Weather:

Enter a city and country, click 'submit'. Verify the location name appears below the submit button, as well as 5 boxes displaying the forecast for the coming five days.

Repeat the step above, pressing 'enter' on the keyboard to trigger the search.

Enter an invalid search term, click 'submit', and verify a message appears to inform the user that there are no results.

Select a date in the past to see additional information. Verify an information box containing the requested details appears.

To verify an error message appears if no data found, try a date farther in the past, as data for some countries is not available from earlier years. (Eg Cork, Ireland. December 2017). Confirm error message appears.

Try to choose a date prior to January 2015 and verify the date picker will not allow the user to do so.

Leave the location input box blank and click submit, to verify that the input box border turns red to indicate to the user that the field is required.

Nearby:

Begin typing a location. Verify an autocomplete box powered by google appears with location suggestions.

Select a location from the list and verify that the map moves to that location.

Type a location in its entirety in the input box. Press 'enter' on the keyboard to verify this also triggers the search and moves the map to the location.

Choose each of the individual items from the drop down menu and verify markers appear.

Choose one dropdown item after another to verify when a new dropdown item is selected, the old markers are cleared out to make way for the markers for the new results.

Try each item in the dropdown menu to verify that when a certain type of location is not found in the search area, an alert appears to advise the user to try a different search.

Verify the alert vanishes automatically when the user searches for a new location or selects a new dropdown item.

Clicking the 'x' in the top right corner to verify the alert is dismissible.

Click a marker and see the location name, rating and general address displayed in an info window.

Click the 'x' in the top right corner to verify the info window is dismissible.

Verify that if the user searches for a second place, following selecting options from the dropdown menu, the text in the dropdown box will automatically display 'what are you looking for?' again.

Click the 'satellite' button and the 'map' button to change view.

Click the square in the top right corner of the map to toggle fullscreen view.

Click the '+' and '-' buttons on the bottom right of the map to zoom in and out.

Click and drag to move around the map.

Verify that clicking and dragging, then selecting an item from the dropdown will search the visible area for results of that type.

Useful Information:

Select a country from the dropdown menu

Verify a table slides in to view, displaying information and a flag.

Select another country and verify the information clears out and changes to display the new information.

#### Footer:

Click the link in the footer and verify that user is brought to the github repo for this project.
API and Javascript testing:

Each feature which uses an API was tested manually, and while the code was being written, messages were logged to the console, to ensure the code was functioning as it should. Scripts were checked on https://jshint.com

The testing of my scripts was also automated as much as possible, with the use of Jasmine. I took a Behavior-Driven Development (BDD) approach towards writing my tests, focusing on the behaviours and possible actions of the users as they interact with the website. I then wrote a test for each of these behaviours, which failed. The tests were then edited until they passed.

An important issue to note, was that I could not automate the testing for the Google Maps API at this time. I tried adding a 'div' to the test html, using the same 'map' ID as I had used in my script, to replicate my own html; this did not work. Many of the functions and syntax used by Google Maps were not being recongised by Jasmine. I was able to locate a third-party mock for Google Maps, however I was unable to find any mocks that also included the Google PlacesService. I manually tested this feature as much as possible, exploring the possible actions as a user, and also by logging messages to the console throughout. I have left the Maps test I had written within the ProjectSpec.js file, commented out, for reference.

My tests can be viewed here. The tests can be run on the SpecRunner.html page, which was downloaded from the jasmine website and edited to include links to my scripts.



## <a name="Deployment"></a> Deployment  #### 

This project was developed locally using VS Code. A repository was created on github and named 'toy_storie_shop' Regular commits were made and pushed to my Github repository.

1. Deploy to heroku
2. enter in the deployed repository
3. Click on the settings cog
4. Scrolled down to the 'GitHub Pages' section of the settings. Also can be done with Ctrl/Cmd + F
5. Select 'master branch' from the 'source' dropdown menu, and no label from the dropdown nearby.
6. Save the selection
6. The page will refresh automatically and it would be deployed. In my case the workspace is ' https://rahmenordnung.github.io/toy_storie_shop/' 

 └── <--> Code -> Select Settings tab
                    └── Github Pages
                            └── Select None in Source -> Select master branch
                                                                    └──  Select Save
                                                                                   --->>>github web url
#### <a name="Developer_environment"></a> Developer environment  #### 

As for the external use of the program, the user should download first the Toys shop data base.csv file.
and upload then the above mentionated libraries, after that ,load the bootstap file and the dc.css as well as jquery so that the program should deploy as expected.                                                                                   

---                                                                    
                                                                  
## <a name="The_DOM"></a> The DOM  ##

Before displaying the charts I inspected the variables with chrome developer console, and checked if the variable pass through the crossfilter. and they are correlated or not.

JavaScript can change,add, remove, all the HTML elements, attributes in the page and can create new events, and react to all existing

## <a name="Challenges"></a> Challenges  ## 

For me was something really exciting to work with data and create amazing graphics. Hard to find a good dataset, to learn at the beggining was the crossfilter, the reduce function, even to adjust the graphs to the cards had some issues for me as I am still a rookie. But the most challenging, and that is why I add it to the project was the map.js, whict took me long time , and still not is not brought to a sublime status, though a functional one. Displaying data in the data-grid was also a hard task for me.

## <a name="Bugs"></a> Bugs  ## 
I had some problems with the graphs display and the bootrap classes. 
Second problem was with shepherd.js I had some problems with the github pages that gave me error with the paths. 

## <a name="Acknowledgements"></a> Acknowledgements  ## 
Carina_lead had a video about her project and that helped me when I was stucked in my page. At that time I had only the graphics done, but not a good display. And her call/video helped me.

Many thanks also to the Tutors,my mentor Guido Cecilio Bernal, and to the Code Institute Slack channel was invaluable!

