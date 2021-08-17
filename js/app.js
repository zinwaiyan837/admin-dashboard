$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:0});
});
$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
});
// data table
$('#dataList').DataTable();

function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },1000)
    
};
 
$(function () {
    $('[data-toggle="popover"]').popover()
  })
  $(".full-screen-btn").click(function(){
    //  jquery parent selector
    let current = $(this).closest(".card");
      current.toggleClass("full-screen-card");
      if(current.hasClass('full-screen-card')){
          $(this).html(`<i class="feather-minimize-2 text-outline-primary"></i>`)
      }else{
        $(this).html(`<i class="feather-maximize-2 text-outline-primary"></i>`)
      }

    //second method
    // $(".arrow").toggleClass("feather-minimize-2")
  });

  


  // auto  scroll sidebar
  let h =$(window).height() ;
  
  let active = $(".nav-menu .active").offset().top;
  console.log(active);
  if(active > h*0.8){
    $(".sidebar").animate({
      scrollTop:active-200
      
    },1000)
  }
