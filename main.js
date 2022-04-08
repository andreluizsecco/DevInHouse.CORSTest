function testCORS() 
{
    $.ajax
    ({
        url: $("#url").val(),
        success: function(data) 
        {
            $("#result").text('CORS Success!');
            $("#result").css("color", "green");
        },
        error: function () {
            $("#result").text('CORS Error');
            $("#result").css("color", "red");
        }
    });
}
