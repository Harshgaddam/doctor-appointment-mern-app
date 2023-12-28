import doctors from "../doctors";
import { Row, Col } from "react-bootstrap";
import Doctor from "../components/Doctor";

const Doctors = () => {
  return (
    <div>
      <Row>
        {doctors.map((doctor) => (
          <Col key={doctor.id} sm={12} md={6} lg={4} xl={3}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
