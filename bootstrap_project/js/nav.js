/**
 * Created by acer on 2019/1/13.
 */
$(function () {
    $("nav .container-fluid .collapse ul li").hover(
        function(){
            $(this).find("div").stop(true,true).animate({top:"40px"},500)
                .css({display:"block"})
        },
        function(){
            $(this).find("div").stop(true,true).animate({top:"50px"},200)
                .css({display:""})
        }
    )
    $("#sp_banner .left ul li").click(function(){
        var i=$(this).index();
        $("#sp_banner .left ul li").css({backgroundColor:"transparent"})
        $(this).css({backgroundColor:"deeppink"})
        $("#sp_banner .right ul li").stop(true,true).hide(1000);
        $("#sp_banner .right ul li").stop(true,true).eq(i).show(1000);
    })
})