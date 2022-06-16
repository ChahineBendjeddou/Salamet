const addImage = () => {
    const images = document.getElementById("images");
    let reader = new FileReader();
    function handleEvent(event) {
        if (event.type === "load") {
            const img = document.createElement("div");
            const span = document.createElement("span");
            span.innerText = "remove";
            img.className = "img";
            img.appendChild(span);
            img.style.backgroundImage = `url('${reader.result}')`;
            images.prepend(img);
            span.addEventListener("click", () => img.remove());
        }
    }
    if (images) {
        images.addEventListener("click", function (e) {
            if (e.target.classList.contains("img")) e.target.remove();
        });
    }

    const pic = document.querySelector(".pic");
    if (pic) {
        pic.addEventListener("click", () => {
            const uploader = document.getElementById("fileInput");
            uploader.click();
            uploader.addEventListener("change", () => {
                const selectedFile = uploader.files[0];
                if (selectedFile) {
                    reader.addEventListener("load", handleEvent);
                    reader.readAsDataURL(selectedFile);
                }
            });
        });
    }
}
export default addImage