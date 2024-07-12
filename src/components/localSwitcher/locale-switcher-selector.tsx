'use client';

import {useParams, usePathname, useRouter} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import styles from './locale-switcher-selector.module.scss';
import { CaretDownFill } from 'react-bootstrap-icons';
import { locales } from '@/i18n';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    const locale = locales.find((locale: string) => pathname.includes(locale));
    
    if(!!locale) {
      startTransition(() => {
        router.replace(
          pathname.replace(locale, nextLocale)
        );
      });
    }
  }

  return (
    <label
      className={styles.container}
    >
      <select
        className="inline-flex appearance-none bg-transparent border-0"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className={`text-dark ${styles['container-icon']}`}>
        <CaretDownFill size={14} />
      </span>
    </label>
  );
}