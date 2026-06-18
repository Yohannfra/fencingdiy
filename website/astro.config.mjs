// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    // site: 'https://fencingdiy.com',
    base: '/fencing-diy-tmp',
	integrations: [
		starlight({
			title: 'FencingDIY',
            // logo: { src: '../logos/logo-full.png', alt: 'logo'},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yohannfra/fencingdiy' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
