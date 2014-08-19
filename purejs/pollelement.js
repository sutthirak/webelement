var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    var root = this.createShadowRoot();
    root.innerHTML = "<style>input[type=\"radio\"]{margin-right: 10px;}</style>" +
                     "which one is the best browser ?"+
                     "<form name=\"poll\" action=\"\">"+
                     	"<input type=\"radio\" name=\"result\" value=\"firefox\">Firefox<br>"+
                     	"<input type=\"radio\" name=\"result\" value=\"chrome\">Chrome<br>"+
                     	"<input type=\"radio\" name=\"result\" value=\"safari\">Safari<br>"+
                     	"<input type=\"radio\" name=\"result\" value=\"ie\">Internet Explorer<br>"+
                     	"<input type=\"submit\"> <a href=\"\">result</a>"+
                     "</form>";
};
 
document.registerElement('poll-element', {prototype: proto});
