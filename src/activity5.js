import inquirer from 'inquirer';

async function askConfirmation() {
  const question =
    {
      type: 'confirm',
      name: 'proceed', 
      message: 'Are you sure you want to continue?',
      default: false // default value if nothing is entered
    };
    const answer = await inquirer.prompt(question);
    if (answer.proceed) {
      console.log('Proceeding...');
    }else{
      console.log('You chose not to proceed.');
    }
}

askConfirmation();

