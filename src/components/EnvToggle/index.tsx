import React from 'react';
import clsx from 'clsx';
import {setVtpassEnv, useVtpassEnv, type VtpassEnv} from '@site/src/utils/vtpassEnv';
import styles from './styles.module.css';

const OPTIONS: {value: VtpassEnv; label: string}[] = [
  {value: 'sandbox', label: 'Sandbox'},
  {value: 'live', label: 'Live'},
];

type Props = {
  mobile?: boolean;
  className?: string;
};

/** Navbar switch between the sandbox and live API base URLs. */
export default function EnvToggle({mobile, className}: Props): React.ReactElement {
  const env = useVtpassEnv();

  return (
    <div
      role="radiogroup"
      aria-label="API environment"
      title="Switch the base URL used in code samples and endpoint tables"
      className={clsx(styles.toggle, mobile && styles.mobile, className)}>
      {OPTIONS.map((option) => {
        const selected = env === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={clsx(
              styles.option,
              selected && styles.selected,
              selected && option.value === 'live' && styles.live,
            )}
            onClick={() => setVtpassEnv(option.value)}>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
