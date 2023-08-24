import { Accordion } from 'react-bootstrap';

import './FaqsItem.scss';

const FaqsItem = ({ faqs }) => (
  <Accordion.Item id={faqs.id} eventKey={faqs.id}>
    <Accordion.Header>{faqs.title}</Accordion.Header>
    <Accordion.Body>{faqs.desc}</Accordion.Body>
  </Accordion.Item>
);

export default FaqsItem;
