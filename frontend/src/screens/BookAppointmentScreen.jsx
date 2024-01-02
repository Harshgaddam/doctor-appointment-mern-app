import React, { useState } from "react";
// import Steps from "../components/Steps";
import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveBooking } from "../slices/bookingSlice";
import StripeCheckout from "react-stripe-checkout";
import { useBookAppointmentMutation } from "../slices/userApiSlice.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { USERS_URL } from "../constants.js";

const BookAppointment = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeBooking = async () => {
      console.log("Inside");
      const booking = JSON.parse(localStorage.getItem("booking"));
      console.log(booking);
      const userId = userInfo._id;
      const appointmentDate = booking.date;
      const token = stripeToken.id;
      const book = await axios.post(`${USERS_URL}/book-appointment`, {
        doctorId: "658fb35f4e5d4b02b256c149",
        userId,
        appointmentDate,
        token,
      });
      console.log(book);
      navigate("/");
    };

    stripeToken && makeBooking();
  }, [stripeToken, dispatch, navigate, userInfo._id]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [doctor, setDoctor] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveBooking({
        name,
        age,
        doctor,
        problemDescription,
        symptoms,
        date,
        time,
      })
    );
  };

  return (
    <>
      <FormContainer>
        {/* <Steps step1> */}
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>
              <strong>Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="age">
            <Form.Label>
              <strong>Age</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter age"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="doctor">
            <Form.Label>
              <strong>Doctor</strong>
            </Form.Label>
            <Form.Select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="">Select a doctor</option>
              <option value="cardio">Cardiologist</option>
              <option value="dermo">Dermatologist</option>
              <option value="ortho">Orthopedic</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="my-2" controlId="problemDescription">
            <Form.Label>
              <strong>Problem Description</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Problem Description"
              value={problemDescription}
              required
              onChange={(e) => setProblemDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="symptoms">
            <Form.Label>
              <strong>Symptoms</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Symptoms"
              value={symptoms}
              required
              onChange={(e) => setSymptoms(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>

        <Form.Group className="my-2" controlId="date">
          <Form.Label>
            <strong>referred Date</strong>
          </Form.Label>
          <Form.Control
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="time">
          <Form.Label>
            <strong>Preferred Time</strong>
          </Form.Label>
          <Form.Control
            type="time"
            placeholder="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* </Steps> */}
      </FormContainer>
      <br />
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

export default BookAppointment;
