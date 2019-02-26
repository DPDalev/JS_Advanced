( function () {

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let Suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() { return this._face; };

        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            }
            return this._face = face;
        }

        get suit() { return this._suit };

        set suit(suit) {
            if (!Object.keys(Suits)
                    .map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit: " + suit);
            }
            return this._suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    return {Suits, Card};
}());

let Card = result.Card;
let Suits = result.suits;

let card = new Card("Q", Suits.clubs);
console.log(card.face, card.suit);
card.face = "A";
card.suit = Suits.diamonds;
//console.log(card);

let card2 = new Card("1", Suits.diamonds);