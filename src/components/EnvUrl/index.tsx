import React from 'react';
import {BASE_URLS, useVtpassEnv} from '@site/src/utils/vtpassEnv';

type Props = {
  /** Path after the base URL, for example /api/pay */
  path: string;
};

/** An endpoint URL that follows the Sandbox/Live switch in the navbar. */
export default function EnvUrl({path}: Props): React.ReactElement {
  const env = useVtpassEnv();
  return <code>{BASE_URLS[env] + path}</code>;
}
