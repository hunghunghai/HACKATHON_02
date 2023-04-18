function normalizeSentence(sentence) {
    let words = sentence.trim().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}

// Sử dụng hàm

let string = prompt("nhập vào đoạn text bất kỳ để chuẩn hóa")
let sentence1 = string;
console.log(normalizeSentence(sentence1));
  /**
 * ví dụ người dùng nhập vào 1 đoạn chuỗi :
 * "     bÀi hÔm naY kHó thật       "
 * thì : e sử dụng hàm .trim() để loại bỏ cách khoảng cách ở đầu và cuối của chuỗi mà người dùng nhập vào
 * sau đó e sử dụng .split để thêm đoạn chuỗi đó vào mảng với với nhiều phần tử cách nhau bởi khoảng cách
 * tiếp theo e sử dụng 1 vòng lặp for để duyệt qua các phần tử đó
 * ở đoạn này ' words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); '
 * Trong đoạn mã này,e sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng words, và thực hiện các bước chuẩn hóa từ.
 * Cụ thể, với mỗi phần tử words[i] (tức là mỗi từ trong câu), ta sẽ thực hiện các bước sau
 * words[i][0].toUpperCase() để chuyển đổi ký tự đầu tiên của từ thành chữ hoa.
 * words[i].slice(1).toLowerCase() để chuyển đổi các ký tự còn lại của từ thành chữ thường. Ví dụ: nếu từ ban đầu là "tEst", bước này sẽ trả về chuỗi "est" và sau đó ta thêm ký tự đầu tiên đã chuyển đổi thành chữ hoa vào trước chuỗi này.
 * Gán chuỗi đã chuẩn hóa trở lại cho phần tử words[i].
 * Ví dụ, nếu từ ban đầu là "bÀi", sau khi chuẩn hóa, từ đó sẽ trở thành "Bài"
 * vòng lặp này giúp chuẩn hóa các từ trong mảng words theo yêu cầu của đề bài, 
 * tức là chuyển đổi ký tự đầu tiên của từ thành chữ hoa và các ký tự khác thành chữ thường.
 */