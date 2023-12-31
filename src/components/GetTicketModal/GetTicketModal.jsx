import { useState } from "react";
import "./getTicketModal.scss";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const dayArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default function GetTicketModal(props) {
  const currentDate = new Date();
  const [activeDate, setActiveDate] = useState(
    `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`
  );
  const renderShowtimeDate = () => {
    const dayArr = [];
    for (let i = 0; i < 13; i++) {
      const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      dayArr.push(date);
    }
    return dayArr;
  };
  return (
    <>
      <Modal {...props} dialogClassName="modal-90w" scrollable={true}>
        <Modal.Header closeButton>
          <div className="showtime-date">
            {renderShowtimeDate().map((date, index) => {
              const dateFormat = `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`;
              return (
                <div
                  className={
                    activeDate === dateFormat
                      ? "showtime-item active"
                      : "showtime-item"
                  }
                  key={index}
                  data-date={dateFormat}
                  onClick={() => {
                    setActiveDate(dateFormat);
                  }}
                >
                  <div>
                    <span className="month">{date.getMonth() + 1}</span>
                    <span>{dayArr[date.getDay()]}</span>
                  </div>
                  <span className="date">{date.getDate()}</span>
                </div>
              );
            })}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
          <div className="showtime-info">
            <h4 className="showtime-heading">CGV Bắc Từ Liêm</h4>
            <span className="showtime-address">Hà Nội</span>
            <div className="showtime-wrap">
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
              <Link className="showtime-time">8:30 am</Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
