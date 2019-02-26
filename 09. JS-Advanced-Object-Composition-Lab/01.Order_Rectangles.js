function orderRectangles(rectanglesData) {

    function createRectangle(width, height) {

        let rect = {
            width: width,
            height: height,
            area: function() {
                return rect.width * rect.height
            },
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }

    let rectangles = [];

    for (let [width, height] of rectanglesData) {

        rectangles.push(createRectangle(width, height));
    }

    rectangles.sort((a, b) => a.compareTo(b));

    return rectangles;
}

orderRectangles([[10, 5], [5, 12]]);
orderRectangles([[10, 5], [3, 20], [5, 12]]);
