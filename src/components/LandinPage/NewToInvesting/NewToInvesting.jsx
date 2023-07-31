import { useState } from 'react';
import { Button, Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';

import iconSmartly from '../../../assets/icon-smartly.svg';
import iconConveniently from '../../../assets/icon-conveniently.svg';
import iconEfficiently from '../../../assets/icon-efficiently.svg';
import './NewToInvesting.scss';

const NewToInvesting = () => {
  const [key, setKey] = useState('individuals');
  return (
    <Container as='section' className='lendo__new-to-investing pb-5 mt-5' fluid>
      <Row className='px-0'>
        <Col lg={10} className='mx-auto'>
          <Tabs id='lendo__new-to-investing-section' activeKey={key} onSelect={(k) => setKey(k)} className='mb-3 justify-content-center lendo__new-to-investing-section'>
            <Tab eventKey='individuals' title='For Individuals'>
              <div className='lendo__new-to-investing-section-content-wrapper d-flex flex-column justify-content-center'>
                <div className='lendo__new-to-investing-section-content-header text-center'>
                  <p class='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                  <h2 class='fw-bolder text-white'>Startup, medium, or large?</h2>
                </div>

                <Row className='lendo__new-to-investing-section-content-list justify-content-center text-center'>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconSmartly} className='icon-smartly' />
                      <h4 className='fw-bold text-white pt-5 pb-3'>Smartly</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconConveniently} className='icon-smartly' />
                      <h4 className='fw-bold text-white pt-5 pb-3'>Conveniently</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className='w-75 mx-auto'>
                      <Image src={iconEfficiently} className='icon-smartly' />
                      <h4 className='fw-bold text-white pt-5 pb-3'>Efficiently</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab eventKey='business' title='For Business'>
              <div className='lendo__new-to-investing-section-content-wrapper d-flex flex-column justify-content-center'>
                <div className='lendo__new-to-investing-section-content-header text-center'>
                  <p class='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
                  <h2 class='fw-bolder text-white'>For Business Header</h2>
                </div>
              </div>
            </Tab>
          </Tabs>

          <div className='lendo__new-to-investing-section-cta d-flex justtify-content-between align-items-center'>
            <div className='lendo__new-to-investing-section-cta-left'>
              <p class='fw-lighter mb-0'>Smartly. Conveniently. Efficiently</p>
              <h2 className='fw-bolder'>
                New to investing?
                <br />
                No worries, we’re here to help.
              </h2>
            </div>
            <div className='lendo__new-to-investing-section-cta-right d-flex flex-column ms-auto'>
              <Button size='lg' className='mb-3'>
                Start Learning
              </Button>
              <Button variant='outline-secondary' size='lg'>
                Ask a Question
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewToInvesting;
