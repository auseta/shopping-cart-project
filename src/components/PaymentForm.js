import React from 'react';

const PaymentForm = ({ handlePayment }) => {
  return(
    <form className='form' onSubmit={ handlePayment } >
      <ul className='form__ul' >
        <li className="form__li" >
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-name' >NAME</label>
            <input className="form__input" type="text" id="user-name" pattern="^[A-z]+$" minLength="2" required placeholder='ex; John' />
          </div>
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-last-name' >LASTNAME</label>
            <input className="form__input" type="text" id="user-last-name" pattern='^[A-z]+$' minLength="2" required placeholder='ex; Doe' />
          </div>
        </li>
        <li className="form__li" >
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-email' >E-MAIL</label>
            <input className="form__input" type="email" id="user-email" pattern="^[www/.]+[A-z0-9]{4,}@[a-z]+[/.][a-z]{2,3}" required placeholder='ex; www.johndoe@gmail.com' />
          </div>
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-zcode' >ZIP CODE</label>
            <input className="form__input" type='number' id="user-zcode" maxLength="5" minLength="4" required placeholder='ex; 86556' />
          </div>
        </li>
        <li className="form__li" >
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-street' >STREET</label>
            <input className="form__input" type="text" id="user-street" pattern="^[A-z]+[ A-z]{0,}" minLength="5" required placeholder='ex; Baker Street' />
          </div>
          <div className="form__div--li" >
            <label className="form__label" htmlFor='cities' >CITY</label>
            <select className="form__select" name="cities" id="cities" >
              <option value="new-york" >New York</option>
              <option value="baltimore" >Baltimore</option>
              <option value="chicago" >Chicago</option>
              <option value="oklahoma" selected >Oklahoma</option>
              <option value="detroit" >Detroit</option>
              <option value="san-diego" >San Diego</option>
            </select>
          </div>
        </li>
        <li className="form__li" >
          <div className='form__credit form__div--li' >
            <label className="form__label" htmlFor="user-credit-card" >CREDIT CARD NUMBER</label>
            <input className="form__input--credit" type="tel" id="user-credit-card" minLength="15" maxLength="19" pattern='[0-9]{4}[/-][0-9]{4}[/-][0-9]{4}[/-][0-9]{4}' placeholder='ex; XXXX-XXXX-XXXX-XXXX' required />
          </div>
        </li>
        <li className="form__li" >
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-card-exp'>EXPIRATION DATE</label>
            <input className="form__input" type="text" id="user-card-exp" pattern="^[0-9]{2}[/][0-9]{2}" required placeholder='ex; 02/23' />
          </div>
          <div className="form__div--li" >
            <label className="form__label" htmlFor='user-card-code' >CODE</label>
            <input className="form__input" type='tel' id="user-card-code" pattern='^[0-9]{3}' required placeholder='ex; 123' />
          </div>
        </li>
      </ul>
      <button className="form__button" type='submit' >BUY</button>
    </form>
  )
}

export default PaymentForm;