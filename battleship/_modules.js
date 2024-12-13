function Ship(name) {
    const name = name
    const length = () => {
        switch (name) {
            case 'carrier':
                5
                break;
            case 'battleship':
                4
                break;
            case 'destroyer':
                3
                break;
            case 'submarine':
                3
                break;
            case 'patrol boat':
                2
                break;
            default:
                break;
        };
    }
    const hit = 0
    const isSunk = () => {
        if (hit === length) {
            return true
        } else return false
    };

    return {name, length, hit, isSunk}
}

function GameBoard() {
    switch (key) {
        case value:

            break;

        default:
            break;
    }
}