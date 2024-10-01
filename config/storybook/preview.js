import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
  },
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
