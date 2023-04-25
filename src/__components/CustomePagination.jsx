import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { P } from "../AbstractElements";

const CustomePagination = (props) => {
  const dispatch = useDispatch();

  const { cnt, func } = props;

  const [show, setShow] = useState(10);
  const [page, setPage] = useState(1);

  const onChange = (e) => {
    const newUrl = new URL(window.location.href);
    const searchParams = newUrl.searchParams;
    searchParams.set(`${e.target.name}`, e.target.value);
    window.history.pushState({ path: newUrl.href }, "", newUrl.href);

    const filter = {};

    for (const key of searchParams.keys()) {
      filter[key] = searchParams.get(key);
    }

    dispatch(func(filter));
  };

  return (
    <Fragment>
      <Row>
        <Col sm={12} lg={3} md={12} className="text-center">
          <FormGroup className="row d-flex justify-content-center">
            <Label className="col-sm-3 col-form-label text-center">
              Show
            </Label>
            <Col sm="4">
              <Input
                className="form-control"
                type="select"
                name="limit"
                width="100px"
                defaultValue={show}
                onChange={(e) => {
                  const page = {
                    target: {
                      name: "page",
                      value: 1,
                    },
                  };
                  setPage(1);
                  onChange(page);
                  onChange(e);
                  setShow(e.target.value);
                }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col sm={12} lg={6} md={12} className="text-center my-2">
          <ReactPaginate
            pageCount={cnt < show ? 1 : cnt / show}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            selectedPageRel={null}
            onPageChange={(item) => {
              const e = {
                target: {
                  name: "page",
                  value: item.selected + 1,
                },
              };
              onChange(e);
              setPage(item.selected + 1);
            }}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousLabel="<"
            nextLabel=">"
          />
        </Col>
        <Col sm={12} lg={3} md={12} className="text-center">
          <P>
            Showing {(page - 1) * show + 1} to{" "}
            {page * show > cnt ? cnt : page * show} of {cnt} entries
          </P>
        </Col>
      </Row>
    </Fragment>
  );
};

CustomePagination.propTypes = {
  cnt: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};

export default CustomePagination;
