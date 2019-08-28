function waitFor(selector) {
    return new Promise(function (res, rej) {
        waitForElementToDisplay(selector, 200);
        function waitForElementToDisplay(selector, time) {
            if (document.querySelector(selector) != null) {
                res(document.querySelector(selector));
            }
            else {
                setTimeout(function () {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
    });
}


waitFor("#FlexLoanTopChatBubble").then(function() {
    	function ChatFlexLoanBubble() {
	  document.getElementById("FlexLoanTopChatBubble").style.display = "block";
	}
	setTimeout("ChatFlexLoanBubble()", 5000); // after 5 secs
});
