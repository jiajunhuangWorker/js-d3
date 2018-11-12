var ww=500,wh=500;
		var dataSet=[500,200,300,50,400];
		var svg=d3.select("body")
				  .append("svg")
				  .attr("width",ww)
				  .attr("height",wh)
				  .style("background","red")
//		for(var i=0;i<dataSet.length;i++){
//			svg.append("rect");
//		}
		var rectWidth=30;//每个格子的所占比例
		svg.selectAll("rect")
			.data(dataSet)
			.enter()
			.append("rect")
			.attr("x",0)
			.attr("y",function(d,i){
				return i*rectWidth;
			})
			.attr("width",function(d,i){
				return d;	
			})
			.attr("height",rectWidth-5)
			.attr("fill","yellow")