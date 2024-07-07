<script>
width: 95vw;: Makes the element 95% of the viewport width.

margin: auto;: Centers the element horizontally.

height: 5rem;: Sets the element’s height to 5 times the root element's font size.

The CSS property box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.9); creates an inner shadow inside an element. Here's a simple breakdown:

inset: Makes the shadow appear inside the element.


0 0 0: No horizontal or vertical offset and no blur.


5px: The shadow has a 5-pixel spread.
rgba(255, 255, 255, 0.9): The shadow color is white with 90% opacity.


What It Does:
Effect: Creates a 5-pixel wide white border inside the element, which is almost fully opaque.


The position: relative; property in this CSS rule sets the .btn element to be positioned relative to its normal position. This means you can use the top, right, bottom, and left properties to move the element from its normal position without affecting the layout of surrounding elements. It also establishes the .btn as a reference point for any absolutely positioned child elements.
<script>
//NOTE - width: inherit;: The span’s width will be the same as its parent button.
background-color: red;: The background color of the span will be red.


position: absolute;: The span will be positioned absolutely within the button.
bottom: -2.5rem;: The span will be positioned 2.5 rem units below the bottom of the button.


left: 0;: The span will be aligned to the left edge of the button.


text-transform: capitalize;: The text inside the span will be capitalized (first letter of each word will be uppercase).


color: rgb(153, 153, 153);: The text color will be a shade of grey.


font-size: 1.8rem;: The font size of the text will be 1.8 rem units.



// The CSS code .addIcon:hover > .fa-plus-circle { opacity: 1; } targets an element with the class addIcon and changes the opacity of an element with the class fa-plus-circle when the addIcon element is hovered over. However, in your HTML, the icon has the class fas fa-plus, not fa-plus-circle, so the CSS won't have any effect in its current form.



**********LINK - 
rray of Users: const users = ['aaryan', 'elon', 'sam']; defines an array containing three user names.

DOM Selection: const memberDiv = document.querySelector('.memberDiv'); selects an HTML element with the class name memberDiv. This will be used to insert buttons representing each user.

Function userIcons: This function is intended to generate buttons for each user and insert them into the memberDiv.

map Method: users.map((currElem) => {...}); iterates over each element (currElem) in the users array.

Inserting HTML: memberDiv.insertAdjacentHTML('afterbegin', <button class="btn"><span>${currElem}</span></button>); inserts HTML content inside memberDiv, placing a button (<button class="btn">) for each user name (${currElem}).

Execution: userIcons(); calls the userIcons function to execute the insertion of buttons into the memberDiv.


// ChatGPT
// This line of code iterates through each element (currElem) in the users array. For each element, it creates a button element (<button class="btn">) with the current element's value inside a <span> tag (<span>${currElem}</span>). The button is then inserted at the beginning of the memberDiv element in the HTML.//NOTE - 



The function userIcons reverses the order of the users array.
It then goes through each element in the reversed array and inserts a button for each user at the beginning of memberDiv.
If users is originally [1, 2, 3], after reversing, it becomes [3, 2, 1]. The function will then insert buttons in this order:
*******NOTE - 
First, insert a button with 3.
Then, insert a button with 2 at the beginning (so it comes before the 3 button).
Finally, insert a button with 1 at the beginning (so it comes before the 2 button).
As a result, the buttons in memberDiv will be displayed in the order 1, 2, 3, despite the array being reversed, because each new button is inserted at the beginning.



User clicks the addIcon element.
A prompt asks the user to enter their name.
The user enters "Alice".
If "Alice" is not in the users array, "Alice" is added to the array, and the console logs the updated array.
If "Alice" is already in the users array, an alert says 'username already exists'.
The userIcons function updates the display to show buttons for each user in the users array.


******REVIEW - 
This code defines a function userIcons that performs the following steps:

Reverse Order: It reverses the order of elements in the users array.
Create Buttons: For each element (username) in the users array, it creates an HTML button element dynamically and inserts it at the beginning (afterbegin) of the memberDiv element.
In essence, userIcons rearranges usernames in reverse order and generates buttons for each username, adding them to the specified memberDiv element in the HTML document.























