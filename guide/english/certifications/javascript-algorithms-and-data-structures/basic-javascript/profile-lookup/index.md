---
title: Profile Lookup
---
## Profile Lookup
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use `Read-Search-Ask` if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

We have an array of objects representing different people in our contacts lists.

A `lookUpProfile()` function that takes **firstName** and a property (**prop**) as arguments has been pre-written for you.

The function should check if **firstName** is an actual contact's **firstName** and the given property (**prop**) is a property of that contact.

If both are true, then return the _value_ of that property.

If **firstName** does not correspond to any contacts then return `No such contact`.

If **prop** does not correspond to any valid properties then return `No such property`.

*   Change the code below `// Only change code below this line` and up to `// Only change code above this line`.
*   Ensure that you are editing the inside of the `lookUpProfile()` function.
    *   This function includes two parameters, **firstName** and **prop**.
*   The function should look through the **contacts** list for the given **firstName** parameter.
    *   If there is a match found, the function should then look for the given **prop** parameter.
    *   If both **firstName** and the associated **prop** are found, you should return the value of the **prop**.
    *   If **firstName** is found and no associated **prop** is found, you should return `No such property`.
*   If **firstName** isn't found anywhere, you should return `No such contact`.


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Use a `for` loop to cycle through the **contacts** list.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Use a nested `if` statement to first check if the **firstName** matches, and then checks `if` the **prop** matches.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Leave your `return "No such contact"` out of the `for` loop as a final catch-all.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:


``` javascript    
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
 ```

### Code Explanation:

*   The `for` loop runs, starting at the first object in the **contacts** list.
*   If the **firstName** parameter passed into the function matches the value of the `"firstName"` key in the first object, the `if` statement passes.
*   Then, we use `.hasOwnProperty()` method (checks if there's a given property and returns a boolean) with **prop** as an argument. If it's true, the value of **prop** is returned.
    *   If the second `if` statement fails, `No such property` is returned.
*   If the first `if` statement fails, the `for` loop continues on to the next object in the **contacts** list.
*   If the **firstName** parameter isn't matched by the final **contacts** object, the `for` loop exits and `No such contact` is returned.

**Example Run**

*   `lookUpProfile("Akira","likes");` runs.
*   `"Akira"` is matched to the `"firstName"` key in the first object, so the `if` statement returns true.
*   `"likes"` is found within the first object, so the second `if` statement returns true.
*   The value of `"likes"` is returned - `"Pizza", "Coding", "Brownie Points"`.

## Alternative code solution:

```javascript
for (var i = 0; i < contacts.length; i++){
  if (contacts[i].firstName === name){
    if (prop in contacts[i]){
      return contacts[i][prop];
    }
    else return "No such property"; 
  }
}
return "No such contact";
}
```
??  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Profile-lookup).

### Code explanation
This works as the last example but uses the `in` operator to look for `prop` instead of the `hasOwnProperty()` method.


### Resources

- ["Iterate with JavaScript For Loops" - *fCC's challenge*](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops/)
 - ["Object.prototype.hasOwnProperty()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- ["in operator" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
