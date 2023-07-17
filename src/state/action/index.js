
export const addMoney = (amount) => {
  return (send)=>{
        send({
            type:'add',
            payload : amount
        })
  }
}
export const subMoney = (amount) => {
    return (send)=>{
        send({
            type:'sub',
            payload : amount
        })
  }
}
