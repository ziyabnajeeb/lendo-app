import {
  AppGrade,
  Faqs,
  HeaderSection,
  HowLendoWorks,
  NewToInvesting,
  OurCommitment,
  TransformGrowth
} from '../../components';
import './LandingPage.scss';

const LandingPage = () => (
  <>
    <HeaderSection />
    <TransformGrowth />
    <HowLendoWorks />
    <NewToInvesting />
    <OurCommitment />
    <AppGrade />
    <Faqs />
  </>
);

export default LandingPage;
