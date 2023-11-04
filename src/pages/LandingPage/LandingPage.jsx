import {
  AppGrade,
  Faqs,
  HeaderSection,
  HowLendoWorks,
  NewToInvesting,
  OurCommitment,
  TransformGrowth,
} from '../../components';

import './LandingPage.css';

const LandingPage = () => (
  <>
    <HeaderSection />
    <TransformGrowth />
    <HowLendoWorks />
    <NewToInvesting />
    <OurCommitment />
    <AppGrade />
    <Faqs className="lendo__landing-faqs" />
  </>
);
export default LandingPage;
