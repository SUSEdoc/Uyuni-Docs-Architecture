import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type ToolItem = {
  title: string;
  imagePath: string;
  href: string;
};

const tools: ToolItem[] = [
  {title: 'AsciiDoc', imagePath: '/img/asciidoc-logo.svg', href: '/docs/toolchain/asciidoc'},
  {title: 'Antora', imagePath: '/img/antora-logo.svg', href: '/docs/toolchain/antora'},
  {title: 'Task', imagePath: '/img/task-logo.svg', href: '/docs/toolchain/task'},
  {title: 'YAML', imagePath: '/img/yml-logo.svg', href: '/docs/toolchain/yaml'},
  {title: 'Go', imagePath: '/img/go-logo.svg', href: '/docs/toolchain/go'},
  {title: 'Container', imagePath: '/img/container-logo.svg', href: '/docs/toolchain/container'},
];

function ToolChip({title, imagePath, href}: ToolItem) {
  const imgUrl = useBaseUrl(imagePath);
  return (
    <Link className={styles.toolChip} to={href}>
      <img src={imgUrl} alt="" />
      <span>{title}</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className={styles.ribbonWrap}>
      <div className={styles.ribbon} role="navigation" aria-label="Toolchain">
        {tools.map((tool) => (
          <ToolChip key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
