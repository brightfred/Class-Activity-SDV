import inquirer from 'inquirer';

// async function askConfirmation() {
//   const question =
//     {
//       type: 'confirm',
//       name: 'proceed', 
//       message: 'Are you sure you want to continue?',
//       default: false // default value if nothing is entered
//     };
//     const answer = await inquirer.prompt(question);
//     if (answer.proceed) {
//       console.log('Proceeding...');
//     }else{
//       console.log('You chose not to proceed.');
//     }
// }

// askConfirmation();

// async function askCheckbox() {
//   const question = {
//     type: 'checkbox',
//     name: 'Languages',
//     message: 'Which programming languages do you know?',
//     choices: ['Javascript', 'Python', 'C#', 'Ruby']
//   };
//     const answer = await inquirer.prompt(question);
//     console.log(`You know ${answer.Languages.join(', ')}`); //  ',' is string template , join is a method that joins the elements of an array into a string
// }

// askCheckbox();

async function askRawList() {
  const question = {
    type: 'rawlist',
    name: 'Os',
    message: 'Which operating system do you use?',
    choices: ['Windows', 'Linux', 'Apple', 'Other', 'None of the above']
  };
  const answer = await inquirer.prompt(question);
  console.log(`You use:${answer.Os}`);
}

askRawList();