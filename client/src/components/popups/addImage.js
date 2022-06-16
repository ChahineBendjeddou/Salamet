const addImage = () => {
    const images = document.getElementById("images");
    const uploader = document.getElementById("fileInput");
    let selectedFile
    let reader = []
    for (let i = 0; i < 10; i++) {
        reader[i] = new FileReader();
    }
    // const reader = new FileReader();
    function handleEvent(event) {
        if (event.type === "load") {
            const img = document.createElement("div");
            const span = document.createElement("span");
            span.innerText = "remove";
            img.className = "img";
            img.appendChild(span);
            img.style.backgroundImage = `url('${event.target.result}')`;
            images.prepend(img);
            span.addEventListener("click", () => {
                img.remove()
                if (images.children.length == 1) {
                    pic.style.display = "block"
                }
            }
            );
        }
    }
    if (images) {
        images.addEventListener("click", function (e) {
            if (e.target.classList.contains("img")) {
                e.target.remove();
                console.log(reader.length)
                if (images.children.length == 1) {
                    pic.style.display = "block"
                }
            };
        });
    }

    const pic = document.querySelector(".pic");
    if (pic) {
        pic.addEventListener("click", async () => {
            uploader.click();
            uploader.addEventListener("change", () => {
                for (let i = 0; i < uploader.files.length; i++) {
                    selectedFile = uploader.files[i]
                    if (selectedFile) {
                        reader[i].addEventListener("load", handleEvent);
                        reader[i].readAsDataURL(selectedFile);
                    }
                }
                pic.style.display = "none";
            });
        });
    }
}
export default addImage