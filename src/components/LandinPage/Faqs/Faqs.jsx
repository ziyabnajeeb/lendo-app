import { Accordion, Col, Container, Row } from 'react-bootstrap';

import './Faqs.scss';
import FaqsItem from './FaqsItem/FaqsItem';

const Faqs = () => {
  const faqsData = [
    {
      id: 1,
      title: 'What is Lendo?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      title: 'Is Lendo a Saudi company and registered in Saudi?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      title: 'What is Crowd-funding/ Crowd-lending?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      title: 'Who can invest in Lendo opportunities?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      title: 'Who can I contact if I have a complaint?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <Container as='section' className='lendo__faqs'>
      <Row>
        <Col lg={12}>
          <div className='lendo__faqs-header w-50'>
            <h2 className='fw-bolder'>FAQs</h2>
            <p>
              Get prompt responses from a friendly, professional and knowledgable support team. Have more questions? <a href='#/'>Visit our FAQs page</a>
            </p>
          </div>

          <div className='lendo__faqs-content'>
            <Accordion>{faqsData && faqsData.map((faqs) => <FaqsItem key={faqs.id} faqs={faqs} />)}</Accordion>
          </div>

          <div className='lendo__faqs-more text-center'>
            <h5 className='fw-bold'>Got more questions?</h5>
            <p className='pb-0'>
              Please <a href='#/'>Contact us</a> and we will answer your questions
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;
