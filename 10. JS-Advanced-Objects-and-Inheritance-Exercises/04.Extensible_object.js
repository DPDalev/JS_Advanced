let extendableObj = function (template) {
    let obj = {
        extend: (template) => {
            for (let property in template)
                console.log(template[property]);
        }
    }
}