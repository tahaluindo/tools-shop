import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Country, Description, FilterTxt, Seller } from "../../../Constant";
import {
  fetch_programScripts,
  fetch_select_options,
} from "../../../redux/actions/programScript";
const { getName } = require('country-list');

const Filter = () => {
  const dispatch = useDispatch();

  const searchParams = new URL(window.location.href).searchParams;

  useEffect(() => {
    dispatch(fetch_select_options());
  }, []);

  const { country, seller } = useSelector(
    (state) => state.programScript.programScriptOptionValue
  );

  const [filter, setFilter] = useState({
    country: searchParams.get("country") || "All",
    description: searchParams.get("description") || "",
    seller: searchParams.get("seller") || "All",
  });

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(`${e.target.name}`, e.target.value);
    window.history.pushState({ path: newUrl.href }, "", newUrl.href);
  };

  const onFilter = () => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", 1);
    dispatch(fetch_programScripts(filter));
  };

  return (
    <Fragment>
      <Row>
        <Col xl="2" lg="2" md="2" xs="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>{Country}</b>
            </Label>
            <Input
              type="select"
              name="country"
              value={filter.country}
              onChange={onChange}
              className="form-control digits"
            >
              <option>{"All"}</option>
              {country &&
                country.map((c, index) => (
                  <option value={c} key={index}>
                    {getName(c)}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="6" lg="6" md="6" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>{Description}</b>
            </Label>
            <Input
              type="text"
              name="description"
              value={filter.description}
              onChange={onChange}
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="2" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>{Seller}</b>
            </Label>
            <Input
              type="select"
              name="seller"
              value={filter.seller}
              onChange={onChange}
              className="form-control digits"
            >
              <option value={"All"}>{"All"}</option>
              {seller &&
                seller.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="2" sm="12" className="d-flex align-items-center">
          <Btn
            attrBtn={{
              color: "info",
              onClick: onFilter,
              style: { marginTop: "8px" },
            }}
          >
            {FilterTxt}
          </Btn>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Filter;
