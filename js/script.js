const breadItem = document.querySelectorAll(".breadcrumb .bread-item");
const activeImg = [
    "./icons/active/wedding.png",
    "./icons/active/diamond.png",
    "./icons/active/wedding-ring.png",
];
const image = [
  "./icons/wedding.png",
    "./icons/diamond.png",
    "./icons/wedding-ring.png",
];

function removeItem() {
    breadItem.forEach((item, index) => {
        item.classList.remove("active");
        item.querySelector(".img img").src = image[index];
    });
}

breadItem.forEach((item, index) => {
    item.onclick = () => {
        removeItem();
        item.classList.add("active");
        item.querySelector(".img img").src = activeImg[index];
    };
});
