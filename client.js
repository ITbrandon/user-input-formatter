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

    //Adding a Way to incorporate a Last Name
    let fullName = userName.replace("%", " ");

    //Grabbing index of the First Letter of Last Name
    let lastName = (userName.indexOf("%")) + 1

    //Using Index to Grab the Letter then Capitalizing It
    let capital = fullName[lastName].toUpperCase();

    //Replace initial Letter with the Capitalized one
    let finalName = fullName.replace(fullName.charAt(lastName), capital);

    //Printing Name to Screen
    this.username.textContent = `Your Name is ${finalName}`;
    }

    else {
      //Handling error if input is empty
      this.username.textContent = "Please Enter Your Name!";
      console.error('No Name Entered')
    }
  }
}

const action = new formatter(document.querySelector('#username'), document.querySelector('#input'), document.querySelector('#button'));