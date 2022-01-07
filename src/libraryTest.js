 export default function rainbowColor() {
    console.log("merde");
    let color = '';
    for(let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 256).toString(16);
        color += (random.length ===  1 ? "0" + random : random);
    }
    console.log("youpi");
    return "#" + color;
}
