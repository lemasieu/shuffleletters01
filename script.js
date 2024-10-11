let results = []; // Biến toàn cục để lưu kết quả

        function shuffleLetters() {
            const input = document.getElementById('inputText').value;
            const words = input.split(' ');
            results = []; // Reset kết quả
            const allPermutations = words.map(word => getPermutations(word.split('')));

            const maxLength = Math.max(...allPermutations.map(arr => arr.length));
            for (let i = 0; i < maxLength; i++) {
                const line = words.map((word, index) => {
                    const permutations = allPermutations[index];
                    return permutations[i % permutations.length] || word; // Xử lý nếu hết hoán vị
                }).join(' '); // Kết hợp các từ lại với nhau
                results.push(line);
            }

            // Thêm dấu "/" giữa các chữ cái trong từng từ
            const finalResults = results.map(result => 
                result.split(' ').map(word => word.split('').join('/')).join(' ')
            );

            document.getElementById('output').value = finalResults.join('\n');
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
            const randomLine = results[randomIndex].split(' ').map(word => word.split('').join('/')).join(' ');

            navigator.clipboard.writeText(randomLine)
                .then(() => {
                    alert('Đã sao chép: ' + randomLine);
                })
                .catch(err => {
                    alert('Lỗi khi sao chép: ' + err);
                });
        }