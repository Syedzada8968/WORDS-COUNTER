#! /usr/bin/env node

//this line is shabang
import inquirer from "inquirer";

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function


const answers: {
    Sentence: string
 } = await inquirer.prompt([
      {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count a word"
      },
]);

const words = answers.Sentence.trim().split(" ")

console.log(words)

console.log(`Your Sentence word count is ${words.length}`);
