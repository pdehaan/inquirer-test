const inquirer = require("inquirer");

const questions = require("./questions");

async function main() {
  try {
    const questionArr = [
      questions.id,
      questions.xtype,
      questions.tellSI,
      questions.libraries
    ];
    const answers = await runPrompts(questionArr);
    console.log(answers);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

main();

async function runPrompts(questions) {
  return inquirer.prompt(questions);
}
