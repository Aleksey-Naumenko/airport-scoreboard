import React from "react";
import "../flightsList.scss";
import { connect } from "react-redux";
import * as flightsSelectors from "../redux/flights.selectors";
import { useParams } from "react-router-dom";
import Flight from "./Flight";

const FlightsList = ({ departureList, arrivalList }) => {
  let { direction, fltNo } = useParams();

  let listToRender = [];

  if (direction === "arrivals") {
    listToRender = arrivalList;
  } else {
    listToRender = departureList;
  }

  if (fltNo && listToRender) {
    const newList = listToRender.filter(
      flight => `${flight["carrierID.IATA"]}${flight.fltNo}` === fltNo
    );
    listToRender = newList;
  }

  return (
    <ul className="list">
      {listToRender.length === 0 ? (
        <div className="no-flights">No flights</div>
      ) : (
        listToRender.map(flight => {
          const classes = flight.term === "A" ? "terminal-a" : "terminal-d";
          return <Flight key={flight.ID} classes={classes} flight={flight} />;
        })
      )}
    </ul>
  );
};

const mapState = state => {
  return {
    departureList: flightsSelectors.getDepartureListSelector(state),
    arrivalList: flightsSelectors.getArrivalListSelector(state)
  };
};

export default connect(mapState)(FlightsList);
