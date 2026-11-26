import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';
import {toLiveCode, useVtpassEnv} from '@site/src/utils/vtpassEnv';

type Props = WrapperProps<typeof CodeBlockType>;

/**
 * Swaps sandbox URLs for live URLs when the navbar switch is on Live.
 * Add `noenv` to a code fence's info string (```js noenv) to keep it unchanged.
 */
export default function CodeBlockWrapper(props: Props): React.ReactElement {
  const env = useVtpassEnv();
  const {children, metastring} = props as Props & {metastring?: string};
  const optedOut = /\bnoenv\b/.test(metastring ?? '');

  const code =
    env === 'live' && !optedOut && typeof children === 'string'
      ? toLiveCode(children)
      : children;

  return <CodeBlock {...props}>{code}</CodeBlock>;
}
