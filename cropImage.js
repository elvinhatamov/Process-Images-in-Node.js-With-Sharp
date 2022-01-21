const sharp = require("sharp");
async function cropImage() {
 try{
  await sharp("sammy.png")
  .extract({width: 500, height: 300, left: 120, top: 70})
  .grayscale()
  .toFile("summy-grayscle.png");
 }catch(error){
  console.log(error);
 }
}

cropImage();