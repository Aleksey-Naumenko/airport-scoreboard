import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as flightsActions from "../redux/flights.actions";
import SearchBody from "./SearchBody";

const SearchField = ({ setList }) => {
  const [searchText, setSearchText] = useState("");
  let history = useHistory();
  let location = useLocation();
  const { fltNo, direction } = useParams();

  useEffect(() => {
    if (searchText) {
      history.push(`${location.pathname}/${searchText}`);
    }
  }, [direction]);

  useEffect(() => {
    setList();
    if (fltNo) setSearchText(fltNo);
  }, []);

  const onChange = e => {
    const { value } = e.target;
    setSearchText(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (fltNo && searchText) {
      return;
    }

    searchText
      ? history.push(`${location.pathname}/${searchText}`)
      : history.push(`/${direction}`);
  };

  return (
    <>
      <h1 className="scoreboard__title">Search Flight</h1>

      <form onSubmit={onSubmit} className="scoreboard-form">
        <div className="scoreboard-form__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          className="scoreboard-form__input"
          type="text"
          value={searchText}
          onChange={onChange}
          placeholder="Airline, destinayion or flight #"
        />
        <button type="submit " className="scoreboard-form__btn btn">
          Find
        </button>
      </form>

      <SearchBody />
    </>
  );
};

const mapDispatch = {
  setList: flightsActions.getFlightList
};

export default connect(null, mapDispatch)(SearchField);
