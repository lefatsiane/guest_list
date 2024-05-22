let guestList = prompt(`enter a maximum of 10 names for your guest list`); // prompts user to enter names of guests
let guestListArray = guestList.split(" "); // converts guest list to an array
let guestListLength = guestListArray.length; // counts the names the user enters
if (guestListLength > 10) {
  // runs loop if there are more than 10 names
  addRemove = confirm(
    // code will prompt user if there are more than 10 names
    `You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list? canceling will remove all names after the 10 guest `
  );
  if (addRemove == true) {
    // if user selects yes/okay the code will run
    removedName = guestListArray.indexOf(
      prompt(`enter the guest names you want removed`)
    ); // user will be ased to enter the name they woul like to replace
    guestListArray.splice(
      [removedName],
      1,
      prompt(`enter the guest names you want instead`)
    ); // replaces the removed name with the new one, user entered
    guestListArray.splice(10, Infinity); // removes all names passed the 10th guest name
    console.log(`${guestListArray} list with replaced name`);
  } // displays guestlist with replaced name
  else if (addRemove == false) {
    guestListArray.splice(10, Infinity); // removes all names passed the 10th guest name
  }
}
console.log(` your guestlist is as follows: ${guestListArray} `);
