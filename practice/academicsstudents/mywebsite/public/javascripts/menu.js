$(document).ready(function(){
    var element=$('meta [name="active"]').attr('content')
    $('#'+element).addClass('active')
})