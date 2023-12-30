import React, { useState } from "react";
// import Steps from "../components/Steps";
import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveBooking } from "../slices/bookingSlice";

const BookAppointment = () => {
  const dispatch = useDispatch();

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
        <Button
          type="button"
          className="btn-block"
          onClick={submitHandler}
          style={{
            backgroundColor: "green",
            color: "white",
          }}
        >
          Book
        </Button>
      </div>
    </>
  );
};

export default BookAppointment;
