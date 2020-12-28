/* Problem is films doesn’t have the key ‘name’, it has ‘title’ instead 
What we want to do is use this kind of approach to iterate over the keys to build 
ourselves a table full of data without actually specifying a property
Solution:  */

// create new function that takes in a single object 
// start off as an empty array
	function getTableHeaders(obj) {
		var tableHeaders = [ ];

// take our object and iterate over the keys 
		Object.keys( obj ).forEach( function ( key ) {
// it will iterate over each key and push it to our tableHeaders array
// use <td> to create a new table cell 
			tableHeaders.push( `<td> ${key} </td>` );
		});

// we then add each to a row hence, <tr></tr>
		return `<tr>${tableHeaders}</tr>`;
    }
    

    function writeToDocument( type ) {
    		var el = document.getElementById("data");
    		el.innerHTML = "";

    	getData(type, function( data ) {
            data = data.results;
            getTableHeaders(data[0]);

        	data.forEach(function( item ) {
                el.innerHTML += "<p>" + item.name + "</p>";
            });
        });
    }

    // // gives us the list of all of the keys:
// 			Object.keys( item ).forEach( function ( key ) {
// 				console.log( key );
// 		    }) 