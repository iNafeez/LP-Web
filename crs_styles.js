var existCondition = setInterval(function() {
 if ($('#FlexLoanTopChatBubble').length) {

function ChatFlexLoanBubble() {
  const displayNoneFlexLoanTopChatBubble = document.getElementById("FlexLoanTopChatBubble");
  displayNoneFlexLoanTopChatBubble.style.display = displayNoneFlexLoanTopChatBubble.style.display === 'block' ? '' : 'block';
}
setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs

    clearInterval(existCondition);
 }
}, 100); // check every 100ms
