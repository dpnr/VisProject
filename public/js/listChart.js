/**
 * Created by Neah_New on 27-10-2016.
 */
 var listInfo;
 var fulldata;
 var uniData;
 var i=0;
 var id=0;
 var name;
 var checkedcount=0;
 var count=0;
 var leftslot=0,rightslot=0;
var index=0;
var hist = [];
var cellWidth = 90,
    cellHeight = 20,
    cellBuffer = 15,
    barHeight = 20;
 //Constructor for listChart
function ListChart(listData) {
	//Parallel.prototype.call(listData);
    var self = this;
	
    self.listData = listData;
    listInfo = self.listData;
	fulldata = self.listData;
	self.uncheck();
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
ListChart.prototype.init = function(){
	
	// we have remove the welcome picture 
	d3.select("#welcome").selectAll("*").remove();
	 tabcontent = document.getElementsByClassName("hide1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className+" block";
    }
	comparatorChart.prototype.intro();
	
	//checkBox12.prototype.init();
    var self = this;

   
	
		uniData= listInfo.filter(function(d,i){if(d.YEAR==2016)return d;})  
			
		tr = d3.select("tbody").selectAll("tr")
			.data(uniData);
		tr.exit().remove();		
		
		tr=tr.enter().append('tr').merge(tr);
		
		////
		td = tr.selectAll("td")
		.data(function(d,i){return [
			{'value':d.SCHOOL, 'vis': 'text'},
			{'value':d.DEPARTMENT, 'vis': 'text'},
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
				.attr("name","list");
				
		
	
		tr.on("click", function(d,i){index = i;});
		
	 
				
	d3.selectAll("[name=list]").on("change", function(d,i) {
    var selected = this.value;
	var schoolSelected = d.value.SCHOOL;
	
    if(this.checked && checkedcount<=1)
	{ 
		ListChart.prototype.changeMapMarkingsOnCheck(schoolSelected, checkedcount);
		checkedcount++;

		if(leftslot==0 && rightslot==0)
		{
			hist=[];
	
	comparatorChart.prototype.update(index,uniData,0);
	 hist.push({"index":index,"side":"left"});
	leftslot=1;	// 0 indicates left slot
	id="name2";
	comparatorChart.prototype.schoolDetail(id,uniData[index].SCHOOL,uniData);
	
		}
		else if(leftslot==1 && rightslot==0)
		{
			comparatorChart.prototype.update(index,uniData,1);
			hist.push({"index":index,"side":"right"});
			rightslot=1;
			d3.select("#image").selectAll("*").remove();
			d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/comparison.png");
		}
		else if(leftslot==0 && rightslot==1)
		{
			comparatorChart.prototype.update(index,uniData,0);
			hist.push({"index":index,"side":"left"});
			leftslot=1;
			d3.select("#image").selectAll("*").remove();
			d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/comparison.png");
		}
		else 
		{
		comparatorChart.prototype.update(index,uniData,0);	
		hist.push({"index":index,"side":"left"});
		d3.select("#image").select("*").remove();
		d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/feature.png").attr("alt","features");
		}
	
	}
	else if(!this.checked)
	{
		checkedcount--;
		ListChart.prototype.changeMapMarkingsOnUncheck(schoolSelected, checkedcount);
		if(leftslot==1 && rightslot==0)
		{
			leftslot=0;
			comparatorChart.prototype.clearleft();
			comparatorChart.prototype.clearright();
			comparatorChart.prototype.intro();
			d3.select("#image").selectAll("*").remove();
			d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/feature.png").attr("alt","features");
		}
		else if (leftslot==0 && rightslot==1)
		{
			rightslot=0;
			comparatorChart.prototype.clearleft();
			comparatorChart.prototype.clearright();
			comparatorChart.prototype.intro();
			d3.select("#image").selectAll("*").remove();
			d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/feature.png").attr("alt","features");
		}	
		else if (leftslot==1 && rightslot==1)
		{
			for(var i=hist.length;i>0;i--)
			{
			if(hist[i-1].index == index)
            break;				
			}
			
			if(hist[i-1]["side"]=="left")
			{leftslot=0; rightslot=1;comparatorChart.prototype.clearleft();
		
		name = document.getElementById("text2").innerHTML;
		id="name1";
		comparatorChart.prototype.schoolDetail(id,name,uniData);
		}
		
		else {rightslot=0;
		leftslot=1;
		comparatorChart.prototype.clearright();
		
		name = document.getElementById("text1").innerHTML;
		id="name2";
		comparatorChart.prototype.schoolDetail(id,name,uniData);
		}
			
		}
		
	}
	else if(this.checked && checkedcount>1)
	{
		this.checked =false;
		 alert("You can check a maximum of 2 boxes.");
	}
		
//comparatorChart.prototype.update(i,uniData);	

d3.selectAll(".TEACHING")
		.on("mouseover",function(d,i){return comparatorChart.prototype.highlight("TEACHING",d.TEACHING)})
		.on("mouseout",function(d,i){return comparatorChart.prototype.dehighlight("TEACHING")})
		.on("click",function(d,i){
			if(checkedcount==2)
				return comparatorChart.prototype.history1(d3.select("#TEACHING1")["_groups"][0][0]["__data__"].SCHOOL,d3.select("#TEACHING2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"TEACHING");
			else if(leftslot==0)
				return comparatorChart.prototype.history1("",d3.select("#TEACHING2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"TEACHING");
			else 
				return comparatorChart.prototype.history1(d3.select("#TEACHING1")["_groups"][0][0]["__data__"].SCHOOL,"",fulldata,"TEACHING");});
d3.selectAll(".INTERNATIONAL")
		.on("mouseover",function(d,i){return comparatorChart.prototype.highlight("INTERNATIONAL",d.INTERNATIONAL)})
		.on("mouseout",function(d,i){return comparatorChart.prototype.dehighlight("INTERNATIONAL")})
		.on("click",function(d,i){if(checkedcount==2)
				return comparatorChart.prototype.history1(d3.select("#INTERNATIONAL1")["_groups"][0][0]["__data__"].SCHOOL,d3.select("#INTERNATIONAL2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"INTERNATIONAL");
			else if(leftslot==0)
				return comparatorChart.prototype.history1("",d3.select("#INTERNATIONAL2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"INTERNATIONAL");
			else 
				return comparatorChart.prototype.history1(d3.select("#INTERNATIONAL1")["_groups"][0][0]["__data__"].SCHOOL,"",fulldata,"INTERNATIONAL");});
d3.selectAll(".RESEARCH")
		.on("mouseover",function(d,i){return comparatorChart.prototype.highlight("RESEARCH",d.RESEARCH)})
		.on("mouseout",function(d,i){return comparatorChart.prototype.dehighlight("RESEARCH")})
		.on("click",function(d,i){if(checkedcount==2)
				return comparatorChart.prototype.history1(d3.select("#RESEARCH1")["_groups"][0][0]["__data__"].SCHOOL,d3.select("#RESEARCH2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"RESEARCH");
			else if(leftslot==0)
				return comparatorChart.prototype.history1("",d3.select("#RESEARCH2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"RESEARCH");
			else 
				return comparatorChart.prototype.history1(d3.select("#RESEARCH1")["_groups"][0][0]["__data__"].SCHOOL,"",fulldata,"RESEARCH");});;	
d3.selectAll(".CITATIONS")
		.on("mouseover",function(d,i){return comparatorChart.prototype.highlight("CITATIONS",d.CITATIONS)})
		.on("mouseout",function(d,i){return comparatorChart.prototype.dehighlight("CITATIONS")})
		.on("click",function(d,i){if(checkedcount==2)
				return comparatorChart.prototype.history1(d3.select("#CITATIONS1")["_groups"][0][0]["__data__"].SCHOOL,d3.select("#CITATIONS2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"CITATIONS");
			else if(leftslot==0)
				return comparatorChart.prototype.history1("",d3.select("#CITATIONS2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"CITATIONS");
			else 
				return comparatorChart.prototype.history1(d3.select("#CITATIONS1")["_groups"][0][0]["__data__"].SCHOOL,"",fulldata,"CITATIONS");});;
d3.selectAll(".INCOME")
		.on("mouseover",function(d,i){return comparatorChart.prototype.highlight("INCOME",d.INCOME)})
		.on("mouseout",function(d,i){return comparatorChart.prototype.dehighlight("INCOME")})
		.on("click",function(d,i){if(checkedcount==2)
				return comparatorChart.prototype.history1(d3.select("#INCOME1")["_groups"][0][0]["__data__"].SCHOOL,d3.select("#INCOME2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"INCOME");
			else if(leftslot==0)
				return comparatorChart.prototype.history1("",d3.select("#INCOME2")["_groups"][0][0]["__data__"].SCHOOL,fulldata,"INCOME");
			else 
				return comparatorChart.prototype.history1(d3.select("#INCOME1")["_groups"][0][0]["__data__"].SCHOOL,"",fulldata,"INCOME");});;		
		


    }); 	
	
	
	


	
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

ListChart.prototype.uncheck = function(){

  d3.selectAll("[name=list]").property('checked', false);
  comparatorChart.prototype.clearleft();
  d3.select("#image").selectAll("*").remove();
  d3.select("#image").append("img").attr("id","oneimage1").attr("src","data/feature.png").attr("alt","features");
  comparatorChart.prototype.clearright();
  checkedcount=0;
  leftslot=0;
  rightslot=0;
  

}


ListChart.prototype.changeMapMarkingsOnCheck = function(schoolSelected, checkedCount) {
	var self = this;

	if(checkedCount == 0) {
		var circles = d3.select("#points").selectAll(".silver")
			.filter(function (d) {
				return d.SCHOOL == schoolSelected;
			})
			.classed("clickedFromList", true)
			.attr("r", 16);
	}
	else if(checkedCount == 1) {
		var circles = d3.select("#points").selectAll(".silver")
			.filter(function (d) {
				return d.SCHOOL == schoolSelected;
			})
			.classed("selectedFromList", true)
			.attr("r", 16);
		d3.select("#points").selectAll(".clickedFromList").classed("clickedFromList", false).classed("selectedFromList", true)
			.attr("r", 16);
	}
}


ListChart.prototype.changeMapMarkingsOnUncheck = function(schoolSelected, checkedCount) {
	var self = this;

	if(checkedCount == 1) {
		var circles = d3.select("#points").selectAll(".selectedFromList")
			.filter(function(d) {
				return d.SCHOOL == schoolSelected;
			})
			.classed("selectedFromList", false)
			.attr("r", 12);
		d3.select("#points").selectAll(".selectedFromList").classed("selectedFromList", false).classed("clickedFromList", true)
			.attr("r", 16);
	}
	if(checkedCount == 0) {
		d3.select("#points").selectAll(".clickedFromList").classed("clickedFromList", false).attr("r", 12);
		d3.select("#points").selectAll(".selectedFromList").classed("selectedFromList", false).attr("r", 12);
	}
}