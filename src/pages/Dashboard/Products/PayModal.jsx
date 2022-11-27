import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './CheckOut';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const PayModal = ({ payModal: product, setPayModal, refetch }) => {
    const { name, price } = product;
    return (
        <div>

            <input type="checkbox" id="pay-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setPayModal(null)} htmlFor="pay-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Pay For: {name}</h3>
                    <p className="py-4">Total Amount: {price}BDT</p>
                    <Elements stripe={stripePromise}>
                        <Checkout
                            product={product}
                            setPayModal={setPayModal}
                            refetch={refetch}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PayModal;