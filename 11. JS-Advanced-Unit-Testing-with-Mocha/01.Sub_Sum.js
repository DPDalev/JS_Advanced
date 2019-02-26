function subSum(arr, startIndex, endIndex) {

    if(startIndex < 0 ) {
        startIndex = 0;
    }

    if(endIndex < 0 || endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if( arr[i] !== Number(arr[i])) {
            return NaN;
        }
    }

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum += arr[i];
    }
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);