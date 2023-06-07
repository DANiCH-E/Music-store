import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../../redux/reducer';






export const Cart = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const dispatch = useDispatch();
  if (items.length == 0) {
    return <h1>Ваша корзина пуста</h1>
  }
  const endOfTheWord = () => {
    if ((items.length % 10) < 5 && (items.length % 10) > 1) {
      return'а'
    }
      else if ((items.length % 10) != 1) return 'ов'
      return ''
    }

    const calcTotalPrice = items => items.reduce((acc, prod) => acc += Number(prod.price), 0);
  return (
    <div>
    
    <div >
      <div > 
          { items.map(item => (
            <div>
                {item.title}
                {item.price}
                <Button onClick={() => {dispatch(deleteItemFromCart(item.id))}}>Удалить из корзины</Button>
            </div>
            
          ))}
        </div>
        <div className='order-page__right'>
          <div className='order-page__total-price'>
            <span>
                {items.length} товар{endOfTheWord()} на сумму: {calcTotalPrice(items)} руб.
            </span>
          </div>
        </div>
        
    </div>
    </div>
  )
}