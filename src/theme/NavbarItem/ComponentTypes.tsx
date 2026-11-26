import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import EnvToggle from '@site/src/components/EnvToggle';

// Registers `type: 'custom-envToggle'` for use in the navbar config.
export default {
  ...ComponentTypes,
  'custom-envToggle': EnvToggle,
};
