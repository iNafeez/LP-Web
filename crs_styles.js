document.addEventListener("DOMContentLoaded", function(event) { 
var displayNoneFlexLoanTopChatBubble = document.getElementById('FlexLoanTopChatBubble').style;
displayNoneFlexLoanTopChatBubble.opacity = 1;
(function fade(){(displayNoneFlexLoanTopChatBubble.opacity-=.1)<0?displayNoneFlexLoanTopChatBubble.display="none":setTimeout(fade,40)})();
});
