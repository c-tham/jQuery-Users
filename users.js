$(document).ready(function() {
    $('#form_adduser').submit(function() {
        // *** test append
        // $('tbody').append('<tr><td>test1</td><td>test2</td><td>test3</td><td>test4</td></tr>');
        console.log($(this).serialize());
        // *** test map
        // $('tbody').append('<tr><td>'+$('input').map(function() { return $(this).val() }).get() . join('</td><td>')+'</td></tr>');
        $('tbody').append('<tr><td>' 
            + $('input[name="firstname"]').val() + '</td><td>'
            + $('input[name="lastname"]').val() + '</td><td>'
            + $('input[name="email"]').val() + '</td><td>'
            + $('input[name="phonenumber"]').val() + '</td></tr>')
        return false;
    });

})