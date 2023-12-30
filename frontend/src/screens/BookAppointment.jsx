import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book-appointment");
  };

  return (
    <div>
      <Button
        className="btn-block"
        type="button"
        style={{ backgroundColor: "green", color: "white" }}
        onClick={handleClick}
      >
        Book Appointment
      </Button>
    </div>
  );
};

export default BookAppointment;
