let score = 0; 
let answeredQuestion1 = false; 
let answeredQuestion2 = false; 

function checkAnswer(answer, questionNo) {
    const result = document.getElementById('result' + questionNo);

    if (questionNo === 1) {
        if (!answeredQuestion1) { 
            if (answer === 'a') {
                score += 1; 
                result.textContent = "คำตอบถูกต้อง";
                result.style.color = 'green';
                answeredQuestion1 = true;
                document.getElementById("answer1a").style.backgroundColor = "#214958";
                document.getElementById("answer1a").style.color = "white";
            } else {
                score = score; 
                result.textContent = "คำตอบผิด!";
                result.style.color = 'red';
            }
        } else {
            result.textContent = "คุณได้ตอบข้อนี้ถูกไปแล้ว"; 
            result.style.color = "blue";
        }
    } else if (questionNo === 2) {
        if (!answeredQuestion2) { 
            if (answer === 'b') {
                score += 1; 
                result.textContent = "คำตอบถูกต้อง";
                result.style.color = 'green';
                answeredQuestion2 = true;
                document.getElementById("answer2b").style.backgroundColor = "#214958";
                document.getElementById("answer2b").style.color = "white";
            } else {
                score = score; 
                result.textContent = "คำตอบผิด!";
                result.style.color = 'red';
            }
        } else {
            result.textContent = "คุณได้ตอบข้อนี้ถูกไปแล้ว"; 
            result.style.color = "blue";
        }
    }

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = "คะแนน: " + score;
}
