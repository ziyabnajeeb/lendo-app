import { Button, Col, Container, Image, Row } from 'react-bootstrap';

import applyLoanBg from '../../../assets/apply-loan-bg.png';
import './TransformGrowth.scss'

const TransformGrowth = () => {
  return (
    <Container as="section" fluid className='lendo__transform-growth'>
      <Row>
        <Col lg={12} className='px-0'>
          <Image src={applyLoanBg} className='lendo__transform-growth-bg' />

          <div className="lendo__transform-growth-content">
            <div className="lendo__transform-growth-content-wrapper">
              <h2 className='fw-bolder'>Transform<br/>waiting time into <br/>instant growth!</h2>
              <p className='py-4'>Designed specifically for the needs of small and medium businesses, Lendo offers instant short-term finance-against-invoice solutions so your company’s cash flow does not suffer every time you accommodate your client with extended or flexible payment terms.</p>
              <Button>Apply for a Loan</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TransformGrowth