/*
 * Root file that handles instances of all the charts and loads the visualization
 */
(function(){
    var instance = null;

    /**
     * Creates instances for every chart (classes created to handle each chart;
     * the classes are defined in the respective javascript files.
     */
    function init() {
        //Creating instances for each visualization
        //var listChart = new listChart();
        //var mapChart = new mapChart();
        //var comparatorChart = new comparatorChartChart();

        //load the data corresponding to all the election years
        //pass this data and instances of all the charts that update on year selection to yearChart's constructor
        d3.csv("data/timesMergedData.csv", function (error, schoolData) {
            console.log(schoolData);
            var filterChart = new FilterChart(schoolData);
        });
    }

    /*
     * @constructor
     */
    function Main(){
        if(instance  !== null){
            throw new Error("Cannot instantiate more than one Class");
        }
    }

    /**
     *
     * @returns {Main singleton class |*}
     */
    Main.getInstance = function(){
        var self = this
        if(self.instance == null){
            self.instance = new Main();

            //called only once when the class is initialized
            init();
        }
        return instance;
    }
    Main.getInstance();
})();


function ohangeData() {
    var program = document.getElementById("programType").value;
    console.log(program);
}
