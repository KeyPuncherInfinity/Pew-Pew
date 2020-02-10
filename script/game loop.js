/*
    Manages the game loop
*/


function gameLoop() {

    updateDirection(playerOne);
    updateDirection(playerTwo);

    updatePosition(playerOne);
    updatePosition(playerTwo);

    
}








function updateDirection(player) {

    /*
        Read two direction values
        Set border radius accordingly
        There are a total of 8 possible directions
        Conditions will be checked clockwise starting from the top (ending at the top-left)
    */

    var direction = player.control; // store the control values in a new object for easy access
    player.element.style.borderRadius = "40px"; // reset the border radius from the previous frame

    if(direction.up && direction.right) {
        player.element.style.borderBottomLeftRadius = "0px";
    }
    else if(direction.right && direction.down) {
        player.element.style.borderTopLeftRadius = "0px";
    }
    else if(direction.down && direction.left) {
        player.element.style.borderTopRightRadius = "0px";
    }
    else if(direction.left && direction.up) {
        player.element.style.borderBottomRightRadius = "0px";
    }
    else if(direction.up){
        player.element.style.borderBottomLeftRadius = "0px";
        player.element.style.borderBottomRightRadius = "0px";
    } 
    else if(direction.right) {
        player.element.style.borderTopLeftRadius = "0px";
        player.element.style.borderBottomLeftRadius = "0px";
    }
    else if(direction.down) {
        player.element.style.borderTopLeftRadius = "0px";
        player.element.style.borderTopRightRadius = "0px";
    }
    else if(direction.left) {
        player.element.style.borderTopRightRadius = "0px";
        player.element.style.borderBottomRightRadius = "0px";
    }

}



function updatePosition(player) {

    /*
        Read position
        Check for borders
        Update position if not on border
        Write back position
    */

    if (player.control.up) { 
        var pos = player.element.style.top;
        pos = parseInt(pos);
        if(pos > 0){
            pos -= SPEED;
        }
        player.element.style.top = pos + "%";
    } // move UP

    if (player.control.left) { 
        var pos = player.element.style.left;
        pos = parseInt(pos);
        if(pos > 0){
            pos -= SPEED;
        }
        player.element.style.left = pos + "%";
    } // move LEFT

    if (player.control.right) { 
        var pos = player.element.style.left;
        pos = parseInt(pos);
        if(pos < 98)
        {
            pos += SPEED;
        }
        player.element.style.left = pos + "%";
    } // move RIGHT

    if (player.control.down) { 
        var pos = player.element.style.top;
        pos = parseInt(pos);
        if(pos < 95.8) {
            pos += SPEED;
        }
        player.element.style.top = pos + "%";
    } // move DOWN

}
