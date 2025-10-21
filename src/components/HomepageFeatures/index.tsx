import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  imagePath: string;
  description: ReactNode;
};

function getFeatureList(): FeatureItem[] {
  return [
    {
      title: 'AsciiDoc',
      imagePath: '/img/asciidoc-logo.png',
      description: (
        <Translate
          id="homepage.features.asciidoc.description"
          description="Description for AsciiDoc feature">
          Uyuni and Multi-Linux Manager documentation is written in AsciiDoc, a lightweight markup language designed
          for writing technical documentation with powerful features for complex documents.
        </Translate>
      ),
    },
    {
      title: 'Antora',
      imagePath: '/img/antora-logo.png',
      description: (
        <Translate
          id="homepage.features.antora.description"
          description="Description for Antora feature">
          The documentation for Uyuni and Multi-Linux manager are built using Antora,
          the multi-repository documentation site generator.
        </Translate>
      ),
    },
    {
      title: 'Weblate',
      imagePath: '/img/weblate-logo.png',
      description: (
        <Translate
          id="homepage.features.weblate.description"
          description="Description for Weblate feature">
          Uyuni and Multi-Linux Manager rely on Weblate, a web-based continuous
          localization platform for managing documentation translations.
        </Translate>
      ),
    },
  ];
}

function Feature({title, imagePath, description}: FeatureItem) {
  const imgUrl = useBaseUrl(imagePath);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const FeatureList = getFeatureList();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
