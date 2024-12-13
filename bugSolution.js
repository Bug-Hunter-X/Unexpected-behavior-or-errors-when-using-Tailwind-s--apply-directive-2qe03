```javascript
// Correct use of Tailwind's @apply directive

.my-class {\n  @apply bg-gray-100 p-4 text-gray-700; \n}

.another-class {\n  @apply text-center; \n}

/* Or, for more complex scenarios, use regular CSS classes instead of @apply */
.complex-class {
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
}
```