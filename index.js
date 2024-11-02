let Notaro = 9000;

if (Notaro < 1000) {
    nivel = "Ferro";
} else if (Notaro <= 2000) {
    nivel = "Bronze";
} else if (Notaro <= 5000) {
    nivel = "Prata";
} else if (Notaro <= 7000) {
    nivel = "Ouro";
} else if (Notaro <= 8000) {
    nivel = "Platina";
} else if (Notaro <= 9000) {
    nivel = "Ascendente";
} else if (Notaro <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(nivel);