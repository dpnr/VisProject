/**
 * Created by Neah_New on 27-10-2016.
 */
//Constructor for listChart

var climate_data=[];
var value;
var i;
var count;
var value=0;
var climate;
var us_climate;

function MapChart(listData) {
    var self = this;
    self.listData = listData;
    MapInfo = self.listData;
    self.init();
}

/**
 * Initializes the svg elements required for this chart
 */
MapChart.prototype.init = function(){
    var self = this;

    projection = d3.geoAlbersUsa().precision(0.1).scale(850);

    path = d3.geoPath().projection(projection);

    d3.json("data/us.json", function (json) {
        maps=d3.select("#map").selectAll("path")
            .data(topojson.feature(json, json.objects.states).features)
            .enter()
            .append("path")
            .attr("id",function(d){
                if (d.id!=72 && d.id!=78){
                    value=climate_data.filter(function(da,i){
                        if(da.ID==d.id)
                            return da.AverageTemperature});
                    return "_"+d.id;}
            })
            .attr("d", path)
            .classed("countries",true);
    });

    /* Temperature Legend */
    var tempData = [{
        color: '#043a72',
        label: '-27'
    }, {
        color: '#0f538f',
        label: '-21'
    }, {
        color: '#246aa8',
        label: '-15'
    }, {
        color: '#0e93cf',
        label: '-9'
    }, {
        color: '#40addc',
        label: '-3'
    }, {
        color: '#91c4e2',
        label: '0'
    }, {
        color: '#bdd4e9',
        label: '6'
    }, {
        color: '#fcb96d',
        label: '12'
    }, {
        color: '#f57154',
        label: '18'
    }, {
        color: '#e34d43',
        label: '24'
    }, {
        color: '#c42940',
        label: '30'
    }, {
        color: '#831a41',
        label: '36'
    }]

    var legend = d3.select("#temp");
    var defs = legend.append("defs");
    var linearGradient = defs.append("linearGradient")
        .attr("id", "linear-gradient");

    linearGradient
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");

    legend.append("rect")
        .attr("width", 600)
        .attr("height", 8)
        .style("fill", "url(#linear-gradient)")
        .attr("transform", "translate(85,0)");

    var temperatureScale = d3.scale.linear()
        .range(["#043a72", "#0f538f", "#246aa8", "#0e93cf", "#40addc", "#91c4e2", "#bdd4e9", "#fcb96d", "#f57154", "#e34d43", "#c42940", "#831a41"]);

    linearGradient.selectAll("stop")
        .data(temperatureScale.range())
        .enter()
        .append("stop")
        .attr("offset", function(d,i) { return i/(temperatureScale.range().length-1); })
        .attr("stop-color", function(d) { return d; });

    var width = 600,
        height = 30;

    var g = legend.append('g')
        .selectAll('.label')
        .data(tempData)
        .enter();

    g.append('text')
        .text(function(d){
            return d.label;
        })
        .attr('transform',function(d,i){
            return 'translate(' + (xPos(i) + 85) + ',' + ((height) - 7) + ')';
        })
        .style("font-size","12px");

    function xPos(i){
        return (width / tempData.length) * (i);
    };
};


MapChart.prototype.update = function(listAfterFilteringByRankAndTypeAndPrereq) {
    var self = this;

    d3.select("#points").selectAll('.silver').remove();

    schools = d3.select('#points').selectAll(".mappoint")
        .data(listAfterFilteringByRankAndTypeAndPrereq);

    schools.exit().remove();

    schools = schools.enter().append("circle")
        .attr("r", 12)
        .merge(schools);

    schools
        .attr('class', 'silver')
        .attr("transform", function(d) {return "translate(" + projection([d["LOC_LONG"],d["LOC_LAT"]]) + ")";});

    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    schools.on("mouseover", function(d) {
        d3.select(this).classed("highlighted", true);
        tooltip.transition()
            .duration(100)
            .style("opacity", .9);
        tooltip.html(d["SCHOOL"])
            .style("left", (d3.event.pageX + 5) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })
        .on("mouseout", function(d) {
            d3.select(this).classed("highlighted", false);
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
};


function climate_func(value, id){
    var self = this;

    var el = document.getElementsByClassName("monthClicked");
    var sliced = Array.prototype.slice.call(el);
    var i;
    for (i = 0; i < sliced.length; i++) {
        sliced[i].className = 'monthsAxis';
    }

    if(value == "Jan") {
        document.getElementById("Jan").setAttribute("class", "monthClicked");
    }
    else if(value == "Feb") {
        document.getElementById("Feb").setAttribute("class", "monthClicked");
    }
    else if(value == "Mar") {
        document.getElementById("Mar").setAttribute("class", "monthClicked");
    }
    else if(value == "Apr") {
        document.getElementById("Apr").setAttribute("class", "monthClicked");
    }
    else if(value == "May") {
        document.getElementById("May").setAttribute("class", "monthClicked");
    }
    else if(value == "Jun") {
        document.getElementById("Jun").setAttribute("class", "monthClicked");
    }
    else if(value == "Jul") {
        document.getElementById("Jul").setAttribute("class", "monthClicked");
    }
    else if(value == "Aug") {
        document.getElementById("Aug").setAttribute("class", "monthClicked");
    }
    else if(value == "Sep") {
        document.getElementById("Sep").setAttribute("class", "monthClicked");
    }
    else if(value == "Oct") {
        document.getElementById("Oct").setAttribute("class", "monthClicked");
    }
    else if(value == "Nov") {
        document.getElementById("Nov").setAttribute("class", "monthClicked");
    }
    else if(value == "Dec") {
        document.getElementById("Dec").setAttribute("class", "monthClicked");
    }

    d3.csv("data/state_climate1.csv", function (error, climate) {
        us_climate = climate;
        var us_climate = MapChart.prototype.us_climate(us_climate,value);
    });
};


MapChart.prototype.us_climate = function(climate,value){
	var self=this;

    var domain = [-27, -21, -15, -9, -3, 0, 6, 12, 18, 24, 30,36];
    var range = ["#043a72", "#0f538f", "#246aa8", "#0e93cf", "#40addc", "#91c4e2", "#bdd4e9", "#fcb96d", "#f57154", "#e34d43", "#c42940", "#831a41"];
    colorScale = d3.scaleQuantile()
        .domain(domain)
        .range(range);

	climate_data=climate.filter(function(d,i){if(d.Month==value)return d});
	
	for(i = 1; i<57; i++)
	{
	    count=i;
        value = climate_data.filter(function(da,i){if(da.ID==count) {return da.AverageTemperature}});
        if(d3.select("path#_"+i)!=undefined && i!=3 && i!=7 && i!=14 && i!=43 && i!=52)
        {
            d3.select("path#_"+i).style("fill",colorScale(value[0]["AverageTemperature"]));
        }
    }
};


