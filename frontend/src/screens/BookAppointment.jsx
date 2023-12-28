import { Button } from "react-bootstrap";

const BookAppointment = () => {
  return (
    <div>
      <Button
        className="btn-block"
        type="button"
        style={{ backgroundColor: "green", color: "white" }}
      >
        Book Appointment
      </Button>
    </div>
  );
};

export default BookAppointment;
