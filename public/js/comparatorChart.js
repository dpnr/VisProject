/**
 * Created by Neah_New on 27-10-2016.
 */
//Constructor for listChart
var test =[];
var value1=" ",value2=" ";

function comparatorChart(listData) {
    var self = this;
    self.listData = listData;
    listInfo = self.listData;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
comparatorChart.prototype.init = function(){
	

			
var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([300,0]);
var yAxis = d3.axisLeft();


//setting up the scales
yAxis.scale(yScale);
	
    var axis=d3.select("#yAxis1")
	    .transition().duration(1000)
        .attr("transform", "translate(" + 40*1.5 + "," + 60*1.5 + ")")	
		  .call(yAxis);
	  
		  
   var xScale = d3.scaleBand()
   .domain(["Teaching","International","Research","Citations","Income"])
   .range([0, 240]).padding(.1);
	var xAxis = d3.axisBottom();
	xAxis.scale(xScale);
	var axis=d3.select("#xAxis1")
			.transition().duration(1000)
			.attr("transform",  "translate(" + 25 + "," + 440 + ")")	
			.call(xAxis)
			.style("fill","black")
			.selectAll("text")
			.style("text-anchor","middle")
			.attr("dx",".15em")
			.attr("dy","-.8em")
			.attr("transform","rotate(-45)");
   
	d3.select("#xAxis1").selectAll("path").remove();
	d3.select("#xAxis1").selectAll("line").remove();
	
	
    
}

comparatorChart.prototype.update = function(i,data,count){
	comparatorChart.prototype.init();
	
	
	var selected=new Array;
	selected.push(data[i]);
	
	if(count==0)
	{
		d3.select("#name1").selectAll("*").remove();
		//just the name
	var state_text =  d3.select("#name1")
						.attr("transform", "translate(" + 10 + "," + 50 + ")")
						.selectAll(".team_label1")
						.data(selected);
		
		
		state_text.exit().remove();
		state_enter=state_text.enter().append("text");
		state_text=state_text.merge(state_enter);
		
		
		state_text.text(function (d) {return d.SCHOOL;})
        .classed("team_label1", true)
		.attr("id","text1");
		
		//----------TEACHING SCORE
		var internScore=d3.select("#leftside").attr("transform", "translate(" + 40*1.5 + "," + -29.5 + ")")
		internScore=internScore.selectAll(".team_label1_teach").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",0)
		.attr("y",function(d,i){return 140*3-3*d.TEACHING})
		.attr("class","TEACHING")
		.attr("id","TEACHING1")
		.attr("height",function(d,i){return 3*d.TEACHING})
		.style("fill","black")
		.classed("team_label1_teach",true);
		
		//---------INTERNATIONAL
		var internScore=d3.select("#leftside").selectAll(".team_label1_intern").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",20*2)
		.attr("y",function(d,i){return 140*3- 3*d.INTERNATIONAL})
		.attr("class","INTERNATIONAL")
		.attr("id","INTERNATIONAL1")
		.attr("height",function(d,i){return 3*d.INTERNATIONAL})
		.style("fill","black")
		.classed("team_label1_intern",true);
		//---------RESEARCH
		var internScore=d3.select("#leftside").selectAll(".team_label1_research").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",40*2)
		.attr("y",function(d,i){return 140*3- 3*d.RESEARCH})
		.attr("class","RESEARCH")
		.attr("id","RESEARCH1")
		.attr("height",function(d,i){return 3*d.RESEARCH})
		.style("fill","black")
		.classed("team_label1_research",true);
		//---------CITATIONS
		var internScore=d3.select("#leftside").selectAll(".team_label1_citations").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",60*2)
		.attr("y",function(d,i){return 140*3- 3*d.CITATIONS})
		.attr("class","CITATIONS")
		.attr("id","CITATIONS1")
		.attr("height",function(d,i){return 3*d.CITATIONS})
		.style("fill","black")
		.classed("team_label1_citations",true);
		//---------INCOME
		var internScore=d3.select("#leftside").selectAll(".team_label1_income").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",80*2)
		.attr("y",function(d,i){return 140*3- 3*d.INCOME})
		.attr("class","INCOME")
		.attr("id","INCOME1")
		.attr("height",function(d,i){return 3*d.INCOME})
		.style("fill","black")
		.classed("team_label1_income",true);
		
	}	
	else if(count==1)
	{
		d3.select("#name2").selectAll("*").remove();
		//call axes
		var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([300,0]);
		
var yAxis = d3.axisLeft();

yAxis.scale(yScale);
			  
   var xScale =   d3.scaleBand()
					.domain(["Teaching","International","Research","Citations","Income"])
					.range([0, 240]).padding(.1);
	var xAxis = d3.axisBottom();
	
	xAxis.scale(xScale);
		
		var axis2=d3.select("#xAxis2")
	                .transition().duration(1000)
                    .attr("transform", "translate(" + 25 + "," + 440 + ")")	
		            .call(xAxis)
		            .style("fill","black")
		            .selectAll("text")
		            .style("text-anchor","middle")
		            .attr("dx",".15em")
		            .attr("dy","-.8em")
		            .attr("transform","rotate(-45)");
		  
   
	d3.select("#xAxis2").selectAll("path").remove();
	d3.select("#xAxis2").selectAll("line").remove();
	
	var axis=d3.select("#yAxis2")
	    .transition().duration(1000)
        .attr("transform", "translate(" + 40*1.5 + "," + 60*1.5 + ")")	
		  .call(yAxis);	
	
		
		//just the name	
		
		var state_text = d3.select("#name2").attr("transform", "translate(" + 10 + "," + 50 + ")").selectAll(".team_label2")
        .data(selected);
	
		state_text.exit().remove();
		state_enter=state_text
        .enter().append("text");
	state_text=state_text.merge(state_enter);
		state_text
        .text(function (d) {return d.SCHOOL;})
        .classed("team_label2", true)
		.attr("id","text2");
		
		
		//one vis design
		//----------TEACHING SCORE
		var internScore=d3.select("#rightside").attr("transform", "translate(" + 40*1.5 + "," + -29.5 + ")");
		internScore=internScore.selectAll(".team_label2_teach").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",0)
		.attr("y",function(d,i){return 140*3-3*d.TEACHING})
		.attr("class","TEACHING")
		.attr("id","TEACHING2")
		.attr("height",function(d,i){return 3*d.TEACHING})
		.style("fill","black")
		.classed("team_label2_teach",true);
		//---------INTERNATIONAL
		var internScore=d3.select("#rightside").selectAll(".team_label2_intern").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",20*2)
		.attr("y",function(d,i){return 140*3- 3*d.INTERNATIONAL})
		.attr("class","INTERNATIONAL")
		.attr("id","INTERNATIONAL2")
		.attr("height",function(d,i){return 3*d.INTERNATIONAL})
		.style("fill","black")
		.classed("team_label2_intern",true);
		//---------RESEARCH
		var internScore=d3.select("#rightside").selectAll(".team_label2_research").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",40*2)
		.attr("y",function(d,i){return 140*3- 3*d.RESEARCH})
		.attr("class","RESEARCH")
		.attr("id","RESEARCH2")
		.attr("height",function(d,i){return 3*d.RESEARCH})
		.style("fill","black")
		.classed("team_label2_research",true);
		//---------CITATIONS
		var internScore=d3.select("#rightside").selectAll(".team_label2_citations").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",60*2)
		.attr("y",function(d,i){return 140*3- 3*d.CITATIONS})
		.attr("class","CITATIONS")
		.attr("id","CITATIONS2")
		.attr("height",function(d,i){return 3*d.CITATIONS})
		.style("fill","black")
		.classed("team_label2_citations",true);
		//---------INCOME
		var internScore=d3.select("#rightside").selectAll(".team_label2_income").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5*2)
		.attr("x",80*2)
		.attr("y",function(d,i){return 140*3- 3*d.INCOME})
		.attr("class","INCOME")
		.attr("id","INCOME2")
		.attr("height",function(d,i){return 3*d.INCOME})
		.style("fill","black")
		.classed("team_label2_income",true);
		
		// highlight and this.dehighlight
		
		
}}

		comparatorChart.prototype.highlight = function(value,magnitude){
			
			d3.selectAll("."+value).classed("hover1",true);
	
			test = [];
			if(checkedcount==2)
			{
		
			value1 = d3.select("#"+value+"1")["_groups"][0][0].height.animVal.valueAsString;
			value2 = d3.select("#"+value+"2")["_groups"][0][0].height.animVal.valueAsString;
			d3.select("#image").selectAll("*").remove();
			d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/comparison.png");
			}
			else if(checkedcount==1)
			{
				if(leftslot==0)
				{
					value1 = 0;
					value2 = d3.select("#"+value+"2")["_groups"][0][0].height.animVal.valueAsString;
				}
				else
				{
					value1 = d3.select("#"+value+"1")["_groups"][0][0].height.animVal.valueAsString;
					value2 = 0;
					
				}
					
			}
			test.push(value);
			
			//display the values
var state_text = d3.select("#schooltext").attr("transform", "translate(" + 90 + "," + 70 + ")").selectAll(".team_labelh").data(test);
		
		
		state_text.exit().remove();
		state_enter=state_text
					.enter().append("text");
		state_text=state_text.merge(state_enter);
		state_text
			.text(value)
			.classed("team_labelh", true);	
				//just the name
	test = [];			
	test.push(value1);
	var state_text = d3.select("#schooltext1").attr("transform", "translate(" + 10 + "," + 100 + ")").selectAll(".team_labelh1").data(test);
		
		
		state_text.exit().remove();
    state_enter=state_text
        .enter().append("text");
	state_text=state_text.merge(state_enter);
		state_text
        .text(function(d,i){return "< "+Math.round(test/3,1)})
        .classed("team_labelh1", true);
		
		test = [];
		test.push(value2);
	var state_text = d3.select("#schooltext2").attr("transform", "translate(" + 235 + "," + 100 + ")").selectAll(".team_labelh2").data(test);
		
		
		state_text.exit().remove();
    state_enter=state_text
        .enter().append("text");
	state_text=state_text.merge(state_enter);
		state_text
        .text(function(d,i){return Math.round(test/3,1)+" >"})
        .classed("team_labelh2", true);

		
		}
		comparatorChart.prototype.dehighlight = function(value){
			
			d3.selectAll("."+value).classed("hover1",false);
			
		}
		
		comparatorChart.prototype.history1 = function(college1,college2,data,value)
		{
			
			//yAxis
			
			var yScale = d3.scaleLinear()
        .domain([0,100])
        .range([150,0]);
		
		
		var yAxis = d3.axisLeft();

			yAxis.scale(yScale);
	
		var axis=d3.select("#yAxish")
	    .transition().duration(20)
        .attr("transform", "translate(" + 40 + "," + 270 + ")")	
		  .call(yAxis);
			
			//xaxis
				var xScale1 = d3.scaleBand()
				.domain([2011,2012,2013,2014,2015,2016])
				.range([0,250]);
		
		
var xAxis1 = d3.axisBottom();

xAxis1.scale(xScale1);
	
    var axis1=d3.select("#xAxish")
	    .transition().duration(20)
        .attr("transform", "translate(" + 40 + "," + 422 + ")")	
		  .call(xAxis1)
		  .style("fill","black")
		  .selectAll("text")
		  .style("text-anchor","middle")
		  .attr("dx","-1.5em")
		  .attr("dy","0.6em")
		  .attr("transform","rotate(-45)");
		//d3.select("#xAxish").selectAll("path").remove();
		//d3.select("#xAxish").selectAll("line").remove();  
		 
 
		 // drawing lines
		  var aLineGenerator = d3.line()
        .x(function (d, i) {
            return (42*i);
        })
        .y(function (d) {
            return (60-d[value]);
        });
		test=[];
		test.push(value);
		//display title for line graph
		var state_text = d3.select("#axishead").attr("transform", "translate(" + 50 + "," + 200 + ")").selectAll(".axesh").data(test);
		
		
		state_text.exit().remove();
		state_enter=state_text.enter().append("text");
	
	
	state_text=state_text.merge(state_enter);
		state_text
        .text(value+" TREND ")
        .classed("axesh", true);	
			
			
			
			
		if(checkedcount==2)
		{
			data1=data.filter(function(d,i){if(d.SCHOOL==college1)return d});
			data2=data.filter(function(d,i){if(d.SCHOOL==college2)return d});
			
			d3.select("#lines")
			.attr("transform", "translate(" + 60 + "," + 330 + ")")	;
			d3.select("#line1")
            .transition()		 // change the line
            .duration(750)
            .attr("d", aLineGenerator(data1))
			.style("stroke","black")
			.style("fill","none");
			
			
			d3.select("#line2")
            .transition()		 // change the line
            .duration(750)
            .attr("d", aLineGenerator(data2))
			.style("stroke","black")
			.style("fill","none");
		}
		else 
		{
			if(leftslot==0)
			{
				data2=data.filter(function(d,i){if(d.SCHOOL==college2)return d});
				d3.select("#lines")
					.attr("transform", "translate(" + 60 + "," + 330 + ")")	;
				d3.select("#line2")
				.transition()		 // change the line
				.duration(750)
				.attr("d", aLineGenerator(data2))
				.style("stroke","black")
				.style("fill","none");
			}
			else
			{
				data1=data.filter(function(d,i){if(d.SCHOOL==college1)return d});
				d3.select("#lines")
					.attr("transform", "translate(" + 60 + "," + 330 + ")")	;
					d3.select("#line1")
					.transition()		 // change the line
					.duration(750)
					.attr("d", aLineGenerator(data1))
					.style("stroke","black")
					.style("fill","none");
				
			}
			
		}
			
		}
	

