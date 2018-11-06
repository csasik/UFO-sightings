// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
var dataSet = data;
var inputCountry = "";

//display contents of passed array in html table
function displayData(filteredData){
    //console.log('display results');
    d3.selectAll("tbody>tr").remove();
    //d3.event.preventDefault();

    filteredData.forEach(element => {
        //console.log(element);
        var row = tbody.append("tr");
    
        Object.entries(element).forEach(function([key,value]){
            //console.log({key, value});
            var cell = row.append("td").text(value);
        });
    }
    );

};

//initialize selected country from the drop down
function getData(country) {
    inputCountry = country;
};



function filterList(){
    
    console.log(inputCountry);

    
    var inputDateField = d3.select("#datetime");
    var inputDate = inputDateField.property("value");
    //console.log(inputDate);

    var inputStateField = d3.select("#state");
    var inputState = inputStateField.property("value");
    //console.log(inputState);

    var inputCityField = d3.select("#city");
    var inputCity = inputCityField.property("value");
    //console.log(inputCity);

    var inputShapeField = d3.select("#shape");
    var inputShape = inputShapeField.property("value");
    //console.log(inputShape);

    if (inputCountry ) {
        //console.log(inputCountry);
        dataSet = dataSet.filter(sightings => sightings.country === inputCountry);
        //console.log(dataSet) ;
    };

    if (inputState ) {
        //console.log(inputState);
        dataSet = dataSet.filter(sightings => sightings.state === inputState);
        //console.log(dataSet) ;
    
    }
    if (inputCity ) {
        dataSet = dataSet.filter(sightings => sightings.city === inputCity);
        //console.log(dataSet) ;
    }
    if (inputShape) {
        dataSet = dataSet.filter(sightings => sightings.shape === inputShape);
        //console.log(dataSet) ;
    }
    if (inputDate ) {
        dataSet = dataSet.filter(sightings => sightings.datetime === inputDate);
        //console.log(dataSet) ;
    }

    displayData(dataSet) ; 
}

displayData(data);

var button = d3.select("#filter-btn");

button.on("click", function() {
    // clear existing data
    d3.selectAll("tbody>tr").remove();
    d3.event.preventDefault();
    // initialize data set with original data
    dataSet = data;
    // call function to apply filters
    filterList();

    
});

