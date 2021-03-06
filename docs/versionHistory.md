# CoLoR🎨 PaRsLeY🌿
```javascript
let rgbaArray = colorParsley('colorString') `
```
## _Version History_

### Current Version: **0.1.8**

0.1.8 - (June 4 2022) 

- When input is a CSS color(), now returns RGB multiplied by 255 for consistency 
- colorToHex() now rounds before converting (fixes issue)
- colorToRGB() now rounds by default, but rounding can be set to false
- Added some tests

### Past Versions:

0.1.7 - (June 2 2022) 

**NEW in 0.1.7: output array will now *always* have an alpha value, with the default as 1 for inputs that lack an alpha. "Failed" parsings will still return an alpha of 0.**

NEW: this version adds automated tests (thanks Rasmus!) at the command line, ` npm test ` will run two scripts. The first set of tests check that all the parsing is done correctly, and the second set of tests in the "reject.js" script checks that bad inputs fail gracefully.

Otherwise, the same 0.1.6 regex & parsley

0.1.6 - (May 16 2022) Bug fix: corrected the regex bug, github issue #5 (thanks Rasmus!)
Fixed: the rgb() percentage implementation was incomplete, it works now
Features: also altered the exports, fixed the test.html file, and more.

0.1.5 - (April 25 2022) Bug fix: corrected the "upper case" bug, github issue #2

0.1.4 - (April 15 2022) Massive change for the regex string, to support CSS 4 tags. Now the new color() function is supported in the regex, and numbers are no longer constrained to INTs, so rgb(123.6564, 45.13, 199.45) is perfectly legal, per CSS4.

0.1.3 - Minor changes (not published)

0.1.2 - (Jan 15, 2022) minor improvements to the regex string (ends with $ now) and documentation.

0.1.1 — (Jan 11, 2022) minor, bug fix for the alpha of a 4 character hex string such as #2228 — the 8 (alpha) was not being divided correctly to be in the range 0.0-1.0. (discovered as APCA now supports alpha)

0.1.0 — (Jan 5, 2022) NEW! HWB and HSL now added! Revised the regex to improve validations, and to add hsl and hwb. Added string formatting utilities colorToHex() and colorToRGB(), updated docs, Added logo. Cleanup and maintenance.

0.0.2b - documentation fix, added this version history file. No code changes.

0.0.2 - significant change in parsing, now using a single (large) regex, and filtering all at once into a single array, followed by determining which positions in the array contain values, followed by a switch to process appropriately into the return array. All types of strings are auto recognized this way. (previous version iterated an object of multiple regex for each type)

0.0.1 — initial split off from APCA into a standalone package.


