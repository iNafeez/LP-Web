function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}
addStyleString('@keyframes fadein {50%{opacity:0}100%{opacity:1}}');