const nums = [1, 52, 35, 6, 72, 7, 3, 19, 32, 54, 78, 95, 97];

// TODO: map over the array and multiply by 10 if it's in the even index.

const nums2 = nums.map((num, index) => {
    if(index % 2) {
    return num * 10}
    return num;
});

console.log(nums2);
