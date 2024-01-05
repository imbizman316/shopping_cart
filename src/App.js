import React from 'react';
import './App.css';
import Card from './components/Card';
import data from './components/Products';
import Navigator from './components/Navigator';


function App() {

  const [productInfo, setProductInfo] = React.useState(data);

  //---------------This is where you handle the item count--------------
  const itemCountHandleChange = (e) => { 

    let temp = [];

    productInfo.forEach((each) => {
      
      if (parseInt(each.id) === parseInt(e.target.id)) {
        
        if (e.target.value < 0) {
          temp.push({...each, count: 0 })  
        } 
        else {
          temp.push({...each, count: e.target.value })
        }
      } 
      else {
        temp.push(each)
      }

    })
    setProductInfo(temp);
  }

  //---------------This is where you handle add cart--------------//
  const handleAddCart = (name, price, id) => {
    
    let temp = [];

    productInfo.forEach((each) => {
      if (parseInt(each.id) === parseInt(id)) {
        temp.push({...each, isCart: true})
      } else {
        temp.push(each)
      }
    })

    setProductInfo(temp);

  }

  
  return (
    <div>
      <Navigator />
      <p>This is home</p>
      <div className='products_total'>
        <div>
          {productInfo.map( each => {
            return (
              <Card 
                key={each.id}
                id={each.id}
                image={each.image}
                name={each.name}
                price={each.price}
                currency={each.currency}            
                count={each.count}
                itemCountHandleChange={itemCountHandleChange}
                handleAddCart={handleAddCart}
              />
            )        
          })}
        </div>        
        <div>
          {productInfo.map( each => {
            if (each.isCart) {
              return (
                <div>
                  <h3>{each.name}</h3>
                  <h2>{each.price}</h2>
                  <h2>{each.count}</h2>
                </div>
              )
            }            
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
