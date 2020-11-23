$(".addtask").on("keyup", function(){
    // 13 means the enter button.
    if(event.keyCode === 13 && $(".addtask").val() !=""){
        var task = $("<div class='task'></div>").text($(".addtask").val());

        // Press trash icon, the task get removed.
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        // Press checked icon, the tasks is going to done.
        var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
                $(".done").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });

        task.append(del, check);


        $(".todo").append(task);

        // To clear the input
        $(".addtask").val("");
    }

});