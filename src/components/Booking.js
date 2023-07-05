import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGreaterThan } from "react-icons/fa";
import MiddleNav from "./MiddleNav";

function Booking() {
  const [cardList, setCardList] = useState([
    {
      title: "Total booking",
      amount: "10,000",
      btn_text: "+5 from last Month",
    },
    {
      title: "Pending Approvals booking",
      amount: "120",
      btn_text: "+5 from last Month",
    },
    {
      title: "New Clients This Month",
      amount: "89",
      btn_text: "+5 from last Month",
    },
    {
      title: "Returning Clients",
      amount: "49%",
      btn_text: "+5 from last Month",
    },
  ]);

  const getCardColorClass = (index) => {
    const colors = ["card-pink", "card-cream", "card-gray", "card-purple"];
    return colors[index % colors.length];
  };

  return (
    <>
      <div
        style={{ marginTop: "33px", marginBottom: "27px", marginLeft: "18rem" }}
      >
        <span className="booking_dash">Dashboard</span>
        <FaGreaterThan className="nav_greatersign" />{" "}
        <span className="booking_book">Bookings</span>
      </div>
      <div style={{ display: "flex", marginLeft: "16rem" }}>
        {cardList.map((item, index) => (
          <Card
            className={`text-center booking_main ${getCardColorClass(index)}`}
          >
            <Card.Body>
              <Card.Title className="booking_title">{item.title}</Card.Title>
              <Card.Text className="booking_amount_para">
                {item.amount}
              </Card.Text>
              <Button className="booking_btn">{item.btn_text}</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <MiddleNav />
    </>
  );
}

export default Booking;
