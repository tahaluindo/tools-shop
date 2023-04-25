import React, { Fragment, useEffect, useState } from "react";
import "url-search-params-polyfill";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { FilterTxt } from "../../../Constant";
import { fetch_rdps, fetch_select_options } from "../../../redux/actions/rdps";

const { getName } = require('country-list');

const Filter = () => {
  const dispatch = useDispatch();

  const searchParams = new URL(window.location.href).searchParams;

  useEffect(() => {
    dispatch(fetch_select_options());
  }, []);

  const { country, access, windows, seller } = useSelector(
    (state) => state.rdps.rdpsOptionValue
  );

  const [filter, setFilter] = useState({
    country: searchParams.get("country") || "All",
    windows: searchParams.get("windows") || "All",
    access: searchParams.get("access") || "All",
    seller: searchParams.get("seller") || "All",
    detect_hosting: searchParams.get("detect_hosting") || "",
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
    dispatch(fetch_rdps(filter));
  };

  return (
    <Fragment>
      <Row>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Country</b>
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
        <Col xl="3" lg="3" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Windows Type</b>
            </Label>
            <Input
              type="select"
              name="windows"
              value={filter.windows}
              onChange={onChange}
              className="form-control digits"
            >
              <option>{"All"}</option>
              {windows &&
                windows.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <i className="fa fa-user-shield"></i>
              <b>Access</b>
            </Label>
            <Input
              type="select"
              name="access"
              value={filter.access}
              onChange={onChange}
              className="form-control digits"
            >
              <option value={"All"}>{"All"}</option>
              {access &&
                access.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="4" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Detected Hosting</b>
            </Label>
            <Input
              type="text"
              name="detect_hosting"
              value={filter.detect_hosting}
              onChange={onChange}
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="4" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>Seller</b>
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
        <Col xl="1" lg="1" md="4" sm="12" className="d-flex align-items-center">
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
