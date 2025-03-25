# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Live Site URL: [Random-advice-gen-app](https://random-adivce-gen-app.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```tsx
{
  loading ? (
    <p className="font-bold text-quote text-center" role="status">
      Loading advice...
    </p>
  ) : (
    <div className="flex flex-col text-center gap-4">
      <span className="text-primary-Neon-Green tracking-widest text-xs font-medium md:text-base">
        ADVICE #{advice?.id}
      </span>
      <p className="md:text-quote">"{advice?.advice}"</p>
    </div>
  );
}
```

```ts
export const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  }, [API_URL]);

  const handleClick = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  return { advice, loading, handleClick };
};
```

## Author

- Frontend Mentor - [@TrEv0rRrRr](https://www.frontendmentor.io/profile/TrEv0rRrRr)
- Twitter - [@Tr3v0rRrR](https://www.twitter.com/Tr3v0rRrR)
