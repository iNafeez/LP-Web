function waitForElement(elementId, callBack){
  window.setTimeout(function(){
    var element = document.getElementById(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitForElement(elementId, callBack);
    }
  },500)
}

waitForElement("ChatFlexLoanBubble",function(){

  function ChatFlexLoanBubbleDisplay() {
    document.getElementById("flexLoanTopChatBubble").style.display = "block";
  }
  setTimeout("ChatFlexLoanBubbleDisplay()", 5000); // after 5 secs


});
