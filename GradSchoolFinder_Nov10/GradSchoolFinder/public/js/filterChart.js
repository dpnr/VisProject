/**
 * Created by Neah_New on 27-10-2016.
 */

//Default values for these filters.
var programType = "Master's";
var worldRank = "1 - 50";
var prerequisites = "any";
var schoolInfo;

//Constructor for FilterChart
function FilterChart(schoolData) {
    var self = this;
    self.schoolData = schoolData;
    schoolInfo = self.schoolData;
    self.init();

};

/**
 * Initializes the svg elements required for this chart
 */
FilterChart.prototype.init = function(){
    var self = this;
    console.log(schoolInfo);
};

FilterChart.prototype.getFilterValues = function() {
    var self = this;

    programType = document.getElementById("programType").value;
    console.log(programType);

    worldRank = document.getElementById("worldRank").value;
    console.log(worldRank);

    prerequisites = document.getElementById("prereq").value;
    console.log(prerequisites);

    var listAfterFilteringByRank = [];
    var listAfterFilteringByRankAndType = [];
    var listAfterFilteringByRankAndTypeAndPrereq = [];
    var parallel_listAfterRankAndTypeAndPrereq = [];
   // var parallel_listAfterRankAndType = [];
    //var parallel_listAfterRank = [];
    //Filter by World Rank.
    if(worldRank=="1-50") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]<=50) {

                listAfterFilteringByRank.push(entry);
               // parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});

            }
        }

    }
    else if(worldRank=="51-100") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]>50 && entry["WORLD_RANK"]<=100) {

                listAfterFilteringByRank.push(entry);
               // parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }
    else if(worldRank=="101-150") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]>100 && entry["WORLD_RANK"]<=150) {

                listAfterFilteringByRank.push(entry);
               // parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }

        }

    }
    else if(worldRank=="151-200") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]>150 && entry["WORLD_RANK"]<=200) {

                listAfterFilteringByRank.push(entry);
              //  parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }

        }

    }
    else if(worldRank=="201-300") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]=="201-225" || entry["WORLD_RANK"]=="201-250" || entry["WORLD_RANK"]=="251-300" ||
                entry["WORLD_RANK"]=="276-300") {

                listAfterFilteringByRank.push(entry);
              //  parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }
    else if(worldRank=="301-400") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]=="301-350" || entry["WORLD_RANK"]=="351-400" || entry["WORLD_RANK"]=="350-400") {

                listAfterFilteringByRank.push(entry);
              //  parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }
    else if(worldRank=="401-800") {
        for(var i =0; i<schoolInfo.length; i++) {
            entry = schoolInfo[i];
            if(entry["WORLD_RANK"]=="401-500" || entry["WORLD_RANK"]=="501-600" || entry["WORLD_RANK"]=="601-800") {

                listAfterFilteringByRank.push(entry);
               // parallel_listAfterRank.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }


    }



    //Filter based on Program Type - Masters, Doctoral, or Certificate.
    if(programType=="M") {
        for(var k =0; k<listAfterFilteringByRank.length; k++) {
            entry = listAfterFilteringByRank[k];
            if(entry["TYPE"]=="M") {

                listAfterFilteringByRankAndType.push(entry);
               // parallel_listAfterRankAndType.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }
    else if(programType=="C") {
        for(var k =0; k<listAfterFilteringByRank.length; k++) {
            entry = listAfterFilteringByRank[k];
            if(entry["TYPE"]=="C") {
                console.log(entry["SCHOOL"]+" "+entry["WORLD_RANK"]+" " +entry["TYPE"]);
                listAfterFilteringByRankAndType.push(entry);
               // parallel_listAfterRankAndType.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }


    //Filter by Prerequisites.
    if(prerequisites=="any") {
        listAfterFilteringByRankAndTypeAndPrereq = listAfterFilteringByRankAndType;
    }
    else if(prerequisites=="yes") {
        for(var m =0; m<listAfterFilteringByRankAndType.length; m++) {
            entry = listAfterFilteringByRankAndType[m];
            if(entry["PREREQ"]!="Not Available") {

                listAfterFilteringByRankAndTypeAndPrereq.push(entry);
               // parallel_listAfterRankAndTypeAndPrereq.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }

    }
    else if(prerequisites=="no") {
        for(var m =0; m<listAfterFilteringByRankAndType.length; m++) {
            entry = listAfterFilteringByRankAndType[m];
            if(entry["PREREQ"]=="Not Available") {

                listAfterFilteringByRankAndTypeAndPrereq.push(entry);
               // parallel_listAfterRankAndTypeAndPrereq.push({"SCHOOL":entry.SCHOOL,"TEACHING":entry.TEACHING,"INTERNATIONAL":entry.INTERNATIONAL,"RESEARCH":entry.RESEARCH,"CITATIONS":entry.CITATIONS,"INCOME":entry.INCOME});
            }
        }


    }



    var mapChart = new MapChart(listAfterFilteringByRankAndTypeAndPrereq);
    MapChart.prototype.update(listAfterFilteringByRankAndTypeAndPrereq);
    var listChart=new ListChart(listAfterFilteringByRankAndTypeAndPrereq);
    uniData= listAfterFilteringByRankAndTypeAndPrereq.filter(function(d,i){if(d.YEAR==2016)return d;});
    for(var i=0;i<uniData.length;i++)
    {
        var input =uniData[i];
        parallel_listAfterRankAndTypeAndPrereq.push({"SCHOOL":input.SCHOOL,"TEACHING":input.TEACHING,"INTERNATIONAL":input.INTERNATIONAL,"RESEARCH":input.RESEARCH,"CITATIONS":input.CITATIONS,"INCOME":input.INCOME});

    }
    d3.select("#clear").exit().remove();
    var Parallel = new parallel(parallel_listAfterRankAndTypeAndPrereq);
    d3.select("#clear").exit().remove();
    console.log("emaitundro");
    console.log(listAfterFilteringByRankAndTypeAndPrereq);

};

