import { Row, Col } from "react-bootstrap";
import Doctor from "../components/Doctor";
import { useGetDoctorQuery } from "../slices/doctorApiSlice.js";

const Doctors = () => {
  const { data: doctors, isFetching, error } = useGetDoctorQuery();

  return (
    <>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <Row>
            {doctors.map((doctor) => (
              <Col key={doctor.id} sm={12} md={6} lg={4} xl={3}>
                <Doctor doctor={doctor} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default Doctors;
