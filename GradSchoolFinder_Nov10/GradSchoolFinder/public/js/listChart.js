/**
 * Created by Neah_New on 27-10-2016.
 */
 var listInfo;
 var uniData;
 var i=0;
 
var index=0;
var cellWidth = 90,
    cellHeight = 20,
    cellBuffer = 15,
    barHeight = 20;
 //Constructor for listChart
function ListChart(listData) {
	//Parallel.prototype.call(listData);
    var self = this;
	console.log("reached here");
	console.log(listData);
    self.listData = listData;
    listInfo = self.listData;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
ListChart.prototype.init = function(){
	
	//checkBox12.prototype.init();
    var self = this;
//console.log("list data");
    console.log(listInfo);
	
		uniData= listInfo.filter(function(d,i){if(d.YEAR==2016)return d;})  
 tr = d3.select("tbody").selectAll("tr")
		.data(uniData);
tr.exit().remove();		
		
tr=tr.enter()
	 .append('tr')
	
	.merge(tr);
	
		

		//console.log(tr);
	
		//d3.select("tbody").selectAll("td").remove();
		
		////
		 td = tr.selectAll("td")
        .data(function(d,i){return [
								   {'value':d.SCHOOL, 'vis': 'text'},
								   {'value':d.DEPARTMENT, 'vis': 'text'},
								   {'value':d.DURATION, 'vis': 'text'},
								   {'value':d.TYPE, 'vis': 'text'},
								   {'value':d,'vis':'checkbox'}]});
		


		//----------------------------------------------------------------------
		
							
	
	
		tdenter=td.enter().append('td');
		td=tdenter.merge(td);
		
		
		
var svgenter= tdenter.filter(function(d,i){if (d.vis=='text' ) return d.vis;})
			.append("svg")
			.attr("width",90+5*cellBuffer)
			.attr("height",20);


var svgenter1=tdenter.filter(function(d,i){if(d.vis=='checkbox'){return d.vis;}})
				.append("div")
				.attr("width",30)
				.attr("height",20)
				.append("form")
				.append("input")
				.attr("type","checkbox")
				.attr("id","check")
				.attr("name","pranav");
				
		
		//console.log("here the index value is "+ index);
		tr.on("click", function(d,i){index = i;console.log("here the index value is "+ i);});
		
	 
				
	d3.selectAll("[name=pranav]").on("change", function() {
    var selected = this.value;
	
    if(this.checked)
	{
	console.log("selected"+index);
	comparatorChart.prototype.update(index,uniData);
	}

//comparatorChart.prototype.update(i,uniData);	
		

/* svg.selectAll(".dot")
    .filter(function(d) {return selected == d.holWkend;})
    .style("opacity", opacity); */
    }); 	
	
	
	
//tr.on("click", function(d,i){comparatorChart.prototype.update(i,uniData);});

	
var svg = td.select('svg');
var svg1 = td.select('svg');	





//-------------------------------------------------------------------------------------
var text1=td.filter(function(d){
			return d.vis=='text'})
	
	.text(function(d){return d.value;});
	

	// sorting
	/////sorting
	var count1=0;
var test;
var count=0;
sorted1=d3.select('tbody').selectAll("tr").data(uniData);
d3.selectAll("thead th").data(uniData).on("click", function(d,i) {
		if(count1==0){
	 sorted1.sort(function(a, b){return d3.ascending( a.SCHOOL, b.SCHOOL)});
	count1++;	}
	else if(count1==1){	
	sorted1.sort(function(a, b){return d3.descending(a.SCHOOL,b.SCHOOL)});
	count1=0;	} 
	
}
);


sorted=d3.select('tbody').selectAll("tr").data(uniData);

			d3.selectAll("thead td").data(uniData).on("click", function(d,i) {


	switch(i)
	{case 0: test="DEPARTMENT";break;
	case 1: test="DURATION";break; //not working
	case 2: test="TYPE";break;
	
	}	
				
	if(count==0){
	
	 sorted.sort(function(a, b){return d3.ascending( a[test], b[test])});
	// sorted1.sort(function(a, b){return d3.ascending( a.SCHOOL, b.SCHOOL)});
	count++;	}
	else if(count==1){
	
	sorted.sort(function(a, b){return d3.descending(a[test],b[test])});
	//sorted1.sort(function(a, b){return d3.descending(a.SCHOOL,b.SCHOOL)});
	count=0;	}
	
	});
			

	//Implementing the check box for the list of the schools displayed
	
	
	
	   
	
};

