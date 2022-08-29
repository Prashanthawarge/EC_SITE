import Page from '../components/page';
import FreeVocal from '../components/awsPartner/awsPartnerPage.js';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Page>
      <FreeVocal />
      <Footer />
    </Page>
  );
}
