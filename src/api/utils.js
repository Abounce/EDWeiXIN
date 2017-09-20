import { dateFormat } from 'vux'

export function getscreenWith() {

     return window.screen.width
}


export function getscreenheight() {

     return window.screen.height
}


export  function getElementWidth(classname) {
  // let itemwidth = document.getElementsByClassName(classname)[0].firstChild.clientWidth;
  let itemwidths = document.getElementsByClassName(classname);
  // debugger
  let nums =itemwidths.length;
  let tatalwith=0;
  for(let i=0;i<nums;i++){
    tatalwith+= itemwidths[i].clientWidth;
  }
  // console.log("宽度为"+tatalwith+16*nums)
  return tatalwith+16*nums;
}

export  function getnextday(str) {
  let arys1 = str.substr(0,10).split('-');
  let now = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
  now.setDate(now.getDate()+1);
  let fmt = dateFormat(now, 'YYYY-MM-DD HH:mm:ss');
  return fmt.substr(0,10);
}

export function getweek(str) {
  let arys1 = str.substr(0,10).split('-');
  let ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
  let week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")//就是你要的星期几
  let week="星期"+week1; //就是你要的星期几
  return  week;

}

