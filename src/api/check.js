

export function checkName(name){
  let regName =/^[\u4e00-\u9fa5]{2,4}$/;
  if(!regName.test(name)){
    // alert('真实姓名填写有误');
    return false;
  }
  return true;
}

export  function checkCard(idNo) {
  let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if(!regIdNo.test(idNo)){
    // alert('身份证号填写有误');
    return false;
  }
  return true;

}
export function  checkPhone(phone) {
  let mobileRegex = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/;

  if(mobileRegex.test(phone)){
    // alert('手机号正确');
    return true
  }else{
    // alert('手机号输入不正确');
    return false
  }
}
