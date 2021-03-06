---
title: Url Encoding Reference
---
## Url Encoding Reference

A URL is an address for a website. Just like postal addresses have to follow a specific format to be understood by the postman, URLS have to follow a format to be understood and get you to the right location.

There are only certain characters that are allowed in the URL string, alphabetic characters, numerals, and a few characters `; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #` that can have special meanings.

#### Reserved Characters:

| Character | Meaning |
| --- | --- |
| : | Separate protocol (http) from address |
| / | Separate domain and directories |
| # | Separate anchors |
| ? | Separate query string |
| & | Separate query elements |
| @ | Separate username and password from domain |
| % | Indicates an encoded character |
| + | Indicates a space |

#### Encoding:

Any character that is not an alphabetic character, a number, or a reserved character being used needs to be encoded.

URLs use the ASCII ("American Standard Code for Information Interchange") character-set and so encoding must be to a valid ASCII format. 

There are functions in most web languages to do this encoding for you, for example in JavaScript `encodeURI()` and in PHP `rawurlencode()`.

| Character | Encoded |
| --- | --- |
| space | %20 |
| ! | %21 |
| " | %22 |
| # | %23 |
| $ | %24 |
| % | %25 |
| & | %26 |
| ' | %27 |
| ( | %28 |
| ) | %29 |
| * | %2A |
| + | %2B |
| , | %2C |
| - | %2D |
| . | %2E |
| / | %2F |
| 0 | %30 |
| 1 | %31 |
| 2 | %32 |
| 3 | %33 |
| 4 | %34 |
| 5 | %35 |
| 6 | %36 |
| 7 | %37 |
| 8 | %38 |
| 9 | %39 |
| : | %3A |
| ; | %3B |
| < | %3C |
| = | %3D |
| > | %3E |
| ? | %3F |
| @ | %40 |
| A | %41 |
| B | %42 |
| C | %43 |
| D | %44 |
| E | %45 |
| F | %46 |
| G | %47 |
| H | %48 |
| I | %49 |
| J | %4A |
| K | %4B |
| L | %4C |
| M | %4D |
| N | %4E |
| O | %4F |
| P | %50 |
| Q | %51 |
| R | %52 |
| S | %53 |
| T | %54 |
| U | %55 |
| V | %56 |
| W | %57 |
| X | %58 |
| Y | %59 |
| Z | %5A |
| [ | %5B |
| \ | %5C |
| ] | %5D |
| ^ | %5E |
| _ | %5F |
| ` | %60 |
| a | %61 |
| b | %62 |
| c | %63 |
| d | %64 |
| e | %65 |
| f | %66 |
| g | %67 |
| h | %68 |
| i | %69 |
| j | %6A |
| k | %6B |
| l | %6C |
| m | %6D |
| n | %6E |
| o | %6F |
| p | %70 |
| q | %71 |
| r | %72 |
| s | %73 |
| t | %74 |
| u | %75 |
| v | %76 |
| w | %77 |
| x | %78 |
| y | %79 |
| z | %7A |
| { | %7B |
| | | %7C |
| } | %7D |
| ~ | %7E |
| ?? | %A2 |
| ?? | %A3 |
| ?? | %A5 |
| | | %A6 |
| ?? | %A7 |
| ?? | %AB |
| ?? | %AC |
| ?? | %AD |
| ?? | %B0 |
| ?? | %B1 |
| ?? | %B2 |
| , | %B4 |
| ?? | %B5 |
| ?? | %BB |
| ?? | %BC |
| ?? | %BD |
| ?? | %BF |
| ?? | %C0 |
| ?? | %C1 |
| ?? | %C2 |
| ?? | %C3 |
| ?? | %C4 |
| ?? | %C5 |
| ?? | %C6 |
| ?? | %C7 |
| ?? | %C8 |
| ?? | %C9 |
| ?? | %CA |
| ?? | %CB |
| ?? | %CC |
| ?? | %CD |
| ?? | %CE |
| ?? | %CF |
| ?? | %D0 |
| ?? | %D1 |
| ?? | %D2 |
| ?? | %D3 |
| ?? | %D4 |
| ?? | %D5 |
| ?? | %D6 |
| ?? | %D8 |
| ?? | %D9 |
| ?? | %DA |
| ?? | %DB |
| ?? | %DC |
| ?? | %DD |
| ?? | %DE |
| ?? | %DF |
| ?? | %E0 |
| ?? | %E1 |
| ?? | %E2 |
| ?? | %E3 |
| ?? | %E4 |
| ?? | %E5 |
| ?? | %E6 |
| ?? | %E7 |
| ?? | %E8 |
| ?? | %E9 |
| ?? | %EA |
| ?? | %EB |
| ?? | %EC |
| ?? | %ED |
| ?? | %EE |
| ?? | %EF |
| ?? | %F0 |
| ?? | %F1 |
| ?? | %F2 |
| ?? | %F3 |
| ?? | %F4 |
| ?? | %F5 |
| ?? | %F6 |
| ?? | %F7 |
| ?? | %F8 |
| ?? | %F9 |
| ?? | %FA |
| ?? | %FB |
| ?? | %FC |
| ?? | %FD |
| ?? | %FE |
| ?? | %FF |

#### Example:

```js
encodeURI(Free Code Camp);
// Free%20Code%20Camp
```

#### More Information:

[MDN encodeURI()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

[HTML URL Encoding Reference](https://www.w3schools.com/tags/ref_urlencode.asp)
