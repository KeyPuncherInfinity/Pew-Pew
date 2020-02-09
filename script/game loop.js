/*
    Manages the game loop
*/


function gameLoop() {

    updatePosition(playerOne);
    updatePosition(playerTwo);
    // console.log(controlStatOne);
    // console.log(controlStatTwo);
}

function updatePosition(player) {

    /*
        Read position
        Update position
        Write back position
    */

    if (player.control.up) { 
        var pos = player.element.style.top;
        pos = parseInt(pos);
        pos -= SPEED;
        player.element.style.top = pos + "%";
    } // move UP

    if (player.control.left) { 
        var pos = player.element.style.left;
        pos = parseInt(pos);
        pos -= SPEED;
        player.element.style.left = pos + "%";
    } // move LEFT

    if (player.control.right) { 
        var pos = player.element.style.left;
        pos = parseInt(pos);
        pos += SPEED;
        player.element.style.left = pos + "%";
    } // move RIGHT

    if (player.control.down) { 
        var pos = player.element.style.top;
        pos = parseInt(pos);
        pos += SPEED;
        player.element.style.top = pos + "%";
    } // move DOWN

}
