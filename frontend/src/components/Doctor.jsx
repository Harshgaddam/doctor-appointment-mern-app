import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Doctor = ({ doctor }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/${doctor._id}`}>
        <Card.Img
          src={doctor.image}
          variant="top"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title as="div" className="text-center">
            <strong style={{ color: "black" }}>{doctor.name}</strong>
          </Card.Title>
        </Card.Body>
        <Card.Text as="h5" className="text-center">
          <div className="my-3">{doctor.speciality}</div>
        </Card.Text>
        <div as="h6" className="text-center">
          <Rating value={doctor.rating} text={doctor.numReviews} />
        </div>
      </Link>
    </Card>
  );
};

export default Doctor;
