import { USERS_URL } from "../constants.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import axios from "axios";

const PaymentScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { doctor: selectedDoctor } = useSelector((state) => state.doctor);
  const [stripeToken, setStripeToken] = useState(null);
  const { booking } = useSelector((state) => state.booking);
  console.log("booking", booking);
  console.log(selectedDoctor);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeBooking = async () => {
      const doctorId = selectedDoctor._id;
      const userId = userInfo._id;
      const appointmentDate = booking.date;
      const token = stripeToken.id;
      console.log(doctorId, userId, appointmentDate, token);

      const r = await axios.get("/api/doctors/");
      console.log(r.data);

      const book = await axios.post(`${USERS_URL}/book-appointment`, {
        doctorId,
        userId,
        appointmentDate,
        token,
      });

      console.log(book);
      navigate("/");
    };

    stripeToken && makeBooking();
  }, [stripeToken, userInfo._id, selectedDoctor.doctorId, navigate]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StripeCheckout
          description={`Your total is $${100 * 100}`}
          amount={100 * 100}
          token={onToken}
          stripeKey="pk_test_51Nrx2fSDfaBohUdERdB8pNfpXHWIsfd1ZFyo5b5zuESbjln0AVmjDfZ3BFDojoX1ZtIO8iIRsVKBKt3uJb3cjYLO00rDOPrZm2"
        >
          <Button style={{ backgroundColor: "green", color: "white" }}>
            CHECKOUT NOW
          </Button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default PaymentScreen;
