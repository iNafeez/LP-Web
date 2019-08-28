function ChatFlexLoanBubble() {
  const displayNoneFlexLoanTopChatBubble = document.getElementById("FlexLoanTopChatBubble");
  displayNoneFlexLoanTopChatBubble.style.display = displayNoneFlexLoanTopChatBubble.style.display === 'none' ? '' : 'none';
  displayNoneFlexLoanTopChatBubble.style.transition="opacity 1s";
  displayNoneFlexLoanTopChatBubble.style.opacity="0";
}
setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs
