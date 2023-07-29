import { useState } from 'react';
import { Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';

import iconSmartly from '../../../assets/icon-smartly.svg';
import iconConveniently from '../../../assets/icon-conveniently.svg';
import iconEfficiently from '../../../assets/icon-efficiently.svg';
import './NewToInvesting.scss';

const NewToInvesting = () => {
  const [key, setKey] = useState('individuals');
  return (
    <Container as='section' className='lendo__new-to-investing pb-5 mt-5' fluid>
      <Row className='px-0'>
        <Col lg={9} className='mx-auto'>
          <Tabs id='lendo__new-to-investing-section' activeKey={key} onSelect={(k) => setKey(k)} className='mb-3 justify-content-center lendo__new-to-investing-section'>
            <Tab eventKey='individuals' title='For Individuals'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='lendo__new-to-investing-section-content-header py-5 text-center'>
                  <p class='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                  <h2 class='fw-bolder text-white'>Startup, medium, or large?</h2>
                </div>

                <Row className='justify-content-center text-center py-5'>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconSmartly} className='icon-smartly' />
                      <h4 className='fw-bold text-white py-4'>Smartly</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconConveniently} className='icon-smartly' />
                      <h4 className='fw-bold text-white py-4'>Conveniently</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconEfficiently} className='icon-smartly' />
                      <h4 className='fw-bold text-white py-4'>Efficiently</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab eventKey='business' title='For Business'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='lendo__new-to-investing-section-content-header py-5 text-center'>
                  <p class='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                  <h2 class='fw-bolder text-white'>For Business Header</h2>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default NewToInvesting;
