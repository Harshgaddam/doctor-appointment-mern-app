import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { useState, useEffect } from "react";
import axios from "axios";

const DoctorScreen = () => {
  const { id: doctorId } = useParams();
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(`/api/doctor/${doctorId}`);
      setDoctor(data);
    };
    fetchDoctor();
  }, [doctorId]);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={doctor.image} alt={doctor.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{doctor.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={doctor.rating}
                text={`${doctor.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{doctor.speciality}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{doctor.education}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Book Appointment
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default DoctorScreen;
