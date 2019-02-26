function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const cardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const cardSuits = ['S', 'H', 'D', 'C'];
        if(!cardFaces.includes(face)) {
            throw new Error("Error");
        }

        if(!cardSuits.includes(suit)) {
            throw new Error("Error");
        }

        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };
                return card.face + suitToChar[card.suit]
            }
        }
        return card;
    }
    let deck = [];
    for (let card of cards) {

        let suit = card.substr(card.length - 1, 1);
        let face = card.substring(0, card.length - 1);

        try {
            deck.push(makeCard(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + card);
            return;
        }
    }
    console.log(deck.join(", "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);