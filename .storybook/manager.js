import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const kayanaTheme = create({
	base: 'dark',
	brandTitle: 'Kayana',
	brandUrl: '_self',
	brandImage: 'kayana-logo.png',
	colorSecondary:'#40DE03',
});

addons.setConfig({
	theme: kayanaTheme,
	isToolshown: true,
	sidebar: {
		showRoots: true,
	},
});
