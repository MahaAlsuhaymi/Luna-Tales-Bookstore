import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import imgcards from '../Assest/imgcards.png';
import MainLayout from '../Layouts/MainLayout';
import BookStoreContext from '../Context/BookStoreContext';

const Checkout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const total = query.get('total');
  const { cartInfo } = useContext(BookStoreContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate('/'); // Redirect to home page
    window.location.reload(); // Refresh the page
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const inputs = form.querySelectorAll('input');
    let isValid = true;
    let errorMessage = ""; // Accumulate error messages

    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
        errorMessage += `${input.placeholder} is required.\n`; // Accumulate error messages
      }
    });

    if (isValid) {
      setShowModal(true);
    } else {
      alert(errorMessage.trim()); // Show all error messages at once
    }
  };

  return (
    <>
      <MainLayout>
        <div className="container-checkout mt-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row-checkout">
                <div className="column-checkout">
                  <h3 className="title-checkout">Billing Address</h3>
                  <div className="input-box-checkout">
                    <span>Full Name :</span>
                    <input type="text" placeholder="Jacob Aiden" required />
                  </div>
                  <div className="input-box-checkout">
                    <span>Email :</span>
                    <input type="email" placeholder="example@example.com" required />
                  </div>
                  <div className="input-box-checkout">
                    <span>Address :</span>
                    <input type="text" placeholder="Room - Street - Locality" required />
                  </div>
                  <div className="input-box-checkout">
                    <span>City :</span>
                    <input type="text" placeholder="Berlin" required />
                  </div>
                  <div className="flex-checkout">
                    <div className="input-box-checkout">
                      <span>State :</span>
                      <input type="text" placeholder="Germany" required />
                    </div>
                    <div className="input-box-checkout">
                      <span>Zip Code :</span>
                      <input type="number" placeholder="123 456" required />
                    </div>
                  </div>
                </div>

                <div className="column-checkout">
                  <h3 className="title-checkout">Payment</h3>
                  <div className="input-box-checkout">
                    <span>Cards Accepted :</span>
                    <img src={imgcards} alt="Accepted Cards" />
                  </div>
                  <div className="input-box-checkout">
                    <span>Name On Card :</span>
                    <input type="text" placeholder="Mr. Jacob Aiden" required />
                  </div>
                  <div className="input-box-checkout">
                    <span>Credit Card Number :</span>
                    <input type="number" placeholder="1111 2222 3333 4444" required />
                  </div>
                  <div className="input-box-checkout">
                    <span>Exp. Month :</span>
                    <input type="text" placeholder="August" required />
                  </div>
                  <div className="flex-checkout">
                    <div className="input-box-checkout">
                      <span>Exp. Year :</span>
                      <input type="number" placeholder="2025" required />
                    </div>
                    <div className="input-box-checkout">
                      <span>CVV :</span>
                      <input type="number" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-checkout">Pay</button>
            </form>
          </div>

          <div className="col-md-6 mt-5">
            <div>
              <h5 className='text-start'><strong>ORDER SUMMARY</strong></h5>
              <ul className="list-group list-group-numbered">
                {cartInfo.map((item) => (
                  <li key={item.id} className='list-group-item text-start'>
                    <p>{item.title} x {item.quantity}</p>
                    <p className="float-end">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="order-summary-item total">
                <strong>Total: ${total}</strong>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="modal show" data-bs-target="#staticBackdrop" style={{ display: 'block',  backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleClose}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Payment Confirmation</h5>
                    <button type="button" className="close" onClick={handleClose}>
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <h5>Your payment has been successfully processed.</h5>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-dark" id='addbutton' onClick={handleClose}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default Checkout;