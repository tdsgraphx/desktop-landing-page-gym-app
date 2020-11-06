var now = new Date();
var month = new Date( fixYear( now.getYear() ), now.getMonth(), 1 );
var months = new Array( "January", "February", "March", "April",
                          "May", "June", "July", "August", "September",
                          "October", "November", "December" );
        
        function fixYear( year ) {      
            return( year < 1000 ? year + 1900 : year );
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