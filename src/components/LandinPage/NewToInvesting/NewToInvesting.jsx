import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Tab,
  Tabs
} from 'react-bootstrap';
import { Div, H2, H4, Text } from '../../UI/Tag/Tag';
import iconSmartly from '../../../assets/icon-smartly.svg';
import iconConveniently from '../../../assets/icon-conveniently.svg';
import iconEfficiently from '../../../assets/icon-efficiently.svg';

import './NewToInvesting.css';

const NewToInvesting = () => {
  const [key, setKey] = useState('individuals');
  return (
    <Container
      as="section"
      className="lendo__new-to-investing pb-5 mt-5"
      fluid
    >
      <Row className="px-0">
        <Col lg={10} className="mx-auto">
          <Tabs
            id="lendo__new-to-investing-section"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center lendo__new-to-investing-section"
          >
            <Tab eventKey="individuals" title="For Individuals">
              <Div className="lendo__new-to-investing-section-content-wrapper d-flex flex-column justify-content-center">
                <Div className="lendo__new-to-investing-section-content-header text-center">
                  <Text className="fw-lighter mb-0">
                    Smartly. Conveniently. Efficiently
                  </Text>
                  <H2 className="fw-bolder text-white">
                    Startup, medium, or large?
                  </H2>
                </Div>

                <Row className="lendo__new-to-investing-section-content-list justify-content-center text-center">
                  <Col lg={4}>
                    <Div className="w-75 mx-auto">
                      <Image
                        src={iconSmartly}
                        className="icon-smartly"
                      />
                      <H4 className="fw-bold text-white pt-5 pb-3">
                        Smartly
                      </H4>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod
                      </Text>
                    </Div>
                  </Col>
                  <Col lg={4}>
                    <Div className="w-75 mx-auto">
                      <Image
                        src={iconConveniently}
                        className="icon-smartly"
                      />
                      <H4 className="fw-bold text-white pt-5 pb-3">
                        Conveniently
                      </H4>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod
                      </Text>
                    </Div>
                  </Col>
                  <Col lg={4}>
                    <Div className="w-75 mx-auto">
                      <Image
                        src={iconEfficiently}
                        className="icon-smartly"
                      />
                      <H4 className="fw-bold text-white pt-5 pb-3">
                        Efficiently
                      </H4>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod
                      </Text>
                    </Div>
                  </Col>
                </Row>
              </Div>
            </Tab>

            <Tab eventKey="business" title="For Business">
              <Div className="lendo__new-to-investing-section-content-wrapper d-flex flex-column justify-content-center">
                <Div className="lendo__new-to-investing-section-content-header text-center">
                  <Text className="fw-lighter mb-0">
                    Smartly. Conveniently. Efficiently
                  </Text>
                  <H2 className="fw-bolder text-white">
                    For Business Header
                  </H2>
                </Div>
              </Div>
            </Tab>
          </Tabs>

          <Div className="lendo__new-to-investing-section-cta d-flex justtify-content-between align-items-center shadow">
            <Div className="lendo__new-to-investing-section-cta-left">
              <Text className="fw-lighter mb-0">
                Smartly. Conveniently. Efficiently
              </Text>
              <H2 className="fw-bolder">
                New to investing?
                <br />
                No worries, we’re here to help.
              </H2>
            </Div>
            <Div className="lendo__new-to-investing-section-cta-right d-flex flex-column ms-auto">
              <Button size="lg" className="mb-3">
                Start Learning
              </Button>
              <Button variant="outline-secondary" size="lg">
                Ask a Question
              </Button>
            </Div>
          </Div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewToInvesting;
