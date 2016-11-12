/**
 * Created by Neah_New on 27-10-2016.
 */
//Constructor for listChart

var count=0;
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
	
	
	//console.log("we are in comparator")
	
}

comparatorChart.prototype.update = function(i,data){
	
	
	
	var selected=new Array;
	selected.push(data[i]);
	
	if(count==0)
	{
		count=1;
		//just the name
	var state_text = d3.select("#left").selectAll(".team_label1")
        .data(selected);
		
		console.log("school1 ani ravali "+ selected.SCHOOL);
		state_text.exit().remove();
    state_enter=state_text
        .enter().append("li");
	state_text=state_text.merge(state_enter);
		state_text
        .text(function (d) {console.log("list");
            return d.SCHOOL;
        })
        .classed("team_label1", true);
		//one vis design
		//----------TEACHING SCORE
		var internScore=d3.select("#leftside").selectAll(".team_label1_teach").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",0)
		.attr("y",function(d,i){return 120-d.TEACHING})
		.attr("height",function(d,i){return d.TEACHING})
		.style("fill","black")
		.classed("team_label1_teach",true);
		//---------INTERNATIONAL
		var internScore=d3.select("#leftside").selectAll(".team_label1_intern").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",20)
		.attr("y",function(d,i){return 120- d.INTERNATIONAL})
		.attr("height",function(d,i){return d.INTERNATIONAL})
		.style("fill","black")
		.classed("team_label1_intern",true);
		//---------RESEARCH
		var internScore=d3.select("#leftside").selectAll(".team_label1_research").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",40)
		.attr("y",function(d,i){return 120- d.RESEARCH})
		.attr("height",function(d,i){return d.RESEARCH})
		.style("fill","black")
		.classed("team_label1_research",true);
		//---------CITATIONS
		var internScore=d3.select("#leftside").selectAll(".team_label1_citations").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",60)
		.attr("y",function(d,i){return 120- d.CITATIONS})
		.attr("height",function(d,i){return d.CITATIONS})
		.style("fill","black")
		.classed("team_label1_citations",true);
		//---------INCOME
		var internScore=d3.select("#leftside").selectAll(".team_label1_income").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",80)
		.attr("y",function(d,i){return 120- d.INCOME})
		.attr("height",function(d,i){return d.INCOME})
		.style("fill","black")
		.classed("team_label1_income",true);
		
		
		
	}	
	else if(count==1)
	{
		//just the name	
		count=0;
		var state_text = d3.select("#right").selectAll(".team_label2")
        .data(selected);
	
		state_text.exit().remove();
		state_enter=state_text
        .enter().append("li");
	state_text=state_text.merge(state_enter);
		state_text
        .text(function (d) {console.log("list");
            return d.SCHOOL;
        })
        .classed("team_label2", true);
		
		
		//one vis design
		//----------TEACHING SCORE
		var internScore=d3.select("#rightside").selectAll(".team_label2_teach").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",0)
		.attr("y",function(d,i){return 120-d.TEACHING})
		.attr("height",function(d,i){return d.TEACHING})
		.style("fill","black")
		.classed("team_label2_teach",true);
		//---------INTERNATIONAL
		var internScore=d3.select("#rightside").selectAll(".team_label2_intern").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",20)
		.attr("y",function(d,i){return 120- d.INTERNATIONAL})
		.attr("height",function(d,i){return d.INTERNATIONAL})
		.style("fill","black")
		.classed("team_label2_intern",true);
		//---------RESEARCH
		var internScore=d3.select("#rightside").selectAll(".team_label2_research").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",40)
		.attr("y",function(d,i){return 120- d.RESEARCH})
		.attr("height",function(d,i){return d.RESEARCH})
		.style("fill","black")
		.classed("team_label2_research",true);
		//---------CITATIONS
		var internScore=d3.select("#rightside").selectAll(".team_label2_citations").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",60)
		.attr("y",function(d,i){return 120- d.CITATIONS})
		.attr("height",function(d,i){return d.CITATIONS})
		.style("fill","black")
		.classed("team_label2_citations",true);
		//---------INCOME
		var internScore=d3.select("#rightside").selectAll(".team_label2_income").data(selected);
		internScore.exit().remove();
		intern_enter=internScore.enter().append("rect");
		internScore=internScore.merge(intern_enter);
		internScore.attr("width",19.5)
		.attr("x",80)
		.attr("y",function(d,i){return 120- d.INCOME})
		.attr("height",function(d,i){return d.INCOME})
		.style("fill","black")
		.classed("team_label2_income",true);
		
		
		
		
		
	}
	
}