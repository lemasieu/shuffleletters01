let results = []; // Biến toàn cục để lưu kết quả

function shuffleLetters() {
    const input = document.getElementById('inputText').value;
    const cleanedInput = input.replace(/\s+/g, ''); // Loại bỏ khoảng trắng
    results = []; // Reset kết quả

    const allPermutations = getPermutations(cleanedInput.split(''));

    // Thêm dấu "/" giữa các chữ cái trong từng hoán vị
    results = allPermutations.map(result => result.split('').join('/'));

    document.getElementById('output').value = results.join('\n'); // Cập nhật kết quả
}

function getPermutations(array) {
    if (array.length === 1) return [array];
    const results = [];
    for (let i = 0; i < array.length; i++) {
        const remaining = array.slice(0, i).concat(array.slice(i + 1));
        const perms = getPermutations(remaining);
        for (const perm of perms) {
            results.push([array[i]].concat(perm));
        }
    }
    return results.map(arr => arr.join(''));
}

function copyRandomLine() {
    if (results.length === 0) {
        alert('Vui lòng trộn chữ cái trước!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * results.length);
    const randomLine = results[randomIndex];

    navigator.clipboard.writeText(randomLine)
        .then(() => {
            alert('Đã sao chép: ' + randomLine);
        })
        .catch(err => {
            alert('Lỗi khi sao chép: ' + err);
        });
}