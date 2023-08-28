import { Accordion } from 'react-bootstrap';

import './FaqsItem.css';

const FaqsItem = ({ faqs }) => (
  <Accordion.Item id={faqs.id} eventKey={faqs.id}>
    <Accordion.Header>{faqs.title}</Accordion.Header>
    <Accordion.Body>{faqs.desc}</Accordion.Body>
  </Accordion.Item>
);

export default FaqsItem;
