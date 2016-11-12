/**
 * Created by Neah_New on 27-10-2016.
 */
//Constructor for listChart
function MapChart(listData) {
    var self = this;
    self.listData = listData;
    MapInfo = self.listData;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
MapChart.prototype.init = function(){

    var self = this;

    projection = d3.geoAlbersUsa().scale(1000).translate([500, 400]);

    path = d3.geoPath().projection(projection);

    d3.json("data/us.json", function (json) {

        maps=d3.select("#map").selectAll("path")
            .data(topojson.feature(json, json.objects.states).features)
            .enter()
            .append("path")
            .attr("id",function(d){
                return d.id;
            })
            .attr("d", path)
            .classed("countries",true);
    });
};


MapChart.prototype.update = function(listAfterFilteringByRankAndTypeAndPrereq) {
    var self = this;

    d3.select("#points").selectAll('.silver').remove();
    d3.select("#points").selectAll('.clicked').remove();

    schools = d3.select('#points').selectAll(".mappoint")
        .data(listAfterFilteringByRankAndTypeAndPrereq);

    schools.exit().remove();

    schools = schools.enter().append("circle")
        .attr("r", 20)
        //function(d) { return d["WORLD_RANK"]; })
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

    //On clicking a school, pass that school data to the Comparator to display.
    schools.on("click", function(d, i) {
        schools.classed("clicked", false);
        d3.select(this).classed("clicked", true);
        console.log(d);

        //call appropriate function in ComaparatorChart and pass d.

    });
};


MapChart.prototype.compareSchools = function(checkBoxElement) {
    var self = this;
    console.log("Hi");

    console.log(checkBoxElement.value);

    if(checkBoxElement.checked) {
        console.log("Checkbox checked.");
        console.log(checkBoxElement.checked);
        d3.select("#points").selectAll('.clicked').classed("clicked", false);

        var count = 1;
        console.log(count);

        schools.on("click", function (d) {
            if (count <= 2) {
                console.log(count + "school:");
                console.log(d);
                d3.select(this).classed("selected", true);
            }
            count++;
            console.log(count);
        });
        console.log(count);
    }
    else {
        schools.on("click", function(d, i) {
            schools.classed("clicked", false);
            d3.select(this).classed("clicked", true);
            console.log(d);

            //call appropriate function in ComaparatorChart and pass d.
        });
    }
};


MapChart.prototype.clearSelections = function() {
    var self = this;
    d3.select("#points").selectAll('.clicked').classed("clicked", false);
    d3.select("#points").selectAll('.selected').classed("selected", false);

    //checkBox = document.getElementById("check").value;
    //if(checkBox=="yes")
    MapChart.prototype.compareSchools(document.getElementById("check"));
};