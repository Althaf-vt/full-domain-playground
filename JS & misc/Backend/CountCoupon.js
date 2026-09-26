const orders = [
  {
    _id: 1,
    userId: "U1",
    total: 500,
    couponUsed: true,
    couponCode: "SAVE50",
    createdAt: new Date("2026-04-01")
  },
  {
    _id: 2,
    userId: "U2",
    total: 300,
    couponUsed: false,
    couponCode: null,
    createdAt: new Date("2026-04-02")
  },
  {
    _id: 3,
    userId: "U3",
    total: 700,
    couponUsed: true,
    couponCode: "NEWUSER",
    createdAt: new Date("2026-04-03")
  },
  {
    _id: 4,
    userId: "U1",
    total: 200,
    couponUsed: false,
    couponCode: null,
    createdAt: new Date("2026-04-04")
  },
  {
    _id: 5,
    userId: "U4",
    total: 1000,
    couponUsed: false,
    couponCode: null,
    createdAt: new Date("2026-04-05")
  }
]

function countOrders(orders){
    let count = 0;

    for(let order of orders){
        if(order.couponUsed === false) count ++;
    }
    return count;
}

// console.log(countOrders(orders))