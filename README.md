# Tailwind CSS @apply Directive Bug

This repository demonstrates a common issue encountered when using Tailwind CSS's `@apply` directive.  Improper use can lead to unexpected styling outcomes or even build errors. The `bug.js` file shows incorrect usage, and `bugSolution.js` provides the corrected implementation. 

## Bug Description

The `@apply` directive in Tailwind CSS is powerful but requires careful use.  If utility classes are misused or improperly nested within it, it can lead to unexpected CSS output and break your application's styling.  Common errors include typos in class names, incompatible utility classes, and unnecessary nesting within `@apply`.

## Solution

The solution usually involves double-checking the utility classes in `@apply` and ensuring no style conflicts. Sometimes, you may need to restructure your CSS to avoid nesting conflicts. Refer to `bugSolution.js` for a corrected example.