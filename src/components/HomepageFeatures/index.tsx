import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  imagePath: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AsciiDoc',
    imagePath: '/img/asciidoc-logo.png',
    description: (
      <>
        Uyuni and Multi-Linux Manager documentation is written in AsciiDoc, a lightweight markup language designed
        for writing technical documentation with powerful features for complex documents.
      </>
    ),
  },
  {
    title: 'Antora',
    imagePath: '/img/antora-logo.png',
    description: (
      <>
        The documentation for Uyuni and Multi-Linux manager are built using Antora,
        the multi-repository documentation site generator.
      </>
    ),
  },
  {
    title: 'Weblate',
    imagePath: '/img/weblate-logo.png',
    description: (
      <>
        Uyuni and Multi-Linux Manager rely on Weblate, a web-based continuous
        localization platform for managing documentation translations.
      </>
    ),
  },
];

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
