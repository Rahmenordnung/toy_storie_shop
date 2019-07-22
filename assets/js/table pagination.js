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
		
		
	