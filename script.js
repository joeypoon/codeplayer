var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();

$(".codeContainer").height(windowHeight - menuBarHeight + "px");
$(".toggle").click(function() {

    $(this).toggleClass("selected");

    var activeDiv = $(this).html();

    $("#" + activeDiv + "Container").toggle();

    var showingDivs = $(".codeContainer").filter(function() {

        return($(this).css("display")!="none");

    }).length;

    var width = 100 / showingDivs;

    $(".codeContainer").width(width+"%");

})

$("#runButton").click(function() {

    $("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

    document.getElementById("resultFrame").contentWindow.eval($("$jsCode").val());

});
