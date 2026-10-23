import type {ReactNode, CSSProperties} from 'react';
import {useLayoutEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type ToolItem = {
  title: string;
  label: string;
  imagePath: string;
  href?: string;
  x: string;
  y: string;
  ride: string;
};

// Bottom to top is the order the toolchain is used.
const tools: ToolItem[] = [
  {
    title: 'openSUSE Leap',
    label: 'openSUSE Leap',
    imagePath: '/img/opensuse-leap-logo.svg',
    x: '50%',
    y: '87%',
    ride: 'leap',
  },
  {
    title: 'Task',
    label: 'Task',
    imagePath: '/img/task-logo.svg',
    href: '/docs/toolchain/task',
    x: '24%',
    y: '60%',
    ride: 'task',
  },
  {
    title: 'Go',
    label: 'Go',
    imagePath: '/img/go-logo.svg',
    href: '/docs/toolchain/go',
    x: '50%',
    y: '60%',
    ride: 'go',
  },
  {
    title: 'YAML',
    label: 'YAML',
    imagePath: '/img/yml-logo.svg',
    href: '/docs/toolchain/yaml',
    x: '76%',
    y: '60%',
    ride: 'yaml',
  },
  {
    title: 'AsciiDoc',
    label: 'AsciiDoc',
    imagePath: '/img/asciidoc-logo.svg',
    href: '/docs/toolchain/asciidoc',
    x: '37%',
    y: '35%',
    ride: 'asciidoc',
  },
  {
    title: 'Antora',
    label: 'Antora',
    imagePath: '/img/antora-logo.svg',
    href: '/docs/toolchain/antora',
    x: '63%',
    y: '35%',
    ride: 'antora',
  },
  {
    title: 'Podman',
    label: 'Podman',
    imagePath: '/img/podman-logo.svg',
    href: '/docs/toolchain/podman',
    x: '50%',
    y: '11%',
    ride: 'container',
  },
];

const rings = [
  {w: '5.5rem', top: '5%', dur: '0.92s'},
  {w: '4.6rem', top: '17%', dur: '1.08s'},
  {w: '3.8rem', top: '30%', dur: '0.82s'},
  {w: '3.05rem', top: '44%', dur: '0.98s'},
  {w: '2.35rem', top: '58%', dur: '0.76s'},
  {w: '1.7rem', top: '72%', dur: '0.88s'},
  {w: '1.15rem', top: '86%', dur: '0.7s'},
];

const motes = [
  {r: '48px', h: '8%', s: '3px', d: '0s', dur: '0.8s', tone: 'salt'},
  {r: '42px', h: '20%', s: '2px', d: '-0.2s', dur: '0.95s', tone: 'sand'},
  {r: '34px', h: '33%', s: '3px', d: '-0.45s', dur: '0.72s', tone: 'cyan'},
  {r: '28px', h: '46%', s: '2px', d: '-0.1s', dur: '1.05s', tone: 'salt'},
  {r: '22px', h: '60%', s: '3px', d: '-0.55s', dur: '0.86s', tone: 'sand'},
  {r: '16px', h: '74%', s: '2px', d: '-0.3s', dur: '1.15s', tone: 'salt'},
  {r: '12px', h: '88%', s: '3px', d: '-0.7s', dur: '0.9s', tone: 'sand'},
  {r: '44px', h: '14%', s: '2px', d: '-0.15s', dur: '0.68s', tone: 'cyan'},
  {r: '26px', h: '52%', s: '2px', d: '-0.62s', dur: '1.2s', tone: 'salt'},
  {r: '18px', h: '68%', s: '4px', d: '-0.4s', dur: '0.84s', tone: 'sand'},
];

const clouds = [
  {w: '4.6rem', h: '1.7rem', x: '-22%', y: '-2%', d: '0s', dur: '2.6s'},
  {w: '3.6rem', h: '1.35rem', x: '48%', y: '6%', d: '-0.9s', dur: '3s'},
  {w: '2.8rem', h: '1.15rem', x: '12%', y: '14%', d: '-1.5s', dur: '2.2s'},
  {w: '2.2rem', h: '0.95rem', x: '62%', y: '1%', d: '-0.4s', dur: '3.4s'},
];

// Same order the icons settle: each course, left to right.
const crystals = [
  {x: '24%', y: '60%', delay: '2.2s'},
  {x: '50%', y: '60%', delay: '2.58s'},
  {x: '76%', y: '60%', delay: '2.96s'},
  {x: '37%', y: '35%', delay: '3.35s'},
  {x: '63%', y: '35%', delay: '3.73s'},
  {x: '50%', y: '11%', delay: '4.2s'},
];

const grit = [
  {r: '9px', h: '86%', s: '1.5px', d: '0s', dur: '0.52s'},
  {r: '6px', h: '90%', s: '1px', d: '-0.18s', dur: '0.44s'},
  {r: '11px', h: '84%', s: '1.5px', d: '-0.32s', dur: '0.66s'},
  {r: '4px', h: '96%', s: '1px', d: '-0.08s', dur: '0.4s'},
  {r: '7px', h: '92%', s: '1px', d: '-0.46s', dur: '0.58s'},
  {r: '3px', h: '98%', s: '1px', d: '-0.22s', dur: '0.48s'},
  {r: '8px', h: '94%', s: '1px', d: '-0.55s', dur: '0.7s'},
  {r: '5px', h: '88%', s: '1px', d: '-0.12s', dur: '0.6s'},
];

function SaltCube({x, y, delay}: {x: string; y: string; delay: string}) {
  const place = {'--x': x, '--y': y, '--delay': delay} as CSSProperties;
  return (
    <svg className={styles.crystal} style={place} viewBox="0 0 80 92" aria-hidden="true">
      <path className={styles.faceOuter} pathLength={1} d="M6 22 L6 58 L40 76 L74 58 L74 22 L40 4 Z" />
      <path className={styles.faceInner} pathLength={1} d="M6 22 L40 40 L74 22 M40 40 L40 76" />
    </svg>
  );
}

function ToolChip({title, label, imagePath, href, x, y, ride}: ToolItem) {
  const imgUrl = useBaseUrl(imagePath);
  const motion = {'--x': x, '--y': y} as CSSProperties;
  const body = (
    <span className={styles.toolChip}>
      <img src={imgUrl} alt="" />
      <span className={styles.name}>{label}</span>
    </span>
  );
  if (!href) {
    return (
      <div className={clsx(styles.slot, styles[ride])} style={motion}>
        <svg
          className={styles.slab}
          viewBox="0 0 880 70"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path className={styles.slabTop} d="M40 12 H840 L868 35 L840 58 H40 L12 35 Z" />
          <path className={styles.faceOuter} pathLength={1} d="M40 12 H840 L868 35 L840 58 H40 L12 35 Z" />
        </svg>
        {body}
      </div>
    );
  }
  return (
    <Link
      className={clsx(styles.slot, styles[ride])}
      style={motion}
      to={href}
      aria-label={title}>
      {body}
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    setPlay(true);
    return undefined;
  }, []);

  return (
    <div className={styles.ribbonWrap}>
      <div
        className={clsx(styles.ribbon, play && styles.play)}
        role="navigation"
        aria-label="Toolchain">
        <div className={styles.tornado} aria-hidden="true">
          <span className={styles.shaft} />
          {clouds.map((cloud, index) => (
            <span
              key={index}
              className={styles.cloud}
              style={
                {
                  '--w': cloud.w,
                  '--h': cloud.h,
                  '--x': cloud.x,
                  '--y': cloud.y,
                  '--d': cloud.d,
                  '--dur': cloud.dur,
                } as CSSProperties
              }
            />
          ))}
          <span className={styles.baseVeil} />
          <span className={styles.baseDust} />
          {rings.map((ring, index) => (
            <span
              key={index}
              className={styles.ring}
              style={{'--w': ring.w, '--top': ring.top, '--dur': ring.dur} as CSSProperties}
            />
          ))}
          {motes.map((mote, index) => (
            <span
              key={index}
              className={clsx(styles.mote, styles[mote.tone])}
              style={
                {
                  '--r': mote.r,
                  '--h': mote.h,
                  '--s': mote.s,
                  '--d': mote.d,
                  '--dur': mote.dur,
                } as CSSProperties
              }
            />
          ))}
          {grit.map((speck, index) => (
            <span
              key={index}
              className={styles.grit}
              style={
                {
                  '--r': speck.r,
                  '--h': speck.h,
                  '--s': speck.s,
                  '--d': speck.d,
                  '--dur': speck.dur,
                } as CSSProperties
              }
            />
          ))}
        </div>
        {crystals.map((crystal) => (
          <SaltCube key={`${crystal.x}-${crystal.y}`} {...crystal} />
        ))}
        {tools.map((tool) => (
          <ToolChip key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
