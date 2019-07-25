# Second Milestone Project
 
 #### <a name="Description"></a>Description :
## Description
This short program that represents the second project for the Front End developer diploma from Code Institute integrates Javascript and **d3** plus **crossfilter** and **dc.js** and **queue** used in conjunction with a **csv. file**.  as part of the  **Front end Development** module.

Its goal is to exctract the data from the **csv** dataset and to design with it statistical functions that ease the final lecture of the data and it's interpretation. In addition, the site uses jQuery to hide and display parts of the website, and other functions through the DOM.

In this case the data belongs to an **American Toys company** that with the purpose of expansion has presented an extract of their sales with the purpose of understanding the market trends.

In addition I have added a small basic page as a preseentation of the listed products in the graphs in which I have used some small javascript functions.

 #### <a name="Sumary"></a>Sumary :


* [Description](#Description)
* [Sumary]()
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

   - [index.html](#index.html)
   - [library.html](#library.html)
   - [gigs.html](#gigs.html)
   - [Itchy.html](#Itchy.html)
   - [Contact.html](#Contact.html)
   - 

* [Technologies_Used](#Technologies_Used)
* [Testing](#Testing)
* [Dataset](#Dataset)
* [Debugging](#Debugging)
* [Deployment](#Deployment)
* [Content](#Content)
* [Media](#Media)
* [Acknowledgements](#Acknowledgements) 
 

#### <a name="Name"></a>Name :

The name of the project is a generic one, __Toy story shop__. As there is not present in the database. I tried to find the easiest to remember, without to much complication. A link of the working project can be found [here](https://github.com/Rahmenordnung/toy_storie_shop/tree/master/assets/images/mockups)

---
#### <a name="User_Stories"></a>User Stories :

I tried to approach the page in the most proffesional manner that I could, so that it will be mostly used in business industries.

The page is made for any investor/client that is interested in seeing tha sales report of their bussines, or their rival, etc
Is also made for the managers of the company , with the intention of expanding the shops, or to improve their products, etc
Last but not least is created for anybody interested in seying how a medium toy company spread their products around world, and the level of sales that they have.

#### <a name="Wireframes"></a>Wireframes :

You can find a pdf link for the wirefranes here: [Mockups](https://github.com/Rahmenordnung/toy_storie_shop/tree/master/assets/images/mockups)

---
##  <a name="Features"></a>Features

In the constuction of the project I have used the libraries donated by the Code institute,


#### <a name="Current_Features"></a>Current Features ##


#### <a name="Existing_functionality"></a> Existing functionality ##

-- __Navbar__: Allows all users to easily navigate to the different sections of the website, regardless of which page they are currently on, simply by clicking the name of the area they wish to visit in the navbar. Also contain an logo that redirect to the user.

-- __Full screen background with button in hover effect__: The image contextualize the business in an the right sector. And the __hover efect__ brings the attention to the the __button__ that leads the user to the charts page.

-- __Charts in bootrap cards in differnt sizes__: This charts represent the data in easy to understand manner and makes easy to find connections between different variables from the dataset. Each chart is contained in a bootstrap card that improves the visibility and ads some extra info. The site contains the following types of graphs: bar charts, row charts, pie charts, and scatter plots.

-- __Useful information__: Allows the user to understand better the charts, and to discover them in a better way, with more detail and attention. this is contained in __bootrap cards__

-- __Toggle hide button__: Once one graph is fully viewed one can hide it or make it appear back so that it will visualize only the needed information.

-- __Search selectors__: There are three selectors that ease the customers display a lot. One can look after the __City__ where the products were delievered, the __Customer name__ and the __order date__ of the delievery. In that way the user can have differents perspectives in which the the data can be analized

-- __Google map__: Allwos the user to locate precisely all the custommers adresses listed in the database. On hover it appears the city name and by clicking the marker the CUstomer firma name, and the adress available in the records. (Uses Google Maps and Google Places). See js/maps.js

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

#### <a name="Dataset"></a> Dataset  #### 

The data in the dashboard is based on this dataset sourced from [Kaggle](https://www.kaggle.com/kyanyoga/sample-sales-data)


## <a name="Features left to implement"></a>Features_left_to_implement ##

* First of all I like a lot the graphical distributions in general. So one of the thing that I would like to do is to implement more types of Charts, but for that I have to learn more abot javascript.

* I would like also to connect maybe more datasets and work with them

* Also is my intention to maybe work with geographical data in which I am interested.

* Also it would be nice also to make maybe graphics more complicated with more variables connected.


---
## Developer environment
As for the external use of the program, the user should download first the Toys shop data base.csv file.

and upload then the above mentionated libraries, after that ,load the bootstap file and the dc.css as well as jquery so that the program should deploy as expected.

## Media
All the images used in the project are taken from Google images page and there are free of copyright.

Colaborations and help received
The mentors as well as the tutors helped me in this project with the peces where I got stuck, and their help never the less made me understand better the

programming way of thinking and troubleshouting a problem. Many thanks to all!!!

## Code Testing

HTML
We'll use CSS and HTML to position and style the data visualization. Instead of starting from scratch, let's leverage Bootstrap's existing stylesheets and methodology (in most of the areas) to get a decent looking website in a short amount of time.

Home
The page is composed from a simple home space that shows the user whhich are the companys first attributes

In the columns formation I used the Grid system, which I find a little bit more logical, though slower until its complete control.

Used

Index
This is the core of the page in which main part of the features are proved in a graphic that displays the sales in different ways along a period of time

Contact
In this secction the customer has the opportunity (even though fictive) to contact via email the Toys company., It contains a selector with diferent geoprafhical areas.

About
Here one can see a list with the products that the company provides, and sells to the customer.

Script.js
This file contains javascript language that combined with dc.js, crossfilter on base of d3.js and queue result in a list of graphical data that make easy the
comprehension of the data available in the .csv document.

Queue
A look at Queue.js and how you can load multiple files before running the rest of the code. A queue evaluates zero or more deferred asynchronous tasks:
you control how many tasks run at the same time. When all the tasks complete, or an error occurs, the queue passes the results to your await callback.

queue()
    .defer(d3.csv, "data/sales.csv")
    .await(makeGraphs);

function makeGraphs(error, SALESData) {
    var ndx = crossfilter(SALESData)
In the below raws all the function that define each graph with a ndx argumnet that filters the function through crossfilter tool.

The last raws call a Render of all function so that we can visulize them, without it that wouldn´t be working.

    amount_causes(ndx);
    show_gender_balance(ndx);
    state_status(ndx);
    country_pie(ndx);
    sales_month(ndx);
    scatter_price(ndx);
    show_Status_products(ndx);
    Tabletry(ndx);

    show_territory_donuts(ndx);




    dc.renderAll();
    
Selector
This is a selector that sort the products sold by order day with only a click, and the help of crossfilter in which I pased through the ORDERDATE collumn.

    function amount_causes(ndx) {
        var dim = ndx.dimension(dc.pluck("ORDERDATE"));
        var group = dim.group();

        dc.selectMenu("#dead-selector")
            .dimension(dim)
            .group(group);
            
          
The bar chart below shows the sales distribution through the months of an year. Made with the help of ndx.

When we use this dimension to create the chart, what we're doing is saying "for every item in our Sales data, return the value score as the x value for this particular dimension". Notice that dc has a function pluck to make this less verbose.

Groups take a dimension value as input and return an output value; they are the mechanism by which you get a y-value for a particular x-value.

Also contains a domain and range so that the computer can recognize and order the months of the year. There is a function that moves the names of the month on the x axis so that they can be recognized.

Bar chart
 function show_gender_balance(ndx) {
        var dim = ndx.dimension(dc.pluck("MONTH_ID"));
        var group = dim.group();

        dc.barChart("#chart-here")
            .width(500)
            .height(500)
            .margins({ top: 10, right: 50, bottom: 60, left: 80 })
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal().domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).range([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
            .xUnits(dc.units.ordinal)
            .elasticY(true)
            .xAxisLabel("COUNTRY")
            .renderHorizontalGridLines(true)
            .on('renderlet', function(chart) {
                chart.selectAll("g.x text")
                    .attr('dx', '-15')
                    .attr('transform', "rotate(-45)");
            })
            .addFilterHandler(function(filters, filter) { return [filter]; })
            .yAxis().ticks(20);
And also a bar chart that proved the liability that the company has in delievering the products to all word The chart is very similar with the other one, but insteed of plucking Months ,it does Status.

function show_Status_products(ndx) {
    var dim = ndx.dimension(dc.pluck("STATUS"));
    var group = dim.group();

    dc.barChart("#USA_clients")
        .width(250)
        .height(400)
        .margins({ top: 10, right: 10, bottom: 60, left: 40 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Status")
        .renderHorizontalGridLines(true)
        .on('renderlet', function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-15')
                .attr('transform', "rotate(-45)");
        })
        .addFilterHandler(function(filters, filter) { return [filter]; })
        .yAxis().ticks(10);


StackedChart
Proves in a statistical way the distrubution of each product saled by year. The main issue here was to define the reduce function for each type of prduct sold in each year: Like this: var name_dim = ndx.dimension(dc.pluck('YEAR_ID')); var SALESByPRODUCTLINEClassic = name_dim.group().reduceSum(function(d) { if (d.PRODUCTLINE === 'Classic Cars') { return +d.SALES; } else { return 0; }

And define it in the variable that defines the chart:

     var stackedChart = dc.barChart("#sales_per_state_and_situation");
        stackedChart
            .width(500)
            .height(500)
            .margins({ top: 25, right: 50, bottom: 60, left: 80 })
            .dimension(name_dim)
            .group(SALESByPRODUCTLINEClassic, "Classic Cars")
            .stack(SALESByPRODUCTLINEVintage, "Vintage Cars")
            .stack(SALESByPRODUCTLINEMotorcycles, "Motorcycles")
            .stack(SALESByPRODUCTLINETrucks, "Trucks and Buses")
            .stack(SALESByPRODUCTLINEPlanes, "Planes")
            .stack(SALESByPRODUCTLINEShips, "Ships")
            .stack(SALESByPRODUCTLINETrains, "Trains")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("PRODUCTLINE")
            .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));
        stackedChart.margins().right = 100;
        dc.renderAll();


    }

Time Chart
This time flow diagram shows in a lineChart the sales distribution through the year quartals, and that is because the quartals are an important time messure method in sales, and Marketing Is not the same to sell toys in Christmas when everybody whants one, or in Summer when everybody is outdoors and in holidays.

The peculiarity here resides in the scale the presents a max and a min date though which the lineChart flows, showing the Graph in a temporal way.


 var QTR_ID_dim = ndx.dimension(dc.pluck("QTR_ID"));
        var total_sales_flow = QTR_ID_dim.group();

        var minORDERDATE = QTR_ID_dim.bottom(1)[0].QTR_ID;
        var maxORDERDATE = QTR_ID_dim.top(1)[0].QTR_ID;

        dc.lineChart("#sales_month")
            .width(1000)
            .height(300)
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(QTR_ID_dim)
            .group(total_sales_flow)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minORDERDATE, maxORDERDATE]))
            .xAxisLabel("Flow-Sale")
            .yAxis().ticks(4);



    }


Donut Charts
Destinated to show parts forming a total, and here the total is the hole world where the company delieveres their products, in different locations and countries In the first donut the Contries are represented, there must be a radius value so that the Graph will be able to display in a circle and there is also a legend interactive and clicklable, that improved visibly the accesibility of the smallest portions in the donut.

   function country_pie(ndx) {
        var dim = ndx.dimension(dc.pluck("COUNTRY"));
        var group = dim.group();


        dc.pieChart('#country_pie')
            .width(500)
            .radius(200)
            .transitionDuration(1000)
            .dimension(dim)
            .group(group)
            .legend(dc.legend().x(420).y(0).itemHeight(9).gap(1));


    }


and also

A donut splitted in 4 main territories that proves that half of the products are delieverd to European Countries. Also has a reduced radio that add a touch of style to the graph

function show_territory_donuts(ndx) {
    var dim = ndx.dimension(dc.pluck("TERRITORY"));
    var group = dim.group();


    dc.pieChart('#donuts')
        .width(500)
        .radius(400)
        .innerRadius(50)
        .transitionDuration(1000)
        .dimension(dim)
        .group(group);


}


SCATER PLOT
Represents each sale in different locations al over the globe, and the value of the sale in dot, that presents a differnt color depending on the Sale status. It is represented in the x- axis by the quantiyordered and on the y y-axis by the total amont of the Sale. When hovering on each dot one can observe the Shop in the X City and the sale.

 function scatter_price(ndx) {



        var QUANTITYORDEREDDim = ndx.dimension(function(d) {
            return d.QUANTITYORDERED;
        });
        var STATUSColors = d3.scale.ordinal()
            .domain(["Shipped", "Cancelled", "In Process", "Disputed", "On Hold", "Resolved"])
            .range(["red", "green", "blue", "yellow", "violet", "brown"]);
        var minQUANTITYORDERED = QUANTITYORDEREDDim.bottom(1)[0].QUANTITYORDERED;
        var maxQUANTITYORDERED = QUANTITYORDEREDDim.top(1)[0].QUANTITYORDERED;
        var SALESDim = ndx.dimension(function(d) {
            return [d.QUANTITYORDERED, d.SALES, d];
        });
        var SALESGroup = SALESDim.group();
        var spend_chart = dc.scatterPlot("#price_along_dates");
        spend_chart
            .width(1068)
            .height(500)
            .x(d3.time.scale().domain([minQUANTITYORDERED, maxQUANTITYORDERED]))
            .brushOn(false)
            .symbolSize(8)
            .clipPadding(10)
            .yAxisLabel("Amount Spent")
            .title(function(d) {
                return d.key[2].CUSTOMERNAME + " quatity ordered: " + d.key[2].QUANTITYORDERED + " in store " + d.key[2].CITY;
            })
            .colorAccessor(function(d) {
                return d.key[2].STATUS;
            })
            .mouseZoomable(true)
            .colors(STATUSColors)
            .brushOn(false)
            .dimension(SALESDim)
            .group(SALESGroup);

        dc.renderAll();
    }

## Map.js
Contains the Google maps API with the clusters option. These work with a API key optained on their page Google maps plataform integrated on a special function provided by Google that conects tha map with the html page.

In the map are represented by clusters each shop where the Toys Company delievered their products.

These is a representative map, but not a dynamic one connected to the crossfilter, because that is beyond the lessons provided in the course and my skills, yet

Thank you very much, for all the help recived from staff, mentors, chat, etc,!!!!


## Testing & Debugging

#### Responsiveness Testing

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

The page is fully responsive thanks to the __ .useViewBoxResizing(true) __ property addede in all the charts. Also I create this responsivness with help of the bootrap cards and classes used in their grid system. The selector bar , navbar and footer I edited myself and created some media queries with css help as I learned in previous modules.


#### Code Testing
The HTML was validated using the HTML Validator.

Initially, 16 issues were found. Many of the errors related to using too many hyphens for commenting, so I fixed that.

At the time of deployment, only two issues remain. One advised me to use a h2-6 element in my sections. I chose not to change it because instead of headings, the images serve as headings.

Further, the test advised me to use a role with an anchor element in the navbar. However, adding the role of "link" was then judged unnecessary by the same validator. Thus, I chose to ignore it.

The CSS was validated using the CSS Validator. In total, 3 issues were found. All were corrected and none remain for the deployed version.

The JavaScript was tested using JSHint.com. Initially, 14 warnings were detected, many of them about misplaced semicolons. No errors remain at time of deployment.

User Story Testing
Here are the results for the user story tests:

Story 1
I know nothing about the series Game of Thrones, but want to find out some basic information.
Solution: Upon opening the website, the prominent 'see the stats' button leads the user to the dashboard. The tutorial pops up to explain what the dashboard is all about. The user clicks on the arrow to begin reading the information.
Story 2
I am a casual fan of the series, and want to learn more about it in a visually pleasing, easily digestible manner.
Solution: upon opening the website, the prominent 'see the stats' button leads the user to the dashboard. The tutorial gives an overview of what kind of information is available on the website. The casual fan can then click on on one of three buttons to skip to the section he or she is most interested in.
Story 3
I have not seen the series yet, but I am considering to watch it.
Solution: upon opening the website, the prominent 'see the stats' button leads the user to the dashboard. The tutorial gives an overview of what kind of information is available on the website. To someone who is considering to watch the series, they will want to start with general information. He or she will thus click on the downward pointing arrow button to begin reading.
Story 4
As a casual fan disappointed in the series finale, I want to find out if my sentiment is shared among critics and other fans.
Solution: upon opening the website, the prominent 'see the stats' button leads the user to the dashboard. The tutorial gives an overview of what kind of information is available on the website. As a fan disappointed in the finale, the IMDB ratings section is most relevant. He or she will thus click on the 'skip to stats on IMDB ratings' section.

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

 └── <> Code --> select Settings tab
                    └── Github Pages
                            └── Select None in Source --> Select master branch
                                                                    └──  Select Save
                                                                    
                                                                    Content


## The DOM 

Before displaying the charts I inspected the variables with chrome developer console, and checked if the variable pass through the crossfilter. and they are correlated or not.


## Bugs
Displaying data in the data-grid was a hard task for me. And also with shepherd.js I had some problems wirth the github pages that gave me error with the paths. 

## Inspiration & Acknowledgements
Carina_lead had a video about her project and that helped me when I was stucked in my page. At that time I had only the graphics done, but not a good display. And her call/video helped me.

Many thanks also to the Tutors,my mentor Guido Cecilio Bernal,and to the Code Institute Slack channel was invaluable!
