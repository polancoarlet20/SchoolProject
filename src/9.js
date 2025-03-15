const getRandomColor = () => {
  let color = "";
  while (color === "") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    color = `rgb(${r}, ${g}, ${b})`;
  }
  return color;
};
