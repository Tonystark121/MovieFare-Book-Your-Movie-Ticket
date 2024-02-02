import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function GridComplexExample({data}) {
  const [movieName, setMovieName] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    const userData = {
      movieName,
      address,
      time,
      city,
      date
    }
    const jsonData = JSON.stringify(userData);
    localStorage.setItem('user', jsonData);
    setIsBooked(!isBooked);
  };

  if (!isBooked) {
    return (
      <Form onSubmit={handleSubmission}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Avenger Endgame"
              value={data?.show?.name}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Shift</Form.Label>
            <Form.Control
              type="time"
              placeholder="12:14"
              required
              value={data?.show?.schedule?.time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Near Lanka IIT BHU"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="enter city Name"
              required
              value={'Varanasi'}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="choose a date"
              required
              value={'2023-03-01'}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" required label="confirm booking" />
        </Form.Group>

        <Button variant="danger" className="bg-red-700" type="submit">
          Book Now
        </Button>
      </Form>
    );
  } else {
    return (
      <div className="flex justify-center items-center place-items-center">
        <h1 className="text-6xl text-center items-center font-bold text-green-600">
          Ticked Booked!
        </h1>
      </div>
    );
  }
}

export default GridComplexExample;
