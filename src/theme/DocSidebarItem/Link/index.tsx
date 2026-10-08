import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';

function LinkLabel({label}: {label: string}) {
  return (
    <span title={label} className={styles.sidebarLinkLabel}>
      {label}
    </span>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  const iconPath =
    (typeof item.customProps?.icon === 'string' && item.customProps.icon) ||
    undefined;
  const iconUrl = useBaseUrl(iconPath ?? '');
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          iconPath && styles.menuLinkWithIcon,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {iconPath && (
          <img src={iconUrl} className={styles.menuIcon} alt="" />
        )}
        <LinkLabel label={label} />
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
