function Lights() {
    const Switch = document.getElementById("Switch");
    const light = document.getElementById("light");
    const status = document.getElementById("status");

    if (Switch.checked) {
        light.src = "bulb-on.png";
        status.textContent = "Lights ON";
    }
    else{
        light.src = "bulb-off.png";
        status.textContent = "Lights OFF";
    }
}
