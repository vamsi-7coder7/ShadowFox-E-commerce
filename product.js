// products.js
const products = new Map();
products.set("item-cart-1", [
  {
    full_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444654/Screenshot_2024-11-01_121330_pjizua.png",
    thumb_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444654/Screenshot_2024-11-01_121330_pjizua.png",
  },
  {
    full_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444653/Screenshot_2024-11-01_121414_fbps6k.png",
    thumb_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444653/Screenshot_2024-11-01_121414_fbps6k.png",
  },
  {
    full_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444655/Screenshot_2024-11-01_121341_empw8v.png",
    thumb_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444655/Screenshot_2024-11-01_121341_empw8v.png",
  },
  {
    full_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444654/Screenshot_2024-11-01_121403_ls3nsw.png",
    thumb_img_url:
      "https://res.cloudinary.com/dodtgxxtk/image/upload/v1730444654/Screenshot_2024-11-01_121330_pjizua.png",
  },
  // Add more products here if needed
]);

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".image-box__src");

  const thumbButtons = document.querySelectorAll(".thumb-item__btn");
  thumbButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      mainImage.src = products.get("item-cart-1")[index].full_img_url;
      console.log(`Image changed to: ${mainImage.src}`);
    });
  });
});
