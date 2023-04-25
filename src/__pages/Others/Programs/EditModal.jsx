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
import { edit_programScript } from "../../../redux/actions/programScript";

const EditModal = (props) => {
  const { selected_programScript } = useSelector((state) => state.programScript);

  const [formData, setFormData] = useState(selected_programScript);

  useEffect(() => {
    setFormData(selected_programScript);
  }, [selected_programScript]);

  const { country, seller } = useSelector(
    (state) => state.programScript.programScriptOptionValue
  );

  const dispatch = useDispatch();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const saveProgramScript = async () => {
    dispatch(edit_programScript(formData));
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
            <Col sm={12}>
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
          </Row>
          <Row>
            <Col sm={12}>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  defaultValue={formData.description}
                  onChange={onChange}
                />
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
            saveProgramScript();
          }}
        >
          {SaveChanges}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditModal;
