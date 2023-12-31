import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import "./chooseSeat.scss";
function ChooseSeat() {
  return (
    <>
      <Banner />
      <div className="choose-seat">
        <Container>
          <h3 className="choose-seat__heading">Choose seat</h3>
          <Row>
            <Col xs={8}>
              <div className="seat-map">
                <div className="screen"></div>
                <div className="seat-wrap">
                  <div className="seat-item selected">
                    <div>A1</div>
                  </div>
                  <div className="seat-item disable">
                    <div>A2</div>
                  </div>
                  <div className="seat-item">
                    <div>A3</div>
                  </div>
                  <div className="seat-item">
                    <div>A4</div>
                  </div>
                  <div className="seat-item">
                    <div>A5</div>
                  </div>
                  <div className="seat-item">
                    <div>A6</div>
                  </div>
                  <div className="seat-item">
                    <div>A7</div>
                  </div>
                  <div className="seat-item">
                    <div>A8</div>
                  </div>
                  <div className="seat-item">
                    <div>A9</div>
                  </div>
                  <div className="seat-item">
                    <div>A10</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                  <div className="seat-item">
                    <div>A1</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="booking-info">
                <h3>Booking information</h3>
                <div className="seat-selected">
                  <div className="info-heading">
                    <span>Seat</span>
                    <span>Price</span>
                  </div>
                  <div className="info-content">
                    <div className="seat-location">
                      <span>A1</span>
                    </div>
                    <div className="seat-price">
                      <span>100.000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-total">
                <div className="seat-total">
                  <span>Total</span>
                  <span>100.000</span>
                </div>
                <button className="checkout">Proceed to checkout</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ChooseSeat;
