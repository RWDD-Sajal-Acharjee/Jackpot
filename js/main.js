$(document).ready(function(){
    'usr strict'


    // navbar item selection
    $("#NAVBAR .navbar ul li a").click(function(){
        // A li item is clicked
        // other li's to not active
        $("#NAVBAR .navbar ul li a").removeClass("active");
  
        // Add selected class to the clicked li
        $(this).addClass("active");
    });
    // End of navbar item selection

    $(".tournament-table .list-name").mCustomScrollbar({});

    // Frequenly ask question table start
    $('#d-1').click(function(){
        $('#p-1').slideToggle();
    });

    $('#d-2').click(function(){
        $('#p-2').slideToggle();
    });

    $('#d-3').click(function(){
        $('#p-3').slideToggle();
    });

    $('#d-4').click(function(){
        $('#p-4').slideToggle();
    });
    // Frequenly ask question table end

    // $(".list-name").mCustomScrollbar({});
    
    

})

