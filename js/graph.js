queue()
    .defer(d3.csv, "csv file/sales.csv")
    .await(makeGraphs);

function makeGraphs(error, SALESData) {
    var ndx = crossfilter(SALESData)
        CITY(ndx);
        customer_business(ndx);
        // show_Status_products(ndx);
        products_per_status_dealsize(ndx);
        amount_causes(ndx);
        show_monthy_sales_distribution(ndx);
        products_per_year(ndx);
        country_pie(ndx);
        sales_month(ndx);
        scatter_price(ndx);
        show_territory_donuts(ndx);
        show_productline(ndx);
        
         // show_Status_products(ndx);
    dc.renderAll();
    
//selectors//
//city selector//
function CITY(ndx) {
        var dim = ndx.dimension(dc.pluck("CITY"));
        var group = dim.group();

        dc.selectMenu("#city")
            .dimension(dim)
            .group(group);
    }
//business name selector//
function customer_business(ndx) {
        var dim = ndx.dimension(dc.pluck("CUSTOMERNAME"));
        var group = dim.group();

        dc.selectMenu("#customer_selector")
            .dimension(dim)
            .group(group);
    }    
//orderdate selector//
function amount_causes(ndx) {
        var dim = ndx.dimension(dc.pluck("ORDERDATE"));
        var group = dim.group();

        dc.selectMenu("#dead-selector")
            .dimension(dim)
            .group(group);
    }

//graphics//
//average monthly sales of all all products(bar chart)//
function show_monthy_sales_distribution(ndx) {
    var dim = ndx.dimension(dc.pluck("MONTH_ID"));
    var group = dim.group();

    dc.barChart("#chart-here")
        .width(600)
        .height(500)
        .margins({ top: 10, right: 10, bottom: 60, left: 35 })
        .dimension(dim)
        .group(group)
        .useViewBoxResizing(true)
        .transitionDuration(500)
        .x(d3.scale.ordinal().domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).range([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Month (numerical)")
        .renderHorizontalGridLines(true)
        .on('renderlet', function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-15')
                .attr('transform', "rotate(-45)");
            })
        .addFilterHandler(function(filters, filter) { return [filter]; })
        .yAxis().ticks(20);
    }

//distribution of the total amont of sales per each product available(bar chart)//
    function show_productline(ndx) {
        var dim = ndx.dimension(dc.pluck('PRODUCTLINE'));
        var group = dim.group();

        
        dc.barChart("#products")
            .width(600)
            .height(500)
            .margins({top: 10, right: 50, bottom: 60, left: 50})
            .dimension(dim)
            .group(group)
            .useViewBoxResizing(true)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .elasticY(true)
            .xAxisLabel("Products")
            .yAxis().ticks(20);
    }
//time distribution of the sales per trimester also known as quartals(time line chart)//    
function sales_month(ndx) {
    var QTR_ID_dim = ndx.dimension(dc.pluck("QTR_ID"));
    var total_sales_flow = QTR_ID_dim.group();
    var minORDERDATE = QTR_ID_dim.bottom(1)[0].QTR_ID;
    var maxORDERDATE = QTR_ID_dim.top(1)[0].QTR_ID;

    dc.lineChart("#sales_quartal")
        .width(600)
        .height(500)
        .useViewBoxResizing(true)
        .margins({ top: 10, right: 20, bottom: 60, left: 50 })
        .dimension(QTR_ID_dim)
        .group(total_sales_flow)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minORDERDATE, maxORDERDATE]))
        .xAxisLabel("Flow-Sale")
        .yAxis().ticks(4);
    }

