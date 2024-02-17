# Control Flows and Error Handling

## Brandon Iticka

## Link to Flow Chart: https://www.figma.com/file/m8xZd61wg8PDnRWiRyxc9a/Flow-Chart?type=whiteboard&node-id=0%3A1&t=IMeizQdDyKn6v2sP-1

## Self Evaluation: During this assignment the main takeaway I got from from it was more clarity in the charAt method as I found out that it is not the most reliable choice when trying to use with the replace method for example previously when you ran my code and you typed in kobe%bryant the result was not what I expected it would print out KoBe bryant the reason for this is that in my code I was replace the charAt(index of the first letter of the last name) however since that letter appears in the first name it would capitalize that one instead in order to fix this I used the slice method to spilt the first and last name and just target the last name charAt(0);