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
console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));

