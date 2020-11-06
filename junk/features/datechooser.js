var now = new Date();
var month = new Date( fixYear( now.getYear() ), now.getMonth(), 1 );
var months = new Array( "January", "February", "March", "April",
                              "May", "June", "July", "August", "September",
                              "October", "November", "December" ); 

    function fixYear( year ) { 
        return( year < 1000 ? year + 1900 : year );
    } 

    function fixMonth( month ) {
       return( month < 0 ? month + 12 : (month > 11 ? month = 12 : month) );
    } 

    function getNumberDays( d ) {
       
        switch( d.getMonth() + 1 ) {

          case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          return( 31 );

          case 4: case 6: case 9: case 11:
          return( 30 );
          
          case 2:
          return( 28 + ( d.getYear % 4 == 0 ? 1 : 0 ) );

        }
    }

    function getEnding( number ) {

    if( number > 10 && number < 20 ) return( "th" ); 

        switch( number % 10 ) {

          case 0: case 4: case 5: case 6: case 7: case 8: case 9:
          return( "th" );

          case 1: 
          return( "st" );

          case 2:
          return( "nd" );

          case 3:
          return( "rd" ); 

        } 
 
    } 
  
    function onSelect() {
  
    } 