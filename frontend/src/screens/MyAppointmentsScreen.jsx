import { Table, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMyAppointmentsQuery } from "../slices/userApiSlice";
import BookAppointment from "./BookAppointment";

const MyAppointmentsScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: appointments,
    isLoading,
    error,
  } = useMyAppointmentsQuery({ userId: userInfo._id });

  console.log(appointments);

  return (
    <>
      <Row>
        <Col sm={9}>
          <h2>My Appointments</h2>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : error ? (
            toast.error(error)
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>DOCTOR</th>
                  <th>SPECIALITY</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.createdAt.substring(0, 10)}</td>
                    <td>{appointment.doctorName}</td>
                    <td>{appointment.doctorSpeciality}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <BookAppointment />
        </Col>
      </Row>
    </>
  );
};

export default MyAppointmentsScreen;
