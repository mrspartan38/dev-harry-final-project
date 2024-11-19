

$(() => {
    console.log("ready!");
  
    // fetch('https://mrspartan38.github.io/filehost/harry.json')
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error
    //             (${res.status});

    //         }
    //     }.then((data) =>
    //         console.log(data)
        
    //     .catch()


    $.getJSON( "https://mrspartan38.github.io/filehost/harry.json", function( data ) {
    //     var items = [];
    //     $.each( data, function( key, val ) {
    //       items.push( "<li id='" + key + "'>" + val + "</li>" );
    //     });
       
    //     $( "<ul/>", {
    //       "class": "my-new-list",
    //       html: items.join( "" )
    //     }).appendTo( "body" );
    //   });

    console.log('here'); 
    console.log(data); 



  });

});
  