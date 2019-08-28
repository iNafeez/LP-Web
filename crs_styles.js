function addCss(rule) {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}

// CSS rules
let rule  = '@keyframes fadein {50%{opacity:0}100%{opacity:1}}';

// Load the rules and execute after the DOM loads
window.onload = function() {addCss(rule)};
