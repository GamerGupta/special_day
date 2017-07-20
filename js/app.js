var caption = "Keep Dancing like an idiot and always keep smiling like this my cutuuuuuuuuuuuuu.....";
    var captionLength =0;
$(".giftBtn").click(function(){
    $("#start").addClass("hidden");
    $("#more").removeClass("hidden");
    typingEffect();
    setTimeout(function(){
        $(".popup").slideDown();
    },800);
    
});

function typingEffect()
{
    
    
    $(".caption").html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('typingEffect()', 80);
    } else {
        captionLength = 0;
        caption = '';
        
    }
}

function popup()
{
    $(".popup").slideDown();
}

$('#popupBtn').click(function(){
    /*$.when(test()
              
    ).then(function(){
        $("#wishes").slideDown(2000);
    });*/
    $("#more").slideUp();
    setTimeout(function(){
            $("#wishes").slideDown();
    },1000);
    
});
function test()
{
     $("#more").slideUp(); 
}

$("#caretBtn").click(function(){
                     $("#wishes").hide();
                        $("#family").fadeIn(1000);
                        setTimeout(function(){
                                $("#dreams").fadeIn(3000);    
                        },2000);
                        setTimeout(function(){
                                $("#friends").fadeIn(3000);    
                        },6000);
                        setTimeout(function(){
                            final()
                        },10000);
                     });

function final()
{
    $("#final").slideDown(2000);
}