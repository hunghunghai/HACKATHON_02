// sắp xếp theo thứ tự giảm dần k sử dụng hàm sort()

let array1 = [3, 25, 49, 38, 12];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length - i - 1; j++) {
        if (array1[j] < array1[j + 1]) {
            let temp = array1[j];
            array1[j] = array1[j + 1];
            array1[j + 1] = temp;
        }
    }
}

console.log("Sắp xếp giảm dần k dùng sort()",array1);

// sắp xếp theo thứ tự giảm dần có sử dụng hàm sort()

let array2 = [3, 25, 49, 38, 12];

array2.sort(function(min, max) {
  return max - min;
});

console.log("Sắp xếp giảm dần có dùng sort()",array2);