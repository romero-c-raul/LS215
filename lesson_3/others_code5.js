/*
PROBLEM
  - Implement encoding and decoding for the rail fence cipher

MENTAL MODEL
  - Our "template" is a zigzag shape that contains both dots and question marks
  - To fill in the template, we need to insert the letters into the template
    starting in the first row into the first available question mark, second row into the
    first available question mark, third row same thing, second row, first row...
    - Pattern is 1 - 2 - 3 - 2 - 1 - 2 - 3 - 2 - 1 until all question marks are filled
  - To encode, you remove all dots and concatenate all the letters in a single line
  
  - To decode, we fill in the template again, but this time in order
    - So the first seven letters fill out the top row
    - The next 12 letters fill out the second row
    - the next 6 letters fill out the third row

     W E C R L T E 
     E R D S O E E F E A O C
     A I V D E N 

     - To recreate the original string we have to iterate through each row in the following
      pattern:
        - 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, etc...
*/  