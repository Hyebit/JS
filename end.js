let word = "제로초"
while (true) {
    let answer = prompt(word)
    if (word[word.length - 1] === answer[0]) {
        //맞았을 때
        alert('딩동댕!')
        word = answer;
    } else {
        //틀렸을 때
        alert('땡!')
    }
}