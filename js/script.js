$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault()
    //collect the letter input 
    const firstAndLastName = $("#name").val();
    const companyName = $("#cname").val();
    const appointmentPurpose = $("#basic-url").val();
    const appointmentDate = $("#date").val();
    const appointmentTime = $("#time").val();


    $(".fullname").html(firstAndLastName.toUpperCase());
    $(".date").html(appointmentDate);
    $(".time").html(appointmentTime);
    

    $(".display").fadeIn();
    $(".center").fadeOut();
    $("h3").fadeOut()
    $("h1").fadeOut()
  })
})