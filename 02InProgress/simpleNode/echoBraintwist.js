const readline = require('readline'); // okay, we need some kind of module to read every line a user gives to us

const rl = readline.createInterface({ // We need to create an interface for readline to tell him where the cool stuff happens
    input: process.stdin, // This is were we define what the interface has to read. It reads keyboard input from the users
    output: process.stdout // this is were we define where we show our stuff. This is just the console
});
const questions = [ // just defining a few questions
    "Hello. What's your name? ",
    "How old are you? ",
    "Which sport are you doing to keep fit? ",
    "Do you like the conversation? "
];

const answers = [
  // this is actually pretty cool, since this is an array of fucking functions!!!!!! Can you believe it???? FUCKING FUNCTIONS IN AN ARRAY!!!!!
  (name) => `\n\nNice to meet you, ${name.trim()}.`, // only made possible since in JS even Functions are just Objects.
  (age) =>
    `\n\nOhhh.... ${age.trim()} is really old. Which sport are you doing to keep fit?`, // I hate the template string, but this has style!
  (sport) =>
    `\n\n${sport.trim()} is a nice way of staying fit. Do you like the conversation?`,
  (response) =>
    `\n\n${response.trim()} .... meh, I actually don't care since I'm just a Chatbot. :p`,
];

let index = 0; // meh ... just an index. Nothing special happening here

const askQuestion = () => { // setting up the function to ask some questions
    if (index < questions.length) { // yep, if we have some questions left, we are going forward through this
        rl.question(questions[index], (answer) => {// again pretty cool stuff, since the .question method is just a method that writes the first argument to the output and waits for the response
            console.log(answers[index](answer)); // within the second argument (callback) we take the input and forwarding it into our fucking fuctions answer array .... BRAINTWIST
            index++; // meh ... 
            askQuestion(); // and then FUCKING RECURSE to our questions again to stay in line since we're doing this shit async and this is the only way we make sure, that this gets done one by one
        });
    } else {
        rl.close(); // yup, when were done were going home :) ... and WE ARE FUCKING DONE!!!!
    }
};

askQuestion();
