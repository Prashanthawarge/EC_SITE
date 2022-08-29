import Page from '@/components/page';
import CustomerAppDev from '@/components/customerAppDev/customerAppDevPage.js';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <CustomerAppDev />
      <Footer />
    </Page>
  );
}
