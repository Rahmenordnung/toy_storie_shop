var dealsizeChart = dc.rowChart("#dealsize"),
		 territoryChart = dc.rowChart("#TERRITORY"),
		 orderdataCount = dc.dataCount(".dc-data-count"),
		 orderdataTable = dc.dataTable(".dc-data-table");



		d3.csv("/data/sales.csv", function(err, data) {
			if (err) throw err;
			
			
			
			data.forEach(function(d) {
				d.ORDERDATE = new Date (d.ORDERDATE);
			});
			
			var ndx = crossfilter(data);
			var all = ndx.groupAll();


			var dealsizeDim = ndx.dimension(function(d) { return d["DEAL-SIZE"]; });

			var territoryDim = ndx.dimension(function(d) { return d["TERRITORY"]; });
			
			var dateDim = ndx.dimension(function(d) { return d.ORDERDATE });

			var dealsizeGroup = dealsizeDim.group();

			var territoryGroup = territoryDim.group();
			
			

			dealsizeChart
				.dimension(dealsizeDim)
				.group(dealsizeGroup)
				.elasticX(true);


			territoryChart
				.dimension(territoryDim)
				.group(territoryGroup)
				.elasticX(true);
				
			orderdataCount	
			.dimension(ndx)
			.group(all);
			
			orderdataTable
			.dimension(dateDim)
			// Data table does not use crossfilter group but rather a closure
        // as a grouping function
			.group(function (d) {
            var format = d3.format('02d');
            return d.ORDERDATE.getMonth() + '/' + format((d.ORDERDATE.getDay() + d.ORDERDATE.getFullYear()+1));
        })
			.columns ([
				"ORDERDATE" ,
				"PRODUCTLINE" ,
				"CITY",
				"COUNTRY"
				]);
				
				
				


			dc.renderAll();



		});
		data-step="7" data-intro="Here is a table with all the data available , you can inspect it or pas the next or preview page. Enjoy!"

		data-step="6" data-intro="On this map you can find the exact address of each of all customers, just hover the clusters and click on them"

		data-step="5" data-intro="Here you will go back to the beggining of the page"

		data-step="4" data-intro="Here you make all the selected data disappear and you will be able to start back again from the beginning"

		data-step="3" data-intro="This button toggle through hiding and showing the charts. In this way you can choose which of them you want to be looking at"

		data-step="2" data-intro="If you would like to find <b>a customer</b>, <b>a date</b> when or <b>a town</b> where our productus have been saled and delievered, you can start by clicking the selector bar highlighted."

		data-step="1" data-position="bottom" data-intro="Welcome to our <b>Toy Story shop!!!</b> Here you can select charts grouped by common themes. We recomend you to start with the <b>Select bar</b>"
		
	