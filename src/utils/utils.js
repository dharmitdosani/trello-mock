export const getInitials = (str) => {
  return str
    .split(" ")
    .filter((item, idx) => idx < 2)
    .map((str) => str[0])
    .join("")
    .toUpperCase();
};
