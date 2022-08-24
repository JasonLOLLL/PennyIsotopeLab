// Cache DOM variables
const copperDensity = 8.83;
const zincDensity = 7.21;
const initialMass_input = document.getElementById("initial-mass");
const initialVolume_input = document.getElementById("initial-volume");
const finalMass_input = document.getElementById("final-mass");
const finalVolume_input = document.getElementById("final-volume");
const pennyMass_p = document.getElementById("p-mass");
const pennyVolume_p = document.getElementById("p-volume");
const totalDensity_p = document.getElementById("total-density");
const percentCopper_p = document.getElementById("percent-copper");
const percentZinc_p = document.getElementById("percent-zinc");
const submit_button = document.querySelector("button");
const clear_button = document.getElementById("clear")
const sub1_p = document.getElementById("sub-1")
const sub2_p = document.getElementById("sub-2")

submit_button.addEventListener("click", function(){
    const iM = initialMass_input.value;
    const iV = initialVolume_input.value;
    const fM = finalMass_input.value;
    const fV = finalVolume_input.value;

    const pM = fM - iM;
    const pV = fV - iV;
    const D = pM/pV;

    const zincP = ((D-8.83)/-1.62)*100;
    const copperP = 100-zincP;

    const rounds1 = Math.round((D-copperDensity)*100)/100
    sub1_p.innerHTML = "Sub-1: " + rounds1 + "  (" + (D-copperDensity) + ")";
    sub2_p.innerHTML = "Sub-2: " + (rounds1)/-1.62 + "  (" + (D-copperDensity)/-1.62 + ")";

    pennyMass_p.innerHTML = "Penny mass: " + pM + " g";
    pennyVolume_p.innerHTML = "Penny volume: " + Math.round(pV*10)/10 + " mL";
    totalDensity_p.innerHTML = "Total density: " + Math.round(D*100)/100 + " g/mL";
    percentCopper_p.innerHTML = "Copper percentage: " + Math.round(copperP*10)/10 + "%";
    percentZinc_p.innerHTML = "Zinc percentage: " + Math.round(zincP*10)/10 + "%";
});

clear_button.addEventListener("click", function() {
    location.reload();
});