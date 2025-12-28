// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.tinyfat.com',
	integrations: [
		starlight({
			title: 'TinyFat Docs',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/alosec/tinyfat-docs' },
				{ icon: 'email', label: 'Contact', href: 'mailto:support@tinyfat.com' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is TinyFat?', slug: 'getting-started/what-is-tinyfat' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Your First Email', slug: 'getting-started/first-email' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Email Communication', slug: 'guides/email' },
						{ label: 'Agent Workspace', slug: 'guides/workspace' },
						{ label: 'Dashboard', slug: 'guides/dashboard' },
						{ label: 'Skills & Tools', slug: 'guides/skills' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Architecture', slug: 'concepts/architecture' },
						{ label: 'The Outbox Pattern', slug: 'concepts/outbox' },
						{ label: 'Memory & Persistence', slug: 'concepts/memory' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Email JSON Format', slug: 'reference/email-json' },
						{ label: 'Filesystem', slug: 'reference/filesystem' },
						{ label: 'Troubleshooting', slug: 'reference/troubleshooting' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://docs.tinyfat.com/og-image.png',
					},
				},
			],
		}),
	],
});
