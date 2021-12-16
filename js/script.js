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
        markAll();
    };
});

function markAll() {
    if (
        document
            .querySelector(".breadcrumb .bread-item:nth-child(2)")
            .classList.contains("active")
    ) {
        const firstItem = document.querySelector(
            ".breadcrumb .bread-item:nth-child(1)"
        );
        firstItem.classList.add("active");
        firstItem.style.zIndex = "15";
        firstItem.querySelector(".img img").src = activeImg[0];
    }
}

