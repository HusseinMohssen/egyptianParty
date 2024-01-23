/// <reference types="../@types/jquery" />


$(".openbtn").on("click",function(){

    $(".sidenav").width("20%")
    
})

$(".closebtn").on("click",function(){

    $(".sidenav").width("0")

})

$(".link-item").on("click",function(e){

    let aHref = e.target.getAttribute("href")
    let sectionoffest = $(aHref).offset().top
    $("html,body").animate({scrollTop:sectionoffest} , 2000)

}) 

$(".toggle").on("click",function(){

    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})

// Set the date and time to countdown to
const countdownDate = new Date("2025-01-01T00:00:00").getTime();

// Update the countdown every second
setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the elapsed time
  const elapsedTime = now - countdownDate;
  
  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
  // Display the elapsed time

  $(".day").html(`${days} D`);
  $(".hour").html(`${hours} h`);
  $(".min").html(`${minutes} m`);
  $(".sec").html(`${seconds} s`);
}, 1000);


  
