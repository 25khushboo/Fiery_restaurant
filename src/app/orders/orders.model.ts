export class Order {
    orderNo: string;
    contactName: string;
    orderDate: String;
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
    // itemsOrdered: Item[];
    constructor(
      orderNo: string,
      contactName: string,
      orderDate: string,
      orderTotal: number,
      taxTotal: number,
      grandTotal: number
    ) {
      this.orderNo = orderNo;
      this.contactName = contactName;
      this.orderDate = orderDate;
      this.orderTotal = orderTotal;
      this.taxTotal = taxTotal;
      this.grandTotal = grandTotal;
    }
  }

  export interface Item {
    itemNo: string;
    name: string;
    quantity: number;
    price: number;
    itemValue: number;
  }