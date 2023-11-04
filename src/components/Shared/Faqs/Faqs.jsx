import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { faqsData } from '../../../data/data';
import { Div, H2, H5, Text } from '../../UI/Tag/Tag';
import FaqsItem from './FaqsItem/FaqsItem';

import './Faqs.css';

const Faqs = ({ className }) => {
  return (
    <Container as="section" className={className ? `${className} lendo__faqs` : 'lendo__faqs'}>
      <Row>
        <Col lg={12}>
          <Div className="lendo__faqs-header w-50">
            <H2 className="fw-bolder">FAQs</H2>
            <Text>
              Get prompt responses from a friendly, professional and knowledgable support team. Have more questions?{' '}
              <Link to="about">Visit our FAQs page</Link>
            </Text>
          </Div>

          <Div className="lendo__faqs-content">
            <Accordion>{faqsData && faqsData.map((faqs) => <FaqsItem key={faqs.id} faqs={faqs} />)}</Accordion>
          </Div>

          <Div className="lendo__faqs-more text-center">
            <H5 className="fw-bold">Got more questions?</H5>
            <Text className="pb-0">
              Please <Link to="contact">Contact us</Link> and we will answer your questions
            </Text>
          </Div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faqs;
