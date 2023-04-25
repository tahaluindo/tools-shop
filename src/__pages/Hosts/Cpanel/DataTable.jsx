import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_cpanels, get_cpanel } from "../../../redux/actions/cpanel";
import { tableColumns } from "./const";
import { Btn } from "../../../AbstractElements";
import DataTable from "react-data-table-component";
import CustomePagination from "../../../__components/CustomePagination";
import EditModal from "./EditModal";
import ReactCountryFlag from "react-country-flag"

const moment = require("moment");
const { getName } = require('country-list');

const Table = () => {
  const dispatch = useDispatch();

  const { cpanels, cnt } = useSelector((state) => state.cpanel);
  const { user } = useSelector((state) => state.auth);

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const searchParams = new URL(window.location.href).searchParams;

  const filter = {};

  let tempData = [];

  for (const key of searchParams.keys()) {
    filter[key] = searchParams.get(key);
  }

  useEffect(() => {
    dispatch(fetch_cpanels(filter));
  }, []);

  useEffect(() => {
    cpanels.map((item) => {
      return tempData.push({
        country: (<><ReactCountryFlag countryCode={item.country} svg style={{ fontSize: '2em' }}/>&nbsp;<span>{getName(item.country)}</span></>),
        domain: item.domain,
        tld: item.tld,
        ssl:
          item.ssl === "https" ? (
            <span className="text-success">
              <i className="fa fa-lock"></i>&nbsp;https
            </span>
          ) : (
            <span>
              <i className="fa fa-unlock"></i>&nbsp;http
            </span>
          ),
        detect_hosting: item.detect_hosting,
        seller: item.seller,
        price: `$ ${item.price}`,
        added_on: moment(item.date).format("yyyy.MM.DD hh:mm:ss A"),
        action: (
          <div className="btn-group-showcase">
            <ButtonGroup
              className="btn-group-pill"
              style={{ display: "contents" }}
            >
              <Btn
                attrBtn={{
                  size: "sm",
                  className: "p-2",
                  color: "success",
                  outline: true,
                }}
              >
                <i className="fa fa-paper-plane-o"></i>
              </Btn>
              {user && user.role === "admin" ? (
                <Button
                  size="sm"
                  className="p-2"
                  color="info"
                  outline={true}
                  onClick={() => {
                    dispatch(get_cpanel(item));
                    toggle(item);
                  }}
                >
                  <i className="fa fa-edit"></i>
                </Button>
              ) : (
                <Btn
                  attrBtn={{
                    size: "sm",
                    className: "p-2",
                    color: "info",
                    outline: true,
                    // onClick: toggle(item),
                  }}
                >
                  <i className="fa fa-shopping-cart"></i>
                </Btn>
              )}
            </ButtonGroup>
          </div>
        ),
      });
    });
    setData(tempData);
  }, [cpanels]);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Fragment>
      <DataTable
        data={data}
        columns={tableColumns}
        striped={true}
        center={false}
        responsive={true}
      />
      <hr className="mt-4 mb-4" />
      <CustomePagination cnt={cnt} func={fetch_cpanels} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
