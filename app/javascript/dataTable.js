var dt = require( 'datatables.net-bs4' )( window, $ );

$(document).ready(function() {
    $('.dataTables_main').DataTable({
        pageLength: 25,
        ordering: false,
        orderable: false,
        responsive: true,
        dom: '<"html5buttons"B>lTfgitp'
    });
});