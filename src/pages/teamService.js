import Page from '@/components/page';
import TeamService from '../components/teamService/index';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Page>
      <TeamService />
      <Footer />
    </Page>
  );
}
