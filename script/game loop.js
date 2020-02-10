/*
    Manages the game loop
*/


function gameLoop() {

    updatePlayerDirection(playerOne);
    updatePlayerDirection(playerTwo);

    updatePlayerPosition(playerOne);
    updatePlayerPosition(playerTwo);

    checkForAttack(playerOne);
    checkForAttack(playerTwo);

    updateBulletDirection();
    updateBulletPostion();

    cooldownWeapon(playerOne);
    cooldownWeapon(playerTwo);


}








function updatePlayerDirection(player) {

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



function updatePlayerPosition(player) {

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


function checkForAttack(player) {
    
    /*
        Check if the player is shooting
        If shooting, then check if weapon is on cool down
        If not on cooldown, create a bullet
    */

    if(player.control.shoot) {
        if(player.weapon >= 5) {
            var direction = player.control;
            bullets.push(new bullet("id" + bullets.length, player.element.style.left, player.element.style.top, direction.up, direction.right, direction.down, direction.left));
            createBullet("id" + (bullets.length - 1), player.element.style.left, player.element.style.top);
            player.weapon = 0;
        }
    }

}

function createBullet(identification, left, top) {
    var newBullet = document.createElement("div");
    newBullet.className = "bullet";
    newBullet.id = identification;
    newBullet.style.left = left;
    newBullet.style.top = top;
    document.body.append(newBullet);
}


function updateBulletDirection() {
    for(var index = 0; index < bullets.length; index++) {
        var bullet = document.getElementById(bullets[index].id);
        if(parseInt(bullet.style.top) < 0) {
            bullets[index].direction.up = false;
            bullets[index].direction.down = true;
        }
        if(parseInt(bullet.style.top) > 96) { 
            bullets[index].direction.down = false;
            bullets[index].direction.up = true;
        }
        if(parseInt(bullet.style.left) < 0) {
            bullets[index].direction.left = false;
            bullets[index].direction.right = true;
        }
        if(parseInt(bullet.style.left) > 97) {
            bullets[index].direction.right = false;
            bullets[index].direction.left = true;
        }
    }
}



function updateBulletPostion() {
    for(var index = 0; index < bullets.length; index++) {
        var bullet = document.getElementById(bullets[index].id);
        if(bullets[index].direction.left) {
            var pos = bullet.style.left;
            pos = parseInt(pos);
            pos -= BULLET_SPEED;
            bullet.style.left = pos + "%";
        }
        if(bullets[index].direction.up) { 
            var pos = bullet.style.top;
            pos = parseInt(pos);
            pos -= BULLET_SPEED;
            bullet.style.top = pos + "%";  
        }
        if(bullets[index].direction.right) {
            var pos = bullet.style.left;
            pos = parseInt(pos);
            pos += BULLET_SPEED;
            bullet.style.left = pos + "%";
        }
        if(bullets[index].direction.down) {
            var pos = bullet.style.top;
            pos = parseInt(pos);
            pos += BULLET_SPEED;
            bullet.style.top = pos + "%"; 
        }
    }
}


function cooldownWeapon(player) {
    player.weapon += 0.1;
}

