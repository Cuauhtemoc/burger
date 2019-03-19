$(document).ready(function(){
    
    $(".devour-burger").on("click", function(){
        var id = $(this).data("id");
        var devouredBool = $(this).data("devoured")
        
        var devouredState = {
            devoured: devouredBool
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(data){
            location.reload();
            console.log("here");
            console.log(data);
        })
    })
    $("#new-burger").on("click", function(event){
        event.preventDefault()
        newBurger = $("#burger").val().trim();
        $.post("/api/burgers", {burger_name: newBurger}, function(err,data){
            if(err){
                console.log(err);
            }
            location.reload();
        });
    });
});
 