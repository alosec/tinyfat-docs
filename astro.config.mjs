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
						{ label: 'Memory Bank', slug: 'guides/memory-bank' },
						{ label: 'Todo System (Beads)', slug: 'guides/beads' },
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
				{
					tag: 'script',
					content: `
						(function() {
							if (window.innerWidth < 800) return;
							
							function init() {
								const sidebar = document.querySelector('.sidebar');
								if (!sidebar || document.querySelector('.sidebar-toggle')) return;
								
								const toggle = document.createElement('button');
								toggle.className = 'sidebar-toggle';
								toggle.setAttribute('aria-label', 'Toggle sidebar');
								toggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
								
								sidebar.prepend(toggle);
								
								const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
								if (collapsed) document.body.classList.add('sidebar-collapsed');
								
								toggle.addEventListener('click', function() {
									document.body.classList.toggle('sidebar-collapsed');
									localStorage.setItem('sidebar-collapsed', document.body.classList.contains('sidebar-collapsed'));
								});
							}
							
							if (document.readyState === 'loading') {
								document.addEventListener('DOMContentLoaded', init);
							} else {
								init();
							}
						})();
					`,
				},
			],
		}),
	],
});
