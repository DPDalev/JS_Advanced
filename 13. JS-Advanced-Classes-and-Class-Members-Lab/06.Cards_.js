let Suits = {
    SPADES: '\u2660',
    HEARTS: '\u2665',
    DIAMONDS: '\u2666',
    CLUBS: '\u2663'
};
class Card{
        constructor(face, suit){
        this._face = face;
        this._suit = suit;
    }
    get face() {
        return this._face;
    }

    set face(value) {
        this._face = value;
    }

    get suit() {
        return this._suit;
    }

    set suit(value) {
        this._suit = value;
    }

    toString(){
        return this._face + this._suit;
    }



}

console.log(Suits.CLUBS);
