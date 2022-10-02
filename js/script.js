$(document).ready(function() {
    $(".one-clicks").click(function() {
        $(".hide-show").fadeToggle(function() {
            if($(".one-clicks").text() === "មើលបន្ថែម") {
                $(".one-clicks").text("លាក់");
            } else {
                $(".one-clicks").text("មើលបន្ថែម");
            }
        });
    });
    
    $(".two-clicks").click(function() {
        $(".hide-show-2").fadeToggle(function() {
            if($(".two-clicks").text() === "មើលបន្ថែម") {
                $(".two-clicks").text("លាក់");
            } else {
                $(".two-clicks").text("មើលបន្ថែម");
            }
        });
    });
});