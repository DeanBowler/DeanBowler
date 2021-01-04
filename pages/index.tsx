import { Layout } from '../components/Layout';
import { MainProfile } from '../components/MainProfile';

export default function IndexPage() {
  return (
    <Layout title="Some things about Dean Bowler" includeFooter={false}>
      <MainProfile />
    </Layout>
  );
}
