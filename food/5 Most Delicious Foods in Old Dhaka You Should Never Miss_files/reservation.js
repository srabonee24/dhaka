jQuery( document ).ready( function ($) {

    //Call check in date field
    var checkIn = $( '#orb-check_in' );
    var checkOut = $( '#orb-check_out' );
    if ( checkIn.length ) {
        checkIn.datetimepicker( {
            format: 'DD/MM/YYYY',
            minDate: new Date()
        } );
    }

    if ( checkIn.length ) {
        //Call check out date field
        checkOut.datetimepicker( {
            format: 'DD/MM/YYYY',
            minDate: new Date()
        } );
    }

    if ( checkOut.length && checkIn.length ) {
        //set the chek out date at least check in date
        checkIn.on("dp.change", function (e) {
            checkOut.data("DateTimePicker").minDate(e.date);
        });
    }
} );