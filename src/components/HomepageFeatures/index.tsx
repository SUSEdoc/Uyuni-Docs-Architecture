import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  imagePath: string;
  href: string;
  description: ReactNode;
};

function getFeatureList(): FeatureItem[] {
  return [
    {
      title: 'AsciiDoc',
      imagePath: '/img/asciidoc-logo.png',
      href: '/docs/toolchain/asciidoc',
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
      href: '/docs/toolchain/antora',
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
      href: '/docs/toolchain/weblate',
      description: (
        <Translate
          id="homepage.features.weblate.description"
          description="Description for Weblate feature">
          Uyuni documentation translations are managed in Weblate, a web-based
          continuous localization platform.
        </Translate>
      ),
    },
    {
      title: 'Task',
      imagePath: '/img/task-logo.svg',
      href: '/docs/toolchain/task',
      description: (
        <Translate
          id="homepage.features.task.description"
          description="Description for Task feature">
          The documentation build process is automated using Task, a task runner
          that simplifies and streamlines the compilation of documentation assets.
        </Translate>
      ),
    },
    {
      title: 'YAML',
      imagePath: '/img/yml-logo.svg',
      href: '/docs/toolchain/yaml',
      description: (
        <Translate
          id="homepage.features.yaml.description"
          description="Description for YAML feature">
          YAML (YAML Ain't Markup Language) is used extensively in the documentation toolchain
          for configuration files due to its human-readable format and ease of use.
        </Translate>
      ),
    },
    {
      title: 'Go',
      imagePath: '/img/go-logo.svg',
      href: '/docs/toolchain/go',
      description: (
        <Translate
          id="homepage.features.go.description"
          description="Description for Go feature">
          Go is used in the documentation toolchain to generate dynamic content
          and reusable templates, enhancing the efficiency of document generation.
        </Translate>
      ),
    },
    {
      title: 'Container',
      imagePath: '/img/container-logo.svg',
      href: '/docs/toolchain/container',
      description: (
        <Translate
          id="homepage.features.container.description"
          description="Description for Container feature">
          The documentation toolchain is packaged as an easy-to-use container.
          Pull the image and everything just runs, with no need to install a
          large set of dependencies by hand.
        </Translate>
      ),
    },
  ];
}

function Feature({title, imagePath, href, description}: FeatureItem) {
  const imgUrl = useBaseUrl(imagePath);
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.featureCard} to={href}>
        <div className="text--center">
          <img src={imgUrl} className={styles.featureSvg} role="img" alt="" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
