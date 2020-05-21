
$(document).ready(function(){
    $("form#form-control").submit(function(event){
        var name = $("input#Name").val();
        event.preventDefault();
        if($("input#Name").val()){
            alert ("Hello, " + name + " we have received your request check your email for more information");
        }
    });
});