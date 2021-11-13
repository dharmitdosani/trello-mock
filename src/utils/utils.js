export const getInitials = (str) => {
  return str
    .split(" ")
    .filter((item, idx) => idx < 2)
    .map((str) => str[0])
    .join("")
    .toUpperCase();
};

export const getRandomId = () => `id${new Date().getTime()}`;

export const getArrFromObj = (obj) => Object.values(obj);