comparatorChart.prototype.clearleft = function(){
d3.select('#text1').remove();
d3.select("#xAxis1").selectAll("*").remove();
d3.select("#yAxis1").selectAll("*").remove();
d3.select("#leftside").selectAll("*").remove();
d3.select("#left").selectAll("text").remove();
d3.select("#schooltext").selectAll("*").remove();
d3.select("#par_intro").selectAll("*").remove();
d3.select("#schooltext1").selectAll("*").remove();
d3.select("#schooltext2").selectAll("*").remove();
d3.select("#xAxish").selectAll("*").remove();
d3.select("#yAxish").selectAll("*").remove();
d3.select("#axishead").selectAll("*").remove();
d3.select("#lines").selectAll("path").remove();
d3.select("#lines").append("path").attr("id","line1");
d3.select("#lines").append("path").attr("id","line2");





	}
	
	comparatorChart.prototype.clearright = function(){
	
d3.select("#xAxis2").selectAll("*").remove();
d3.select("#yAxis2").selectAll("*").remove();
d3.select("#rightside").selectAll("*").remove();
d3.select("#right").selectAll("text").remove();
d3.selectAll("#displaytext").remove();
d3.select("#axishead").selectAll("*").remove();
//d3.select("foreignObject").selectAll("*").remove();
d3.select("#schooltext").selectAll("*").remove();
d3.select("#par_intro").selectAll("*").remove();
d3.select("#schooltext1").selectAll("*").remove();
d3.select("#schooltext2").selectAll("*").remove();
d3.select("#xAxish").selectAll("*").remove();
d3.select("#yAxish").selectAll("*").remove();
d3.select("#lines").selectAll("path").remove();
d3.select("#lines").append("path").attr("id","line1");
d3.select("#lines").append("path").attr("id","line2");
//d3.select("foreignObject").append("span").style("font-size","10pt").style("line-height","6pt").style("opacity",1);

	
	}
	
	
	comparatorChart.prototype.schoolDetail = function(side,schoolname,data)
	
	{
		d3.select("#image").selectAll("*").remove();
		
		if(side=="name1")
			comparatorChart.prototype.clearleft();
		else if(side=="name2")
		{
			comparatorChart.prototype.clearright();
		}
		//side here we get is name1 or name2 so that we can append the title of the college, logo and the details over there 
		schooldata = data.filter(function(d,i){if(d.SCHOOL==schoolname) return d})
	/* 	d3.select("#comparator").append("img").attr("src","data/Logos/Auburn University.png").attr("alt","image")
					.style("width","100px")
					.style("height","100px")
					.attr("x",10)
					.attr("y",200); */
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").attr("id","displaytext").append("text").text(schooldata[0].SCHOOL).attr("class","dis_univ");
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 120 + ")").attr("id","displaytext").append("text").text(schooldata[0].CITY+", "+schooldata[0].STATE).attr("class","dis_add");
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 90 + ")").attr("id","displaytext").append("text").text("World Rank: "+schooldata[0].WORLD_RANK).classed("dis_rank",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 150 + ")").attr("id","displaytext").append("a").attr("xlink:href", schooldata[0].LINK).append("text").text("Click here for course website").attr("class","dis_link");
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 180 + ")").attr("id","displaytext").append("text").text("Programs: ").classed("dis_imp",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 165 + ")").attr("id","displaytext").append("text").text( schooldata[0].PROGRAM).call(wrap).classed("dis_notimp",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 340 + ")").attr("id","displaytext").append("text").text("Prerequisites: ").classed("dis_imp",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 325 + ")").attr("id","displaytext").append("text").text(schooldata[0].PREREQ).call(wrap).classed("dis_notimp",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 400 + ")").attr("id","displaytext").append("text").text("Number of Students: "+schooldata[0].NUM_STUDENTS).classed("dis_imp",true);
		d3.select("#"+side).attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 430 + ")").attr("id","displaytext").append("text").text("Student Staff Ratio: "+schooldata[0].STUDENT_STAFF_RATIO).classed("dis_imp",true);
		
		d3.select("#image").append("img").attr("id","oneimage").attr("src","data/Logos/"+schoolname+".png").attr("alt","No Image").attr("onerror","this.src='data/Logos/graddefault.png'");
		

	}
	
	comparatorChart.prototype.intro = function()
	
	{
		//d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/feature.png").attr("alt","features");
		//side here we give the introduction about the functionality
		comparatorChart.prototype.clearleft();
		comparatorChart.prototype.clearright();
		d3.select("#name1").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").append("text")
		.text("EXPLORE SCHOOLS").attr("class","intro_head");
		d3.select("#name1").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").append("text")
		.text("All you need to do is to check the box under the ADD column from the list to explore about the school. A marker on the Map is highlighted which represents the location of the school that has been selected.").call(wrapmain).attr("class","intro_body");
		d3.select("#name1").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 200 + ")").append("text")
		.text("Get an idea about how the average temperatures (in Celsius) are like across the states by choosing one of the months shown below the map.").call(wrapmain).attr("class","intro_body");
		d3.select("#name1").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 320 + ")").append("text")
		.text("All the details and the programs available at the selected school are displayed and the hyperlink provided will take you to the official course website.").call(wrapmain).attr("class","intro_body");

		d3.select("#name2").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").append("text")
		.text("COMPARE SCHOOLS").attr("class","intro_head");
		d3.select("#name2").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").append("text")
		.text("All you need to do is to check the box under the ADD column from the list to explore about the school. A marker on the Map is highlighted which represents the location of the school that has been selected.").call(wrapmain).attr("class","intro_body");
		d3.select("#name2").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 200 + ")").append("text")
		.text("Get an idea about how the average temperatures (in Celsius) are like across the states by choosing one of the months shown below the map.").call(wrapmain).attr("class","intro_body");
		d3.select("#name2").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 320 + ")").append("text")
		.text("All the details and the programs available at the selected school are displayed and the hyperlink provided will take you to the official course website.").call(wrapmain).attr("class","intro_body");
		d3.select("#par_intro").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 60 + ")").append("text")
		.text("PARALLEL AXES").attr("class","intro_head");
		d3.select("#par_intro").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 80 + ")").append("text")
		.text("Available filters are not enough on shortlisting the schools ?").call(wrappar).attr("class","intro_bodyq");
		d3.select("#par_intro").attr("transform", "translate(" + 0 + "," + 0 + ")").append("g").attr("transform", "translate(" + 0 + "," + 150 + ")").append("text")
		.text("Many more filters are made available with the Parallel axes below. There is a brush available at the top for every criteria that you can filter on. Extend the brush size and drag it over the range of your interest and the universities matching with your interests are shown under the recommendations.").call(wrappar).attr("class","intro_body");
		//d3.select("")select("#left").attr("transform", "translate(" + 0 + "," + 0 + ")").append("img").attr("src","data/Logos/graddefault.png") ;
		 
	}
	
	
	function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.0, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", 40 + "px");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > 370) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineNumber * lineHeight + 16 + "px").text(word);
      }
    }
  });
}


	function wrapmain(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.0, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", 40 + "px");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > 320) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineNumber * lineHeight + 20 + "px").text(word);
      }
    }
  });
}

function wrappar(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.0, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", 40 + "px");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > 280) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineNumber * lineHeight + 20 + "px").text(word);
      }
    }
  });
}
