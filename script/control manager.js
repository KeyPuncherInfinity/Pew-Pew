/*
    Manages the control inputs
*/

function setKey() {
    var key = event.key;
    // set the key as true in the control object

    switch(key) {
        case 'w':
            playerOne.control.up = true;
        break;
        case 'a':
            playerOne.control.left = true;
        break;
        case 's':
            playerOne.control.down = true;
        break;
        case 'd':
            playerOne.control.right = true;
        break;
        case 'x':
            playerOne.control.shoot = true;
        break;
        // end of playerOne inputs
        case '8':
            playerTwo.control.up = true;
        break;
        case '4':
            playerTwo.control.left = true;
        break;
        case '5':
            playerTwo.control.down = true;
        break;
        case '6':
            playerTwo.control.right = true;
        break;
        case '2':
            playerTwo.control.shoot = true;
        break;
        // end of playerTwo inputs
        default: 
        return 0;
    }

}

function unsetKey() {
    var key = event.key;
    // set the key as false in the control object

    
    switch(key) {
        case 'w':
            playerOne.control.up = false;
        break;
        case 'a':
            playerOne.control.left = false;
        break;
        case 's':
            playerOne.control.down = false;
        break;
        case 'd':
            playerOne.control.right = false;
        break;
        case 'x':
            playerOne.control.shoot = false;
        break;
        // end of playerOne inputs
        case '8':
            playerTwo.control.up = false;
        break;
        case '4':
            playerTwo.control.left = false;
        break;
        case '5':
            playerTwo.control.down = false;
        break;
        case '6':
            playerTwo.control.right = false;
        break;
        case '2':
            playerTwo.control.shoot = false;
        break;
        // end of playerTwo inputs
        default: 
        return 0;
    }

}