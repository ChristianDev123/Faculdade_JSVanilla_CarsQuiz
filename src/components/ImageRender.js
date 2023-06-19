export default function ImageRender({image, display}){
    display.innerHTML = `<img id="display-img" src="${image}"/>`;
}