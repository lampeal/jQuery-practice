$(document).ready(function() {
    
    // Lisää tapahtumakuuntelija
    $('.inputField button').on('click', newLine);
    
    // Luo uusi tehtävä
    function newLine(){
        if ($(".inputField input").val() !== '') {
            var newTask = $("<li></li>").text($(".inputField input").val());
            var del = $("<i class='fas fa-trash-alt'></i>");
            $(".todoList").append(newTask)
            $(newTask).append(del); 
            
            $(".inputField input").val("");
            
            del.on('click', function() {
                $(this).parent().remove();
            });
        }
    }
});