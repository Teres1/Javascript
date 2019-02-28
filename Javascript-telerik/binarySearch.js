function binarySearch(Arr, value) {
    var low = 0, high = Arr.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (Arr[mid] > value) {
            high = mid - 1;
        } else if (Arr[mid] < value) {
            low = mid + 1;
        } else {

            return mid;
        }


    }

    return -1;
}
n = 5;
Arr = [1, 2, 3, 4, 5, 5];
value = 5;
console.log(binarySearch(Arr, value));