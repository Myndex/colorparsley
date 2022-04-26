# CoLoR🎨 PaRsLeY🌿
## ` colorParsley('colorString') `

### Version History

Current Version: **0.1.5**


0.1.5 - (April 25 2022) Bug fix: corrected the "upper case" bug, github issue #2

0.1.4 - (April 15 2022) Massive change for the regex string, to support CSS 4 tags. Now the new color() function is supported in the regex, and numbers are no longer constrained to INTs, so rgb(123.6564, 45.13, 199.45) is perfectly legal, per CSS4.

0.1.3 - Minor changes (not published)

0.1.2 - (Jan 15, 2022) minor improvements to the regex string (ends with $ now) and documentation.

0.1.1 — (Jan 11, 2022) minor, bug fix for the alpha of a 4 character hex string such as #2228 — the 8 (alpha) was not being divided correctly to be in the range 0.0-1.0. (discovered as APCA now supports alpha)

0.1.0 — (Jan 5, 2022) NEW! HWB and HSL now added! Revised the regex to improve validations, and to add hsl and hwb. Added string formatting utilities colorToHex() and colorToRGB(), updated docs, Added logo. Cleanup and maintenance.

0.0.2b - documentation fix, added this version history file. No code changes.

0.0.2 - significant change in parsing, now using a single (large) regex, and filtering all at once into a single array, followed by determining which positions in the array contain values, followed by a switch to process appropriately into the return array. All types of strings are auto recognized this way. (previous version iterated an object of multiple regex for each type)

0.0.1 — initial split off from APCA into a standalone package.


