	var SDK = lpTag.agentSDK || {};
$(function() {
    SDK.init();
});

function bind() {
    var bindKey = $(".bindInput").val();
}

function bindSuccess(data){
    $(".bindResults").html(JSON.stringify(data));
    console.log(data);
}
