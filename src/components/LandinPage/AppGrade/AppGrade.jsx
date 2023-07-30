import { Col, Container, Image, Row } from 'react-bootstrap';

import appGradeCircleBg from '../../../assets/app-grade-circle.svg';
import appGradePhone from '../../../assets/app-grade-phone.png';
import qrScanner from '../../../assets/qr-scanner.svg';
import './AppGrade.scss';

const AppGrade = () => {
  return (
    <Container className='lendo__app-grade' fluid>
      <Row>
        <Col lg={12} className='mx-auto'>
          <Container>
            <Row className='lendo__app-grade-content justify-content-center align-items-center'>
              <Col lg={6}>
                <div className='lendo__app-grade-content-left'>
                  <h2 className='fw-bolder'>App-grade your investments.</h2>
                  <p className='fw-bold py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Image src={qrScanner} alt='qr scanner' className='lendo__app-grade-content-qr-scanner' />
                </div>
              </Col>
              <Col lg={6}>
                <Image src={appGradeCircleBg} alt='circle' className='lendo__app-grade-content-circle' />
                <Image src={appGradePhone} alt='phone' className='lendo__app-grade-content-phone' />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AppGrade;
