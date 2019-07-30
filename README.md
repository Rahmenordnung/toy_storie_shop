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
  * [Ux Testing](#Ux_Testing)
* [Dataset](#Dataset)
* [Media](#Media)
* [Deployment](#Deployment)
  * [Developer environment](#Developer_environment)
* [The DOM](#The_DOM)
* [Challenges](#Challenges)
* [Bugs](#Bugs)
* [Acknowledgements](#Acknowledgements) 
 

#### <a name="Name"></a>Name :

The name of the project it may sound as a generic one, __Toy story shop__. But as there is not present in the database. I found a very simple one that shows the domain that we are talking, toys, and that we are talking about toys with a story behind, such as old toys. 

A link of the working project can be found [here](https://rahmenordnung.github.io/toy_storie_shop/)

---
## <a name="UX"></a>UX :

### <a name="User_Stories"></a>User Stories :

I tried to approach the page in the most proffesional manner that I could, so that it will be mostly used in marketing, sales and business area and/or other investigations.

__Example 1__

The page is made for any investor/client that is interested in seeing tha sales report of their bussines, or their rival, etc
As a client I have a special interest in knowing more about this Toys company. I have bought some products from them and I want to track where and when all the products batch was sold. I would like to compare how many products of this tipe were bought from this Company.
As a investor I am interesting in seeing how the sales volumes distribute along a time distribution so I can build a marketing plan for my investition.

__Example 2__

Is also made for the managers of the company, with the intention of expanding the shops, or to improve their products, etc. The lead board can easily find time patterns of better time when to sell their products, they can explore the map and plan promotions of their products in new geographical areas. They also can analyse how the sale of new productucts have evolved and if it worths to keep on selling or if their present losses for the business.

__Example 3__

Last, but not least is created for anybody, manufacturer, importers, wholesalers interested in seeing how a medium toy company spread their products around world, and the level of sales that they have. 
As a possible client, or retailer I want to see if they are selling products in my area or they will, what type of toys they have in the deposit, how many they sell in a specific period or in average. 

---
### <a name="Wireframes"></a>Wireframes :

You can find a pdf link for the wirefranes here: [Mockups](https://github.com/Rahmenordnung/toy_storie_shop/tree/master/assets/images/mockups)

---
##  <a name="Features"></a>Features

In the constuction of the project I have used the libraries donated by the Code institute, and other functional elements.


#### <a name="Current_Features"></a>Current Features ##


#### <a name="Existing_functionality"></a> Existing functionality ##

-- __Navbar__: Allows all users to easily navigate to the different sections of the website and interpretate the theme which relates them, regardless of which page they are currently on, simply by clicking the name of the area they wish to visit in the navbar. Also contain an logo that redirect to the home page (in this case, the same page).

-- __Full screen background with button in hover effect__: The image contextualize the business in an the right sector. And the __hover efect__ brings the attention to the the __button__ that leads the user to the charts page.

--__Intro.js__ Thanks to javascript it makes a tour with messages and arrows and opacity. It highlights some key elements in the page that the User should pay attention to in order to understand correctly its purpose.

-- __Charts in bootrap cards in differnt sizes__: This charts represent the data in easy to understand manner and makes easy to find connections between different variables from the dataset. Each chart is contained in a bootstrap card that improves the visibility and ads some extra info. The site contains the following types of graphs: bar charts, row charts, pie charts, and scatter plots.

-- __Sections separators__ They are simple headers that group the charts below them to a comun theme.

-- __Useful information__: Allows the user to understand better the charts, and to discover them in a better way, with more detail and attention. this is contained in __bootrap cards__

-- __Toggle hide button__: Once one graph is fully viewed one can hide it or make it appear back so that it will visualize only the needed information.

-- __Search selectors__: There are three selectors that ease the customers display a lot. One can look after the __City__ where the products were delievered, the __Customer name__ and the __order date__ of the delievery. In that way the user can have differents perspectives in which the the data can be analized

-- __Google map__: Allows the user to locate precisely all the custommers adresses listed in the database. On hover it appears the city name and by clicking the marker, the Customer firma name and the adress available in the records. (Uses Google Maps and Google Places). See js/maps.js. *Mistakes by the adress could appear due to the geographical localizators or incomplete data in the dataset

-- __Data table with pagination__ Represent all the data displayed in 4 columns, __Ordernumber, orderdate, city, customer name__ limitated to 21 items per page. This allows the user a full and easy visualization of the data. Responsive to the charts sellection it consist to be a true help for one who wants a full detail of the sales records of one speciffic companny(for example).

-- __Footer__: Informs the user that the site is hosted by Github Pages, and provides us a link to where they can view the source code on Github, and also a link to the dataset in a elegant dark green color.

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

--  [Font-awesome](https://fontawesome.com/) Font Awesome is a web font containing all the icons from the Twitter Bootstrap framework, and now many more.

--  [Goolgle fonts](https://fonts.google.com/) A collection from Goolgle with diverse fonts. (not needed to see the graphs but to style them) that were used for the graphs building. 

--  [Intro.js](https://introjs.com/) Guide your users through a tour of the app. Is a javascript plug that creates an experience of a tour that is displayed at the beginning of the page. I think it improves constistently the user experience of the page.

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

* The datatable is not as responsive as I would like because the total number of items is not refreshing after each sellection. I would like that to be improved in a future. 

---
## <a name="Dataset"></a>Dataset

The data set has been exported from Kaggle. A link of the exact dataset used can be found here .>>[Kaggle](https://www.kaggle.com/kyanyoga/sample-sales-data)

## <a name="Media"></a> Media  ##
All the images used in the project are taken from Google images page and there are free of copyright.

In this project I used just one image __[link](https://papers.co/ipad/mm13-old-car-street-vintage/)__  

## <a name="Testing"></a> Testing  ## 

#### <a name="Responsiveness_Testing"></a> Responsiveness Testing  ## 

The responsiveness of the website was tested on Chrome developer tool and also in the Mozzila developer tool.

At this stage, the positioning of the footer and background image  and charts cards was tested on the following devices:

Blackberry Playbook
Galaxy sIII, NOte II, 3
Laptop with HiDPI
Microsoft Lumia 550
Nexus 4,5,6,10, etc
Nokia Lumia, N9
iPhone 5/SE,6 7,8,X
iPad, /Pro/ Mini
etc

The full page is responsive in small, medium, and big devices. The charts are fully responsive thanks to the __.useViewBoxResizing(true)__ property added in all the charts. Also I create this responsivness with help of the bootrap cards and classes used in their grid system. The selector bar, navbar and footer I edited myself and created some media queries with css help as I learned in previous modules.

#### <a name="Code_Testing"></a> Code Testing  ####
The HTML was validated using the HTML Validator.

The CSS was validated using the CSS Validator. In total, 1 issues was found. This has to do with the parsing of a property. But as it doesn´t really affect the project I considerated to ignore it.

TheJavaScript files were tested using JSHint.com. Initially, 1 warnings were detected: Duplicate key 'mapTypeId'. But that is the normal type of expression for map.js. The rest is clean.

#### <a name="Ux_Testing"></a> Ux Testing ####

The normal functionality of the page has been tested through this tests:

__Full Background start image__: When hovered over it shows a dinamic effect contains a button.

__Go and play button__: When hovered changes color and adds margin around. When clicked hides the hole _start image_ and the _background page_ and displays the charts page that beginns with _intro.js tour_

__intro.js tour__ it will be displayed when firsly showing the charts page or each time we refresh it and it will guide the User, explain and show him the first steps that the User can do in order understand better the page and its purpose.

__Select bar__ When clicking have to display to indicated data from the dataset, and if clicked to filter throgh the selection and limit the other elements.

__Toggle button__ When clicked once it hides the respective card where the charts are contained, twice it shows it back again. This can be helpfull in order to ease the graphs display and their analysis.

__The charts__ are interactive and responsive and if clicked they will show the section clicked and if clicked back again that will go to the normal view again. And they will be responsive to mobile devices.

__The data table and pagination buttons__ are responsive and interactive. The number of files displayed it will change after each click on a chart, and it will reset when clicking the reset button. The next button will go forward and previous will go back.

__Back to top button__ It will take the user when clicked to the top of the page. So that the user experience is improved in that one can move easily on top or down (with scrolling or navbarlinks) of the page.

__Reset button__ When clicked it resets the charts filtering selection.

__Footer__ It contains anchors, social media, dataset, main page that takes the User to the desired links.

## <a name="Deployment"></a> Deployment  #### 

This project was developed locally using VS Code. A repository was created on github and named 'toy_storie_shop' Regular commits were made and pushed to my Github repository.

1. Deploy to heroku
2. Enter in the deployed repository
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

JavaScript can change, add, remove, all the HTML elements, attributes in the page and can create new events, and react to all existing

## <a name="Challenges"></a> Challenges  ## 

For me was something really exciting to work with data and create amazing graphics. Hard to find a good dataset, to learn at the beggining was the crossfilter, the reduce function, even to adjust the graphs to the cards had some issues for me as I am still a rookie. But the most challenging, and that is why I add it to the project was the map.js, whict took me long time , and still not is not brought to a sublime status, though a functional one. Displaying data in the data-grid was also a hard task for me.

## <a name="Bugs"></a> Bugs  ## 
I had some problems with the graphs display and the bootrap classes. 
Second problem was the size of the background image and it was because of the use of useless classes.
## <a name="Acknowledgements"></a> Acknowledgements  ## 
Carina_lead had a video about her project and that helped me when I was stucked in my page. At that time I had only the graphics done, but not a good display. And her call/video helped me.

Many thanks also to the Tutors, my mentor Guido Cecilio Bernal, and to the Code Institute Slack channel was invaluable!

