const output = document.getElementById("output");

let concatenatedOutput = ""

const doCalculation = () => {
    try {
        const result = eval(concatenatedOutput);
        output.value = result
        concatenatedOutput = result;
    } catch (error) {
        output.value = "Error";
    }
}

const showEntry = () => {
    output.value = concatenatedOutput;
}

const clearOutputAndCache = () => {
    output.value = "";
    concatenatedOutput = "";
}

const sendValue = (element) => {
    concatenatedOutput = concatenatedOutput + element;
    showEntry();
}

const undoLastCharacter = () => {
    concatenatedOutput = concatenatedOutput.slice(0, -1);
    showEntry();
}