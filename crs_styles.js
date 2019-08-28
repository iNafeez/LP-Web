waitForElement("#FlexLoanTopChatBubble").then(function(element) {
    	function ChatFlexLoanBubble() {
	  const displayNoneFlexLoanTopChatBubble = document.getElementById("FlexLoanTopChatBubble");
	  displayNoneFlexLoanTopChatBubble.style.display = displayNoneFlexLoanTopChatBubble.style.display === 'none' ? '' : 'none';
	}
	setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs
);
});
