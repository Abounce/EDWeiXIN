class out {
   constructor(cardNo,deptName,doctorName,diagnosis,rcptId,rcptType,costType,rcptMoney,rcptDate,registerNo,itemBeans) {
     this.cardNo = cardNo;
     this.deptName = deptName;
     this.doctorName = doctorName;
     this.diagnosis = diagnosis;
     this.rcptId = rcptId;
     this.rcptType = rcptType;
     this.costType = costType;
     this.rcptMoney = rcptMoney;
     this.rcptDate = rcptDate;
     this.registerNo=registerNo;
     this.itemBeans = itemBeans;
   }
 }

class inner {
   constructor(itemTypeId,itemTypeName,itemCode,itemName,itemSpecs,itemNum,itemPrice,itemMoney) {
     this.itemTypeId = itemTypeId;
     this.itemTypeName = itemTypeName;
     this.itemCode = itemCode;
     this.itemName = itemName;
     this.itemSpecs = itemSpecs;
     this.itemNum = itemNum;
     this.itemPrice = itemPrice;
     this.itemMoney = itemMoney;
   }
 }





export {out,inner}
