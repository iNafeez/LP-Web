	var SDK = lpTag.agentSDK || {};
$(function() {
    SDK.init();
});

function bind() {
    var bindKey = $(".bindInput").val();
    SDK.bind(bindKey, bindSuccess, createCallback('Bind'));

}

function bindSuccess(data){
    $(".bindResults").html(JSON.stringify(data));
    getLogFunction('INFO', 'Bind success!')(data);
}
