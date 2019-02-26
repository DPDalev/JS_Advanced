function counterClosure() {
    let counter = 0;

    function getNextCount(){
        return(++counter);
    }
    return getNextCount();
    let count = counterClosure();

    count();
}





