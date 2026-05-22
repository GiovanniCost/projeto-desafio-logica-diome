let heroName = "";
let xp = 0;

switch (true) {
  case xp <= 1000:
    console.log(`O Herói de nome ${heroName} está no nível Ferro!`);
    break;
  case xp >= 1001 && xp <= 2000:
    console.log(`O Herói de nome ${heroName} está no nível Bronze!`);
    break;
  case xp >= 2001 && xp <= 5000:
    console.log(`O Herói de nome ${heroName} está no nível Prata!`);
    break;
  case xp >= 6001 && xp <= 7000:
    console.log(`O Herói de nome ${heroName} está no nível Ouro!`);
    break;
  case xp >= 7001 && xp <= 8000:
    console.log(`O Herói de nome ${heroName} está no nível Platina!`);
    break;
  case xp >= 8001 && xp <= 9000:
    console.log(`O Herói de nome ${heroName} está no nível Ascendente!`);
    break;
  case xp >= 9001 && xp <= 10000:
    console.log(`O Herói de nome ${heroName} está no nível Imortal!`);
    break;
  case xp >= 10001:
    console.log(`O Herói de nome ${heroName} está no nível Radiante!`);
    break;

  default:
    console.log(`O Herói de nome ${heroName} não tem classificação de nivel!`);
    break;
}
