export function getscreenWith() {

     return window.screen.width
}


export function getscreenheight() {

     return window.screen.height
}


export  function getElementWidth(classname) {
  // let itemwidth = document.getElementsByClassName(classname)[0].firstChild.clientWidth;
  let itemwidths = document.getElementsByClassName(classname);
  let nums =itemwidths.length;
  let tatalwith=0;
  for(let i=0;i<nums;i++){
    tatalwith+= itemwidths[i].clientWidth;
  }
  return tatalwith+16*nums;
}