let heroName = "";
let level = "";
let xp = 0;

switch (true) {
  case xp <= 1000:
    level = "Ferro";
    break;
  case xp <= 2000:
    level = " Bronze";
    break;
  case xp <= 5000:
    level = " Prata!";
    break;
  case xp <= 7000:
    level = " Ouro";
    break;
  case xp <= 8000:
    level = " Platin";
    break;
  case xp <= 9000:
    level = " Ascendente";
    break;
  case xp <= 10000:
    level = " Imorta";
    break;

  default:
    level = " Radiante";
    break;
}
console.log(`O Herói de nome ${heroName} está no nível ${level}`);
