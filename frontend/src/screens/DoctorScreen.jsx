import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { useGetDoctorDetailsQuery } from "../slices/doctorApiSlice.js";
import { useEffect } from "react";
import { setDoctor } from "../slices/doctorApiSlice.js";
import { useDispatch } from "react-redux";
import BookAppointment from "../screens/BookAppointment";

const DoctorScreen = () => {
  const dispatch = useDispatch();
  const { id: doctorId } = useParams();
  const { data: doctor, isLoading, error } = useGetDoctorDetailsQuery(doctorId);

  useEffect(() => {
    doctor && dispatch(setDoctor(doctor));
  });

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error?.data?.message || error?.error}</h3>
      ) : (
        <>
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
                  <BookAppointment />
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default DoctorScreen;
