import Page from '@/components/page';
import FreeVocal from '@/components/freeVocal/freeVocalPage.js';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <FreeVocal />
      <Footer />
    </Page>
  );
}
