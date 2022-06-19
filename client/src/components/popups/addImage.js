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
                if (images.children.length === 1) {
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
                if (images.children.length === 1) {
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
    //////////////GET GEOLOCATION/////////////////
    const latitude = document.getElementById("latitude");
    const longitude = document.getElementById("longitude");
    function geoFindMe() {

        function success(position) {
            const l = position.coords.latitude;
            const d = position.coords.longitude;
            latitude.value = ''
            longitude.value = ''
            latitude.value = `${l}`;
            longitude.value = `${d}`;
        }

        navigator.geolocation.getCurrentPosition(success);
    }
    geoFindMe()
}
export default addImage