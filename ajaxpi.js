$(document).ready(function(){
    $("#movies").load(movies.html);
    $("#movies").change(function(){
        let movie = $(this).val();
        let apiUrl = " https://api.themoviedb.org/3/movie/"
         + movie
         +"?api_key=ecec3c390c3e80233f0ba6d269035dc6&language=en-US";
         $.ajax({
             url:apiUrl,
             type:"GET",
             dataType:"json",
             success:function(response){
                 $.each(response,function(){
                     $("#moviesinfo").html("");
                     $("#movieinfo").append(response.overview);
                     if($("#movieinfo").attr("hidden")){
                         $("#movieinfo").show();
                     }
                     $("#movieinfo").css({
                         "border-color": "#CIEOFF",
                         "border-weight":"1px",
                         "border-style":"solid",
                         "margin-top":"1rem",
                         "width":"50%",
                         "padding":"0.5rem"
                      } );
                 });
             },
             error:function(xhr,error){
                 $("#info").append(error.toUpperCase()+". HTTP status:" +xhr.status);
             }
         });

    });
});