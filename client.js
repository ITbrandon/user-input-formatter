class formatter {
  constructor(username, input, button) {
    this.username = username;
    this.input = input;
    this.button = button;
    this.init();
  }

  init = () => {
    this.button.addEventListener('click', this.format)
  }


  format = () => {

    if(this.input.value) {
    //Removing White Space of the outsides of the Input
    let inputValue = this.input.value.trim();

    //Removing all digits in Input
    let formatValue = inputValue.replace(/\d/g , "");

    //Split Input into an Array
    let inputArray = formatValue.split("");

    //Filtering array to remove white space that may have been in Input
    let filteredArray = inputArray.filter(string => string.trim())

    //Making array items all lowercase
    let mappedArray = filteredArray.map(string => string.toLowerCase());

    //Grabbing the First index of the Array and Making it uppercase
    let firstLetter = mappedArray[0].toUpperCase();

    //Removing the first index of the Array
    mappedArray.shift();

    //Pushing the Capitalized Version to the Start of the Array
    mappedArray.unshift(firstLetter);

    //Putting the Array back into a String
    let finalString = mappedArray.join();

    //Removing inevitable Commas from String
    let userName = finalString.replace(/,/g , "");
    
    //Checking If user put Last Name
    if(userName.includes('%'))
    {
      //Taking Input and Passing to the Function
      this.formatLastName(userName);
    }

    else
    {
      //Printing Name to Screen
      this.username.textContent = `Your Name is ${userName}`;
    }

    }

    else {
      //Handling error if input is empty
      this.username.textContent = "Please Enter Your Name!";
      console.error('No Name Entered')
    }
  }

  formatLastName = (name) => {
     //Adding a Way to incorporate a Last Name
     let fullName = name.replace("%", " ");
    
     //Grabbing index of the First Letter of Last Name
     let lastNameStartIndex = (name.indexOf("%")) + 1
 
     //Slicing full Name into two different Strings
     let lastName = fullName.slice(lastNameStartIndex);
     let firstName = fullName.slice(0, lastNameStartIndex);
 
     //Grabbing the first Letter then Capitalizing It
     let capital = lastName[0].toUpperCase();
 
     //Replace initial Letter with the Capitalized one
     let finalLastName = lastName.replace(lastName.charAt(0), capital);
     
     //Combining the Two Strings
     let finalName = firstName + finalLastName;
 
     //Printing Name to Screen
     this.username.textContent = `Your Name is ${finalName}`;
  }
}

const action = new formatter(document.querySelector('#username'), document.querySelector('#input'), document.querySelector('#button'));