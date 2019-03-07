import {request} from "./request";

export function getDetailMultidata(iid) {
  return request({
    url:"/detail",
    params:{
      iid,
    }
  })
}
export class Goods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}