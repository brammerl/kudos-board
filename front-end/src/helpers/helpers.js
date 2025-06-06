export const truncateString = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }

  return title;
};
