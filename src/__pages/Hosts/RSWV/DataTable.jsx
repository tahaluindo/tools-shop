import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { fetch_vps, get_vps } from "../../../redux/actions/vps";
import { Btn } from "../../../AbstractElements";
import { tableColumns } from "./const";
import DataTable from "react-data-table-component";
import CustomePagination from "../../../__components/CustomePagination";
import EditModal from "./EditModal";
import ReactCountryFlag from "react-country-flag"

const moment = require("moment");
const { getName } = require('country-list');

const Table = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const { vps, cnt } = useSelector((state) => state.vps);
  const { user } = useSelector((state) => state.auth);

  const searchParams = new URL(window.location.href).searchParams;
  
  const filter = {};
  
  for (const key of searchParams.keys()) {
    filter[key] = searchParams.get(key);
  }
  
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(fetch_vps(filter));
  }, []);

  let tempData = [];

  useEffect(() => {
    vps.map((item) => {
      return tempData.push({
        country: (<><ReactCountryFlag countryCode={item.country} svg style={{ fontSize: '2em' }}/>&nbsp;<span>{getName(item.country)}</span></>),
        login: item.login,
        information: item.information,
        ram: item.ram,
        detect_hosting: item.detect_hosting,
        seller: item.seller,
        price: item.price,
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
                    dispatch(get_vps(item));
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
                    // onClick: {},
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
  }, [vps]);

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
      <CustomePagination cnt={cnt} func={fetch_vps} />
      <EditModal isOpen={modal} title={"Edit"} toggler={toggle} />
    </Fragment>
  );
};
export default Table;
