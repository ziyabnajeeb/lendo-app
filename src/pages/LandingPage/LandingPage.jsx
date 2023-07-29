import { AppGrade, Faqs, HowLendoWorks, NewToInvesting, OurCommitment, TransformGrowth } from '../../components';
import HeaderSection from '../../components/LandinPage/HeaderSection/HeaderSection';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='lendo-landing'>
      <HeaderSection />
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
