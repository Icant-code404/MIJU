import React from "react";
import { SwipeableList, SwipeableListItem } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const SwipeCard = () => {
  return (
    <SwipeableList>
      <SwipeableListItem
        swipeLeft={{ content: <div style={{ backgroundColor: "red", padding: "20px" }}>Reject</div> }}
        swipeRight={{ content: <div style={{ backgroundColor: "green", padding: "20px" }}>Accept</div> }}
      >
        <div style={{ width: "300px", height: "400px", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "24px", borderRadius: "20px" }}>
          Swipe Me!
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default SwipeCard;
