// Getting the Containers to manipulate them for the Content delivered from the Quiz-API
const questionOutput = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const btnNewQuestion = document.getElementById("new-question");

// saving the right answer to check it later
let rightAnswer = "";


// this is the function that gets executed when the user wants a new question
const getQuestion = () => {
  // clearing the laoding text from the GUI
  questionOutput.innerHTML = "";
  answerContainer.innerHTML = "";

  // getting the question data from the API
  fetch("https://opentdb.com/api.php?amount=1&encode=url3986")
  // taking the response an converting it to json
    .then((response) => response.json())
    // taking the json data an getting everything onto the GUI
    .then((data) => {
      // empty array for storing all the answers
      answerArray = [];
      // storing the question
      question = data.results[0].question;
      // creating the questionContainer
      const qContainer = document.createElement("p");
      // putting the question text into the container
      qContainer.textContent = decodeURIComponent(question);
      // getting the question container to the UI
      questionOutput.appendChild(qContainer);

      // creating the answers
      answerArray.push(data.results[0].correct_answer);
      // saving the right anwer in decoded format to check it later on
      rightAnswer = decodeURIComponent(data.results[0].correct_answer);
      answerArray = answerArray.concat(data.results[0].incorrect_answers);
      // randomize the answer array. If the random number is lower than 0 the element is left - otherwise its right
      answerArray.sort(() => Math.random() - 0.5);

      // pushing every answer to the UI
      for (answer of answerArray) {
        const newAnswer = document.createElement("p");
        // again encoded. this is why we encoded the right answer beforehand to check the same value in the rightAnswer variable
        newAnswer.textContent = decodeURIComponent(answer);
        // give it some style over css to make right answer pop out
        newAnswer.setAttribute("class", "new-answer");
        // send the text content of the answer to the function checkAnswer. Doin it over arrow function to not trigger the event on loadup
        newAnswer.onclick = () => checkAnswer(newAnswer.textContent);
        // push to GUI
        answerContainer.appendChild(newAnswer);
      }
    });
};

const checkAnswer = (answer) => {
  // this checks if the sended Answer is the correct one
  if (answer == rightAnswer) {
    // clearing the UI
    answerContainer.innerHTML = "";
    // creating new element for winner anouncement
    const winnerContainer = document.createElement("p");
    // give it some style and a text to pop out
    winnerContainer.setAttribute("class", "winner");
    winnerContainer.innerHTML = "that was <br> RIGHT <br> <h1>😁</h1>";
    // push to GUI
    answerContainer.appendChild(winnerContainer);
  } else {
    // if loosing 
    // clear GUI
    answerContainer.innerHTML = "";
    const winnerContainer = document.createElement("p");
    // give it some looser style
    winnerContainer.setAttribute("class", "looser");
    winnerContainer.innerHTML = `Mep ... that was soooooo wrong! <br> The right Answer was "${rightAnswer}" <br> <h1>😒</h1>`;
    // push to GUI
    answerContainer.appendChild(winnerContainer);
  }
};

btnNewQuestion.onclick = getQuestion;
