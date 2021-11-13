export const getInitials = (str) => {
  return str
    .split(" ")
    .filter((item, idx) => idx < 2)
    .map((str) => str[0])
    .join("")
    .toUpperCase();
};

export const getRandomId = (prefix = "") =>
  `${prefix}_id_${new Date().getTime()}`;

export const getArrFromObj = (obj) => Object.values(obj);
