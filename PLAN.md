# Plan

Develop a single-page application. Use Vue.js for the front-end.

This application will merge two icons for IntelliJ IDEA plugins: the main icon and a modifier icon. The goal is to simplify creating icons for plugins based on a main icon and modifier icon. The application will provide a user-friendly interface for selecting and combining icons and will generate the final icon in SVG format for easy integration into IntelliJ IDEA plugins.

When combining icons, the main icon must have a cutout. Find the best shape for the cutout: circle, rectangle, or ellipse. The cutout shape should be determined based on the modifier icon shape approximately.

Both main icon and modifier icon files have 16x16 SVG sizes. The modifier icon contains a modifier in the right bottom corner.

The result icon must be 16x16 SVG.

Controls:

1. Drop-down menu for selecting the main icon.
2. Drop-down menu for selecting the modifier icon.
3. Button to combine the icons.
4. Preview of the combined icon.
5. The download button to download the combined icon.

Drop-down for selecting the main icon and modifier icon must be populated with icons from `main-icons` and `modifier-icons` folders. Drop-down items must show the icon name and the icon itself.