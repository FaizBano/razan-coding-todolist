#! bin/usr/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
console.log(chalk.yellowBright.bold.underline("\n\t Wel come to my TODO LIST\n\t"));
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([{
            name: "addtask",
            type: "input",
            message: "\n\t Enter your new task \n\t",
        },
    ]);
    todoList.push(addtask.addtask);
    console.log((chalk.red.bold `\n\t ${addtask.addtask}
     task added in todo list successfully\n\t`));
    let addmoretask = await inquirer.prompt([{
            name: "addmore",
            type: "confirm",
            defult: "false",
            message: "Do You Wnat to Add More Task",
        }]);
    condition = addmoretask.addmore;
    {
        console.log(`\n\t your updated todo list ${todoList} \n\t`);
        console.log("\n\t your updated to do list\n\t", todoList);
    }
}
