#   Second Milestone Project
                
                
## Short description
                
This short program that represents the second project for Front End developer diploma from Code Institute integrates javascript and d3 plus crossfilter and dc.js  as part of the Front end Development chapter
                        
used in conjunction with a csv. file. Its goal is to exctarct the data from the csv database and to design with it statistical functions that ease the final lecture of the data and it's interpretation
                        
In this case the data belongs to an American Toys company that with the purpose of of expansion has presented an extract of thei sales with the purpose of understanding the market trends.
                        
In addition I have added a small basic page as a preseentation of the listed products in the graphs in which I have used some small javascript functions.
                        
                        
## Project##
                        
                
                
I tryed to be at the same time as original as possible. Create texts and images produced by so many years of looking this cartoons and crate a page  inspired by the fun and pleasure that I feal when I watch them.  

                
                
                
## Project implementation
                
In the constuction of the project I have used the **libraries** donated by the Code institute, 
                
 + d3.js, 
                
 + crossfilter,
                
 + dc.js, 
                
 + queue.js 
 
 +font-awesome, and Goolgle fonts (not needed to see the graphs but to style them)

    

 
 
                

That were used for the graphs building. Also I have used jquery.js library that facilitates and is the most used js library, for different
                

functions in the page.  Also I tryed to use bootstap exctracts, that have been completating the page and"Font awesome" and different types of special Fonts 
                

imported from Google Fonts.
                

Finally I have used the Google Maps API and added to it the clients adresses so that  the user can relate and see where each project has been delivered.
                
                
                

## Developer environment
                
                

As for the external use of the program, the user should download  first the [Toys shop data base](https://www.kaggle.com/kyanyoga/sample-sales-data/version/1).csv file.
                

and upload then the above mentionated libraries, after that ,load the bootstap file and the dc.css as well as jquery so that the program should deploy as expected.
                
                
                

## Media ##
                

All the images used in the project are taken from Google images page and there are free of copyright.
                
                
                

## Colaborations and help received ##
                

The mentors as well as the tutors helped me in this project with the peces where I got stuck, and their help never the less made me understand better the 
                
programming way of thinking and troubleshouting a problem. Many thanks to all!!!
                

## Features ##

## HTML ##

We'll use CSS and HTML to position and style the data visualization. Instead of starting from scratch, 
let's leverage Bootstrap's existing stylesheets and methodology (in most of the areas) to get a decent looking website in a short amount of time.

## Home ##   
The page is composed from a simple home space that shows the user whhich are the companys first attributes

In the columns formation I used the Grid system, which I find a little bit more logical, though slower until its complete control.

Used 
## Index ##   
This is the core of the page in which main part of the features are proved in a graphic  that displays the sales in different ways along a period of time
## Contact ## 
In this secction the customer has the opportunity (even though fictive) to contact via email the Toys company., It contains a selector with diferent geoprafhical areas.
## About ## 
Here one can see a list with the products that the company provides, and sells to the customer.

## Script.js ##

This file contains javascript language that combined with dc.js, crossfilter on base of d3.js and queue  result in a list of graphical data that make easy the      
comprehension of the data available in the .csv document.



### Queue ###

A look at Queue.js and how you can load multiple files before running the rest of the code.  A queue evaluates zero or more deferred asynchronous tasks:  
you control how many tasks run at the same time. When all the tasks complete, or an error occurs, the queue passes the results to your await callback.

```
queue()
    .defer(d3.csv, "data/sales.csv")
    .await(makeGraphs);

function makeGraphs(error, SALESData) {
    var ndx = crossfilter(SALESData)
```




In the below raws all the function that define each graph with a **ndx**  argumnet that filters the function through crossfilter tool.

The last raws call a Render of all function so that we can visulize them, without it that wouldn´t be working.

```
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
    
```

### Selector ###


This is a selector that sort the products sold by order day with only a click, and the help of crossfilter in which I pased through the ORDERDATE collumn.





```
    function amount_causes(ndx) {
        var dim = ndx.dimension(dc.pluck("ORDERDATE"));
        var group = dim.group();

        dc.selectMenu("#dead-selector")
            .dimension(dim)
            .group(group);
            
          
```

The bar chart below shows the sales distribution through  the months of an year. Made with the help of ndx.

When we use this dimension to create the chart, what we're doing is saying "for every item in our Sales data, return the value score as the x value for this particular dimension". 
Notice that dc has a function **pluck** to make this less verbose.

Groups take a dimension value as input and return an output value; they are the mechanism by which you get a y-value for a particular x-value.

Also contains a domain and range so that the computer can recognize and order the months of the year.
There is a function that moves the names of the month on the x axis so that they can be recognized.


### Bar chart ###



```
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
```

And also a bar chart that proved the liability that the company has in delievering the products to all word
The chart is very similar with the other one, but insteed of plucking Months ,it does Status.

```
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


```

### StackedChart ###

Proves in a statistical way  the distrubution of each product saled by year.
The main issue here was to define the reduce function for each type of prduct sold in each year:
Like this: 
            ``` var name_dim = ndx.dimension(dc.pluck('YEAR_ID'));
        var SALESByPRODUCTLINEClassic = name_dim.group().reduceSum(function(d) {
            if (d.PRODUCTLINE === 'Classic Cars') {
                return +d.SALES;
            }
            else {
                return 0;
            }
            ```
            
And define it in the variable  that defines the chart:            
                
        

```
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

```

### Time Chart ###

This time flow diagram shows in a lineChart the sales distribution through the year quartals, and that is because the quartals are an important time messure method in sales, and Marketing
Is not the same to sell toys in Christmas when everybody whants one, or in Summer when everybody is outdoors and in holidays.

The peculiarity here resides in the scale the presents a max and a min date though which the lineChart flows, showing the Graph in a temporal way.




```

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


```


### Donut Charts ### 


Destinated to show parts forming a total, and here the total is the hole world where the company delieveres their products, in different locations and countries
In the first donut the Contries are represented, there must be a radius value so that the Graph will be able to display in a circle and there is also a 
legend interactive and clicklable, that improved visibly the accesibility of the smallest portions in the donut.

```
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


```
and also

A donut splitted in 4 main territories that proves that half of the products are delieverd to European Countries.
Also has a reduced radio that add a touch of style to the graph

```
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


```

### SCATER PLOT ###

Represents each sale in different locations al over the globe, and the value of the sale in dot, that presents a differnt color depending on the Sale status. It is represented 
in the x- axis by the quantiyordered and on the y y-axis by the total amont of the Sale. When hovering on each dot one can observe the Shop in the X City and the sale.



```
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

```

## Map.js ##


Contains the Google maps API with the clusters option. These work with a API key optained on their page [Google maps plataform](https://console.cloud.google.com/google/maps-apis/overview) integrated on a special function
provided by Google that conects tha map with the html page.

In the map are represented by clusters each shop where the Toys Company delievered their products.

These is a representative map, but not a dynamic one connected to the crossfilter, because that is beyond the lessons provided in the course and my skills, yet
    
    
## Thank you very much, for all the help recived from staff, mentors, chat, etc,!!!! 

                
                
                
                
 
                
                