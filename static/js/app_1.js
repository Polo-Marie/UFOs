// Import the data from data.js
const tableData = data;
// Use "consta" for our variable because we don't want the variable to be reassigned or reused at all in our program. We don't want the data altered

// Referebce the HTML table using d3
var tbody = d3.select("tbody");


// Python:
//# Simple Python print statement
// def print_hello():
    // print("Hello there!")

//Javascript:
//# Simple JavaScript console.log statement
// function printHello() {
    //console.log("Hello there!");
// }

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // It's appropriate to use "let" to limit this variable just to this block of code
        // It's appropriate to use "var" when we want the variable to be available globally, or throughout all code
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
            // .text(value) means that we are extracting only the text of the value
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using that date
    if(date) {
        // Apply 'filter' to the table data to only keep the  rows where
        // the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @Note: If no date was entered, then filteredData will just be the 
    // original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);