function clllick(){
    var player1name=document.getElementById("player1nameinput").value;
    var player2name=document.getElementById("player2nameinput").value;
   
    localStorage.setItem("player2nameinput",player2name);
    localStorage.setItem("player1nameinput",player1name);
    window.location="game_page.html";
   }