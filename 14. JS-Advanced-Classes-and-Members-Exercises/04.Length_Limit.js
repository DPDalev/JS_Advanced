class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;

    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerString.length === 0) {
            return "...";
        } else {
            return this.innerString;
        }

    }
}