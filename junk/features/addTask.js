
    var dateElement;

    function openDatePicker( target ) {
      
      dateElement = target;
      var ieSize = "width=380,height=255";
      var navSize = "width=480,height=295";
      var isNav = navigator.appName == "Netscape";
      window.open( "calendar.html", "calendar",
                    "menubar=no,resizable=no,scrollbars=no," +
                    "status=yes,toolbar=no," + 
                    ( isNav ? navSize : ieSize ) ); 

    }

    function setDate( date ) {

      dateElement.value = date; 

    } 
  
    function getCookieValue( name ) {

     var c = document.cookie;
     var begin = c.indexOf( name );

     if( begin < 0 ) return( "" );
     begin += name.length + 1;

     var end = c.indexOf( ";", begin );

     if( end == -1 ) end = c.length;
     return( c.slice( begin, end ) ); 

    } 
    