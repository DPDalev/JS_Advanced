function outer() {
    let inner = () => console.log(this);
    inner();
}

let obj = {
    name: 'peter',
    f: outer
};
obj.f();