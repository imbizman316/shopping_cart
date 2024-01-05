export default function Card ({id,image,name,price,currency,count,itemCountHandleChange, handleAddCart}) {

  let currency_sign = "";

  switch (currency) {
    case "usd":
      currency_sign = "$"
      break;
    case "jpy":
      currency_sign = "¥"
      break;
    case "kow":
      currency_sign = "₩"
      break;
    default:
      currency_sign = ""
      break;
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img className="card_image" src={image} alt={name}></img>
      <div className="price_buy">
        <h4>{currency_sign}{price}</h4>
        <input type="number" value={count} onChange={itemCountHandleChange} id={id}></input>
        <button onClick={()=>handleAddCart(name,price,id)}>Add to Cart</button>
      </div>      
    </div>
  )
}