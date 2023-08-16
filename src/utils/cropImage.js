import Resizer from "react-image-file-resizer";

export const showCroppedImage = async (imageSrc,croppedAreaPixels,setWidthh,setHeightt,croppedImage,setCroppedImage,setProfilePicture,handleClick) => {
  try {
    await cropImageNow(imageSrc,croppedAreaPixels,setWidthh,setHeightt,croppedImage,setCroppedImage,setProfilePicture,handleClick);
  } catch (e) {
    console.error(e);
  }
};

const createImage = (url) =>
new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener('load', () => resolve(image));
  image.addEventListener('error', (error) => reject(error));
  image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
  image.src = url;
});

const cropImageNow = async (image1, cropa,setWidthh,setHeightt,croppedImage,setCroppedImage,setProfilePicture,handleClick) => {

console.log('image1, cropa', image1, cropa);
const image = await createImage(image1, cropa);
console.log("heree2222", image);
const canvas = document.createElement("canvas");
const pixelRatio = window.devicePixelRatio;
const scaleX = image.naturalWidth / image.width;
const scaleY = image.naturalHeight / image.height;
const ctx = canvas.getContext("2d");
// console.log("infileeeee", pixelRatio, scaleX, cropa.width);
setWidthh(image.naturalWidth)
setHeightt(image.naturalHeight)

canvas.width = cropa.width * pixelRatio * scaleX;
canvas.height = cropa.height * pixelRatio * scaleY;

ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
ctx.imageSmoothingQuality = "high";

ctx.drawImage(
  image,
  cropa.x * scaleX,
  cropa.y * scaleY,
  cropa.width * scaleX,
  cropa.height * scaleY,
  0,
  0,
  cropa.width * scaleX,
  cropa.height * scaleY
);
const base64Image = canvas.toDataURL("image/jpeg");
// console.log("asdadsfadsfasdfadf", base64Image);
var blobData = dataURItoBlob(base64Image);
function dataURItoBlob(dataURI) {
  var binary = atob(dataURI.split(",")[1]);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
}

let converted = dataURLtoFile(base64Image, croppedImage ? croppedImage : null);
setProfilePicture(converted)
console.log(converted, "convertedconverted");
// console.log("file", cropa.width, cropa.height);
if (cropa.widt >= 500 || cropa.height >= 300) {
  //   // console.log("file in if ");
  setProfilePicture(converted)
  resizeFile(converted,setCroppedImage);

}
else {
  // console.log("file in else ");
  setProfilePicture(converted)
  resizeFile1(converted,setCroppedImage);

  // antthing1(base64Image);
}
// antthing1(base64Image)
// console.log(base64Image,'base64Image---');
// setLogoPicture(base64Image)
handleClick();
return blobData;
};


function dataURLtoFile(dataurl, filename) {
var arr = dataurl.split(","),
  mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]),
  n = bstr.length,
  u8arr = new Uint8Array(n);
while (n--) {
  u8arr[n] = bstr.charCodeAt(n);
}
return new File([u8arr], filename, { type: mime });
}
const resizeFile = (file,setCroppedImage) => {
// console.log(file,'file');
new Promise((resolve) => {
  Resizer.imageFileResizer(
    file,
    532,
    348,
    "JPEG",
    100,
    0,
    (uri) => {
      resolve(uri);
      // setLogoPicture1('')
      // setLogoPicture1(uri)
      // antthing1(uri);
      setCroppedImage(uri)
    },
    "base64"
  );
});
}
const resizeFile1 = (file,setCroppedImage) => {
// console.log(file,'file');
new Promise((resolve) => {
  Resizer.imageFileResizer(
    file,
    532,
    348,
    "JPEG",
    100,
    0,
    (uri) => {
      resolve(uri);
      // setLogoPicture1('')
      // setLogoPicture1(uri)
      // antthing1(uri);
      setCroppedImage(uri)
    },
    "base64",
    532,
    348,
  );
});
}


