const compliments = [
  "You look beautiful today ❤️",
  "That smile suits your style. Keep it!",
  "You're the best you I've ever met"
];

const sample = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const getCompliment = () => sample(compliments);

export default getCompliment;
