import { AppGrade, Faqs, HowLendoWorks, NewToInvesting, OurCommitment, TransformGrowth } from '../../components';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <main className='lendo__landing-page'>
      <TransformGrowth />
      <HowLendoWorks />
      <NewToInvesting />
      <OurCommitment />
      <AppGrade />
      <Faqs />
    </main>
  );
};

export default LandingPage;
