
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});


//codigo publicar en inicio
window.onload = function() {
    var sendButton = document.getElementsByName("publicar")[0];
    var thinkInput = document.getElementsByName("publication")[0];
    var comentaries = document.getElementsByName("comments")[0];
    sendButton.onclick = function() {
        if (thinkInput.value == "") {
            sendButton == null;
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "tuit"
            nameSpan.textContent = "Usuario";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            comentaries.insertBefore(tuitDiv, comentaries.children[0]);
        }
    }
}