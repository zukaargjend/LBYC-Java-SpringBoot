$(document).ready(function() {
    $("#submitButton").click(function(event) {
        console.log("addRole");
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/addRole",
            data: $("#addRole").serialize(),
            success: function (result) {
                if(result.isSaved){
                    $(".alert-success").removeAttr('hidden');
                    $(".alert-danger").attr('hidden','');
                    $("#addRole")[0].reset();
                }
                else{
                    $(".alert-danger").removeAttr('hidden');
                    $(".alert-success").attr('hidden','');
                }
            }
        });
    });
});