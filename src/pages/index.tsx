import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const saltFlats = useBaseUrl('/img/uyuni-salt-flats.jpg');
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `linear-gradient(180deg, rgb(14 26 30 / 38%) 0%, rgb(14 26 30 / 62%) 100%), url('${saltFlats}')`,
      }}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.title}>
          <span className={styles.titleBrand}>Uyuni</span>
          <span className={styles.titleRest}>Contributors Handbook</span>
        </Heading>
        <p className={styles.intro}>
          <Translate
            id="homepage.intro"
            description="Homepage intro for the contributors handbook">
            How the community writes, builds, and publishes documentation for
            Uyuni and Multi-Linux Manager.
          </Translate>
        </p>
        <HomepageFeatures />
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            <Translate
              id="homepage.toolchain.button"
              description="The homepage button to toolchain guides">
              Open the handbook
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Process, toolchain, and publishing',
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Process, toolchain, and publishing for Uyuni and Multi-Linux Manager documentation.',
        description: 'The homepage description'
      })}>
      <HomepageHeader />
    </Layout>
  );
}
