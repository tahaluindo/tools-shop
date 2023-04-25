import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Domain, TLD, FilterTxt } from "../../../Constant";
import {
  fetch_shells,
  fetch_select_options,
} from "../../../redux/actions/shell";
const { getName } = require('country-list');

const Filter = () => {
  const dispatch = useDispatch();

  const searchParams = new URL(window.location.href).searchParams;

  useEffect(() => {
    dispatch(fetch_select_options());
  }, []);

  const { country, ssl, seller } = useSelector(
    (state) => state.shell.shellOptionValue
  );

  const [filter, setFilter] = useState({
    country: searchParams.get("country") || "All",
    tld: searchParams.get("tld") || "",
    ssl: searchParams.get("ssl") || "All",
    detect_hosting: searchParams.get("detect_hosting") || "",
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
    dispatch(fetch_shells(filter));
  };

  return (
    <Fragment>
      <Row>
        <Col xl="2" lg="2" md="2" sm="12">
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
        <Col xl="2" lg="2" md="2" sm="12">
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>
                {Domain} {TLD}
              </b>
            </Label>
            <Input
              type="text"
              name="tld"
              value={filter.tld}
              onChange={onChange}
              className="form-control"
            />
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="2" sm="12">
        <FormGroup>
            <Label htmlFor="exampleFormControlInput1">
              <b>SSL</b>
            </Label>
            <Input
              type="select"
              name="ssl"
              value={filter.ssl}
              onChange={onChange}
              className="form-control digits"
            >
              <option>{"All"}</option>
              {ssl &&
                ssl.map((c, index) => (
                  <option value={c} key={index}>
                    {c}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </Col>
        <Col xl="2" lg="2" md="2" sm="12">
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
        <Col xl="2" lg="2" md="2" sm="12">
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
