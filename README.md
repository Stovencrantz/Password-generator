** Password Generator**

For this program we asked the user for some information and generated a randomized password based upon their specific criteria. 

The program begins when the user clicks the "Generate Password" button.

We prompt the user to provide a length for their password. If the user enters a value less then 8 or greater than 128, we loop back through with an updated message explaining that they must enter a number between these values and to try again.

We then ask the user what type of characters they want to include in their password, with a selection of : lowercase characters, uppercase characters, numbers, and special characters.

When the user confirms that they want to add a character criteria, the predefined grouping of characters for that criteria will be added to a master array of characters that will be used for selecting individual characters for our password.

Once the user has finished choosing what criteria they want, our program will randomly grab a character from an array of characters composed of all the characters selected in their criteria and will individually be added to a password until we reach the correct number of password characters the user requested. 

Once the password is finsihed being generated it is then displayed to the web page for the user to view.