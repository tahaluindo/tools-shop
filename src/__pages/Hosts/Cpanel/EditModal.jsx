import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Close, SaveChanges } from "../../../Constant";
// import Scrollbars from "react-custom-scrollbars-2";
import { edit_cpanel } from "../../../redux/actions/cpanel";

const EditModal = (props) => {
  const { selected_cpanel } = useSelector((state) => state.cpanel);

  const [formData, setFormData] = useState(selected_cpanel);

  useEffect(() => {
    setFormData(selected_cpanel);
  }, [selected_cpanel]);

  const { country, ssl, seller } = useSelector(
    (state) => state.cpanel.cpanelOptionValue
  );

  const dispatch = useDispatch();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const saveCpanel = async () => {
    dispatch(edit_cpanel(formData));
    props.toggler();
  };
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered
    >
      <ModalHeader toggle={props.toggler}>{props.title}</ModalHeader>
      <ModalBody className={props.bodyClass}>
        {/* <Scrollbars
          className="click-drag-handler scroll-demo p-0 border-0"
          style={{ width: "100%", height: 300 }}
        > */}
        <Form>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label>Country</Label>
                <Input
                  type="select"
                  name="country"
                  defaultValue={formData.country}
                  onChange={onChange}
                >
                  {country &&
                    country.map((item, key) => (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>SSL</Label>
                <Input
                  type="select"
                  name="ssl"
                  defaultValue={formData.ssl}
                  onChange={onChange}
                >
                  {ssl &&
                    ssl.map((item, key) => (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label>Seller</Label>
                <Input
                  type="select"
                  name="seller"
                  defaultValue={formData.seller}
                  onChange={onChange}
                >
                  {seller &&
                    seller.map((item, key) => (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        {/* </Scrollbars> */}
      </ModalBody>
      <ModalFooter>
        <Btn attrBtn={{ color: "secondary", onClick: props.toggler }}>
          {Close}
        </Btn>
        <Button
          color="primary"
          onClick={() => {
            saveCpanel();
          }}
        >
          {SaveChanges}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
