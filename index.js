import inquirer from "inquirer";
//Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count a word"
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
