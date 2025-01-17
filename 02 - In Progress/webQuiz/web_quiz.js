const questionOutput = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const btnNewQuestion = document.getElementById("new-question");





const getQuestion = () => {
    questionOutput.innerHTML = "";
    answerContainer.innerHTML = "";

    fetch("https://opentdb.com/api.php?amount=1&difficulty=easy")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        answerArray = [];
        question = data.results[0].question;
        
        // creating the question
        const qContainer = document.createElement("p");
        qContainer.textContent = question;
        questionOutput.appendChild(qContainer);
        
        // creating the answers
        answerArray.push(data.results[0].correct_answer);
        answerArray = answerArray.concat(data.results[0].incorrect_answers);
        console.log(answerArray);

        for (answer of answerArray) {
            console.log(answer);
            const newAnswer = document.createElement("p");
            newAnswer.textContent = answer;
            newAnswer.setAttribute("class", "new-answer");
            newAnswer.onclick = checkAnswer;
            answerContainer.appendChild(newAnswer);
        }
        

      });
}

const checkAnswer = () => {
    console.log("here comes the answer");
}


btnNewQuestion.onclick = getQuestion;