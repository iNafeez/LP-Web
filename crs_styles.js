var onElementReady = function($element) {
  return new Promise((resolve) => {
    var waitForElement = function() {
      if ($element) {
        resolve($element);
      } else {
        window.requestAnimationFrame(waitForElement);
      }
    };
    waitForElement();
  })
};

var $someElement = document.querySelector('#FlexLoanTopChatBubble');
onElementReady($someElement)
  .then(() => {
	function ChatFlexLoanBubble() {
	  const displayNoneFlexLoanTopChatBubble = document.getElementById("FlexLoanTopChatBubble");
	  displayNoneFlexLoanTopChatBubble.style.display = displayNoneFlexLoanTopChatBubble.style.display === 'block' ? '' : 'block';
	}
	setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs
  }
  );