//distribution of the prducts per sale size and status of the sale(stacked bar chart)//
function products_per_status_dealsize(ndx) {

    var name_dim = ndx.dimension(dc.pluck('DEALSIZE'));
    var SALESBySTATUSCancelled = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'Cancelled') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESBySTATUSDisputed = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'Disputed') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESBySTATUSIn_Process = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'In Process') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESBySTATUSOn_Hold = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'On Hold') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESBySTATUSResolved = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'Resolved') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESBySTATUSShipped = name_dim.group().reduceSum(function(d) {
        if (d.STATUS === 'Shipped') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var stackedChart = dc.barChart("#sales_per_STATUS_and_deal_size");
    stackedChart
        .width(600)
        .height(500)
        .margins({ top: 25, right: 20, bottom: 60, left: 90 })
        .dimension(name_dim)
        .group(SALESBySTATUSShipped, "Shipped")
        .stack(SALESBySTATUSResolved, "Resolved")
        .stack(SALESBySTATUSOn_Hold, "On Hold")
        .stack(SALESBySTATUSIn_Process, "In Process")
        .stack(SALESBySTATUSDisputed, "Disputed")
        .stack(SALESBySTATUSCancelled, "Cancelled")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .useViewBoxResizing(true)
        .xAxisLabel("DEALSIZE")
        .legend(dc.legend().x(525).y(0).itemHeight(15).gap(5));
    stackedChart.margins().right = 100;
    
}
//distribution of all sales per year, stacked chart with all products stacked one above the other(stacked bar chart)//

function products_per_year(ndx) {

    var name_dim = ndx.dimension(dc.pluck('YEAR_ID'));
    var SALESByPRODUCTLINEClassic = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Classic Cars') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINEVintage = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Vintage Cars') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINEMotorcycles = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Motorcycles') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINETrucks = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Trucks and Buses') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINEPlanes = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Planes') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINEShips = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Ships') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var SALESByPRODUCTLINETrains = name_dim.group().reduceSum(function(d) {
        if (d.PRODUCTLINE === 'Trains') {
            return +d.SALES;
        }
        else {
            return 0;
        }
    });
    var stackedChart = dc.barChart("#sales_per_year_products");
    stackedChart
        .width(600)
        .height(500)
        .margins({ top: 25, right: 60, bottom: 60, left: 60 })
        .dimension(name_dim)
        .group(SALESByPRODUCTLINEClassic, "Classic Cars")
        .stack(SALESByPRODUCTLINEVintage, "Vintage Cars")
        .stack(SALESByPRODUCTLINEMotorcycles, "Motorcycles")
        .stack(SALESByPRODUCTLINETrucks, "Trucks and Buses")
        .stack(SALESByPRODUCTLINEPlanes, "Planes")
        .stack(SALESByPRODUCTLINEShips, "Ships")
        .stack(SALESByPRODUCTLINETrains, "Trains")
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .legend(dc.legend().x(500).y(0).itemHeight(15).gap(5));
        
    stackedChart.margins().right = 100;
}

//sales punctual distribution per quantity of the sale and the amonut spent(scattered plot chart)//
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
    var spend_chart = dc.scatterPlot("#QUANTITYORDERED_chart");
    spend_chart
        .width(600)
        .height(500)
        .x(d3.time.scale().domain([minQUANTITYORDERED, maxQUANTITYORDERED]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Amount Spent")
        .xAxisLabel("Quantity ordered")
        .margins({ top: 25, right: 60, bottom: 60, left: 60 })
        .title(function(d) {
            return d.key[2].CUSTOMERNAME + " quatity ordered: " + d.key[2].QUANTITYORDERED + " in store " + d.key[2].CITY;
        })
        .colorAccessor(function(d) {
            return d.key[2].STATUS;
        })
        .mouseZoomable(false)
        .colors(STATUSColors)
        .brushOn(false)
        .dimension(SALESDim)
        .useViewBoxResizing(true)
        .group(SALESGroup);
}

//distribution of the prducts per world regions of delivery(donut diagramm)//
function show_territory_donuts(ndx) {
    var dim = ndx.dimension(dc.pluck("TERRITORY"));
    var group = dim.group();
    dc.pieChart('#donuts')
        .width(375)
        .radius(400)
        .innerRadius(50)
        .transitionDuration(1000)
        .dimension(dim)
        .group(group)
        .useViewBoxResizing(true)
        .legend(dc.legend().x(320).y(0).itemHeight(9).gap(1));
}

//distribution of the prducts per country of delivery(circle diagramm)//
 function country_pie(ndx) {
        var dim = ndx.dimension(dc.pluck("COUNTRY"));
        var group = dim.group();
        dc.pieChart('#country_pie')
            .width(425)
            .radius(200)
            .transitionDuration(1000)
            .dimension(dim)
            .group(group)
            .useViewBoxResizing(true)
            .legend(dc.legend().x(370).y(0).itemHeight(9).gap(1));
}


		
		

}