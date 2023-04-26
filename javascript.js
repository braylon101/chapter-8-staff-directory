"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: 
      Date:   

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
// Retrieve information about the selected file
let JSONfile = this.files[0];

// Read the contents of the selected file
let fr = new FileReader();
fr.readAsText(JSONfile);

// Once the file has finished loading, parse the JSON file
fr.onload=function(){
// Convert the contents of the JSON data into an object named staff
let staff = JSON.parse(fr.result);
 // Call the makeStaffTable() function using staff as the parameter value
 makeStaffTable(staff);
}
};

function makeStaffTable(staff) {
// Create a new table element
let staffTable = document.createElement("table");
// Create a new row element for the table header
let headerRow = document.createElement("tr");

// Loop through the properties of the first directory entry and create table header cells
for (let prop in staff.directory[0]) {
    // Create a new table header cell element
    let headerCell = document.createElement("th");
    
    // Set the text content of the header cell to the property name
    headerCell.textContent = prop;
    
    // Append the header cell to the header row
    headerRow.appendChild(headerCell);
}

// Append the header row to the staffTable
staffTable.appendChild(headerRow);

// Loop through the items in the directory array and create table rows for each entry
for (let i = 0; i < staff.directory.length; i++) {
    // Create a new table row element
    let tableRow = document.createElement("tr");
    
    // Loop through the properties of the current directory entry and create table cells for each one
    for (let prop in staff.directory[i]) {
        // Create a new table cell element
        let tableCell = document.createElement("td");
        
        // Set the text content of the table cell to the property value
        tableCell.textContent = staff.directory[i][prop];
        
        // Append the table cell to the table row
        tableRow.appendChild(tableCell);
    }
    
    // Append the table row to staffTable
    staffTable.appendChild(tableRow);
}

// Append staffTable to containerBox
containerBox.appendChild(staffTable);
}