console.log("You started crafting! It will be done in 10 seconds!");
function crafting(){
    console.log("Your item has been built");
}
setTimeout(crafting, 10000);

setTimeout(function(){
    console.log("Hey there!")
}, 5000);