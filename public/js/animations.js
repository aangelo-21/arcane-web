document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  const handleScroll = () => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("visible");
      } else {
        item.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});