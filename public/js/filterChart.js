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
};


//Form the list of schools based on filter values.
FilterChart.prototype.getFilterValues = function(programs, ranks, prereq) {
    var self = this;
    var listAfterFilteringByRank = [];
    var listAfterFilteringByRankAndType = [];
    var listAfterFilteringByRankAndTypeAndPrereq = [];
    var parallel_listAfterRankAndTypeAndPrereq = [];

    //Filter by World Rank.
    for(var index=0; index<ranks.length; index++) {
       

        if(ranks[index]=="1-50") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]<=50) {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="51-100") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]>50 && entry["WORLD_RANK"]<=100) {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="101-150") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]>100 && entry["WORLD_RANK"]<=150) {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="151-200") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]>150 && entry["WORLD_RANK"]<=200) {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="201-300") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]=="201-225" || entry["WORLD_RANK"]=="201-250" || entry["WORLD_RANK"]=="251-300" ||
                    entry["WORLD_RANK"]=="276-300") {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="301-400") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]=="301-350" || entry["WORLD_RANK"]=="351-400" || entry["WORLD_RANK"]=="350-400") {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

        else if(ranks[index]=="401-800") {
            for(var i =0; i<schoolInfo.length; i++) {
                entry = schoolInfo[i];
                if(entry["WORLD_RANK"]=="401-500" || entry["WORLD_RANK"]=="501-600" || entry["WORLD_RANK"]=="601-800") {
                    listAfterFilteringByRank.push(entry);
                }
            }
        }

    }//closing FOR LOOP.
 
    //Filter based on Program Type - Masters, Doctoral, or Certificate.

    if(programs.length == 2)
        listAfterFilteringByRankAndType = listAfterFilteringByRank;
    else {
        if(programs[0]=="M") {
            for(var j =0; j<listAfterFilteringByRank.length; j++) {
                entry = listAfterFilteringByRank[j];
                if(entry["TYPE"]=="M") {
                    listAfterFilteringByRankAndType.push(entry);
                }
            }
        }
        else if(programs[0]=="C") {
            for(var j =0; j<listAfterFilteringByRank.length; j++) {
                entry = listAfterFilteringByRank[j];
                if(entry["TYPE"]=="C") {
                    listAfterFilteringByRankAndType.push(entry);
                }
            }
        }
    }


    //Filter by Prerequisites.
	
    if(prereq[0]=="any") {
        listAfterFilteringByRankAndTypeAndPrereq = listAfterFilteringByRankAndType;
    }
    else if(prereq[0]=="yes") {
        for(var k =0; k<listAfterFilteringByRankAndType.length; k++) {
            entry = listAfterFilteringByRankAndType[k];
            if(entry["PREREQ"]!="Not Available") {
                listAfterFilteringByRankAndTypeAndPrereq.push(entry);
            }
        }
    }
    else if(prereq[0]=="no") {
        for(var k =0; k<listAfterFilteringByRankAndType.length; k++) {
            entry = listAfterFilteringByRankAndType[k];
            if(entry["PREREQ"]=="Not Available") {
                listAfterFilteringByRankAndTypeAndPrereq.push(entry);
            }
        }
    }

    //Update MapChart and Parallel Axes Chart.
    var mapChart = new MapChart(listAfterFilteringByRankAndTypeAndPrereq);
    MapChart.prototype.update(listAfterFilteringByRankAndTypeAndPrereq);

    //Update ListChart.
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

};

