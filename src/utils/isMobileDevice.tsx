export const isMobileDevice = () => {
  // console.log(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
