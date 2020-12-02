import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './view.examples';
export * from './theme.examples';
export * from './size.examples';
export * from './playground.examples';
export * from './layout.examples';
export * from './adaptiveWithAddAndDelete';
export * from './adaptive.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
