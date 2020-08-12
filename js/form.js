class Form{
constructor(){





}
display(){
var namebox = createInput("Name")
var playbutton = createButton("Play")
namebox.position(130,160)
playbutton.position(130,300)
playbutton.mousePressed(function(){
    namebox.hide();
    playbutton.hide();
    var name = namebox.value();
    playerCount ++
    player.update(name);
    player.updateCount(playerCount);
    var greeting = createElement("H3")
    greeting.html("Hi"+name)
    greeting.position(130,160)
})

}
}