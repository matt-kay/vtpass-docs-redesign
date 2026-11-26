import MDXComponents from '@theme-original/MDXComponents';
import EnvUrl from '@site/src/components/EnvUrl';

// Makes <EnvUrl path="/api/pay" /> available in every MDX page without an import.
export default {
  ...MDXComponents,
  EnvUrl,
};
