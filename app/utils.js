const findAllIndexes = (list, value) => {
//    if the value is not in the list, return -1
// otherwise return an array with all indices that contain the value
    list.map((item, index) => {
        if (item === value) {
            return index;
        }
    });
}