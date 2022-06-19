
const changeUrl = () => {
    const source = document.getElementById('source');
    const video = document.getElementById('video');
    const width = window.screen.width

    if (width <= 576) {
        source.setAttribute('src', 'https://res.cloudinary.com/chahineyelpcamp/video/upload/ac_none,vc_h264/v1655653997/Salamet/phoneVersion_ebgssz.mp4');
        video.load();
        video.play();
    }
}

export default changeUrl