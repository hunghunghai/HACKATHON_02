function getDaysInMonth() {
    // Nhập vào tháng và năm
    let month = +document.querySelector("#month").value;
    let year = +document.querySelector("#year").value;
    // Kiểm tra xem tháng đó có bao nhiêu ngày
    let day = 0
    switch (month) {
        case 1:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31
            alert(`Số ngày trong tháng ${month} năm ${year} là ${day} ngày.`)
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30
            alert(`Số ngày trong tháng ${month} năm ${year} là ${day} ngày.`)
        case 2:
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                day = 29
                alert(`Số ngày trong tháng ${month} năm ${year} là ${day} ngày.`)
            } else {
                day = 28
                alert(`Số ngày trong tháng ${month} năm ${year} là ${day} ngày.`)
            }
        default:
            alert("Tháng bạn nhập k có")
            return;
    }

}




