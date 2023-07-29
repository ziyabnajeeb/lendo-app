import { AppGrade, Faqs, Headersection, HowLendoWorks, NewToInvesting, OurCommitment, TransformGrowth } from '../../components';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='lendo__landing-page pt-5 mt-4'>
      <Headersection />
      <TransformGrowth />
      <HowLendoWorks />
      <NewToInvesting />
      <OurCommitment />
      <AppGrade />
      <Faqs />
    </div>
  );
};

export default LandingPage;
