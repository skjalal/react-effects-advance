export const shuffled = (array: string[]) => {
  // Create a copy to avoid mutating the original array (optional, but a good practice for pure functions)
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
};
