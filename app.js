let pronom = ["the", "our", "us", "them"];
let adjetivos = ["great", "big", "small", "sadest"];
let nombres = ["jogger", "racoon", "turttle", "horse"];
let dominios = [".net", ".com", ".es", ".uk"];

pronom.forEach((item) => {
  adjetivos.forEach((item2) => {
    nombres.forEach((item3) => {
      dominios.forEach((item4) => {
        console.log(item+item2+item3+item4);
      });
    });
  });
});
