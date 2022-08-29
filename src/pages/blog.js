import Page from '../components/pa';
import Blog from '../components/blog/blogPage.js';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Page>
      <Blog />
      <Footer />
    </Page>
  );
}
