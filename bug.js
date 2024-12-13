```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Ensure paths are correct
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      },
    },
  },
  plugins: [],
};
```