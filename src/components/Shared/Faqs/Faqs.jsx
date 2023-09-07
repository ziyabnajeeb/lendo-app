import { Accordion, Col, Container, Row } from 'react-bootstrap';
import FaqsItem from './FaqsItem/FaqsItem';
import { faqsData } from '../../../data/data';

import './Faqs.css';

const Faqs = ({ className }) => {
  console.log('🚀 ~ file: Faqs.jsx:8 ~ Faqs ~ className:', className);
  return (
    <Container
      as="section"
      className={
        className ? `${className} lendo__faqs` : 'lendo__faqs'
      }
    >
      <Row>
        <Col lg={12}>
          <div className="lendo__faqs-header w-50">
            <h2 className="fw-bolder">FAQs</h2>
            <p>
              Get prompt responses from a friendly, professional and
              knowledgable support team. Have more questions?{' '}
              <a href="#/">Visit our FAQs page</a>
            </p>
          </div>

          <div className="lendo__faqs-content">
            <Accordion>
              {faqsData &&
                faqsData.map((faqs) => (
                  <FaqsItem key={faqs.id} faqs={faqs} />
                ))}
            </Accordion>
          </div>

          <div className="lendo__faqs-more text-center">
            <h5 className="fw-bold">Got more questions?</h5>
            <p className="pb-0">
              Please <a href="#/">Contact us</a> and we will answer
              your questions
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;
