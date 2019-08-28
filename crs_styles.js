document.addEventListener('DOMContentLoaded', function(event) {
	function ChatFlexLoanBubble() {
	  const displayNoneFlexLoanTopChatBubble = document.getElementById("FlexLoanTopChatBubble");
	  displayNoneFlexLoanTopChatBubble.style.display = displayNoneFlexLoanTopChatBubble.style.display === 'block' ? '' : 'block';
	}
	setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs
})
