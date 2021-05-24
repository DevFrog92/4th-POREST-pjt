export const timeSet = () => {
  let day = true;
  const background = document.querySelector('.main__background');
  setInterval(() => {
    const now = new Date();
    let hour = now.getHours();
    if (hour >= 7 && hour <= 19) {
      if (!day) {
        day = true;
        background.classList.remove('dayoff');
      }
    } else {
      if (day) {
        day = false;
        background.classList.add('dayoff');
      }
    }
  }, 1000);
};
