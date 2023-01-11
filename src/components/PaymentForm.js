import React from 'react';

const PaymentForm = ({ handlePayment }) => {
  return(
    <form onSubmit={ handlePayment } >
      <ul>
        <li>
          <div>
            <label htmlFor='user-name' >NAME</label>
            <input type="text" id="user-name" pattern="^[A-z]+$" minLength="2" required placeholder='ex; John' />
          </div>
          <div>
            <label htmlFor='user-last-name' >LASTNAME</label>
            <input type="text" id="user-last-name" pattern='^[A-z]+$' minLength="2" required placeholder='ex; Doe' />
          </div>
        </li>
        <li>
          <div>
            <label htmlFor='user-email' >E-MAIL</label>
            <input type="email" id="user-email" pattern="^[www/.]+[A-z0-9]{4,}@[a-z]+[/.][a-z]{2,3}" required placeholder='ex; www.johndoe@gmail.com' />
          </div>
          <div>
            <label htmlFor='user-zcode' >ZIP CODE</label>
            <input type='number' id="user-zcode" maxLength="5" minLength="4" required placeholder='ex; 86556' />
          </div>
        </li>
        <li>
          <div>
            <label htmlFor='user-street' >STREET</label>
            <input type="text" id="user-street" pattern="^[A-z]+[ A-z]{0,}" minLength="5" required placeholder='ex; Baker Street' />
          </div>
          <div>
            <label htmlFor='cities' >CITY</label>
            <select name="cities" id="cities" >
              <option value="new-york" >New York</option>
              <option value="baltimore" >Baltimore</option>
              <option value="chicago" >Chicago</option>
              <option value="oklahoma" selected >Oklahoma</option>
              <option value="detroit" >Detroit</option>
              <option value="san-diego" >San Diego</option>
            </select>
          </div>
        </li>
        <li>
          <li>
            <div className='form-credit-card' >
              <label>CREDIT CARD NUMBER</label>
              <input type="tel" id="user-credit-card" minLength="15" maxLength="19" pattern='[0-9]{4}[/-][0-9]{4}[/-][0-9]{4}[/-][0-9]{4}' placeholder='ex; XXXX-XXXX-XXXX-XXXX' required />
            </div>
          </li>
        </li>
        <li>
          <div>
            <label htmlFor='user-card-exp'>EXPIRATION DATE</label>
            <input type="text" id="user-card-exp" pattern="^[0-9]{2}[/][0-9]{2}" required placeholder='ex; 02/23' />
          </div>
          <div>
            <label htmlFor='user-card-code' >CODE</label>
            <input type='tel' id="user-card-code" pattern='^[0-9]{3}' required placeholder='ex; 123' />
          </div>
        </li>
      </ul>
      <button type='submit' >BUY</button>
    </form>
  )
}

export default PaymentForm;