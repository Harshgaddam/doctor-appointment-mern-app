import { Row, Col } from "react-bootstrap";
import Doctor from "../components/Doctor";
import { useState, useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/doctors`);
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

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
