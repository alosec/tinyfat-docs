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
					label: 'Interfaces',
					items: [
						{ label: 'Overview', slug: 'interfaces' },
						{ label: 'Email', slug: 'interfaces/email' },
						{ label: 'Slack', slug: 'interfaces/slack' },
						{ label: 'Web App', slug: 'interfaces/web-app' },
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
							if (window.innerWidth < 1152) return;
							
							function init() {
								// Left sidebar toggle
								if (!document.querySelector('.sidebar-toggle')) {
									const toggle = document.createElement('button');
									toggle.className = 'sidebar-toggle';
									toggle.setAttribute('aria-label', 'Toggle left sidebar');
									toggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>';
									
									document.body.appendChild(toggle);
									
									const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
									if (collapsed) document.body.classList.add('sidebar-collapsed');
									
									toggle.addEventListener('click', function() {
										document.body.classList.toggle('sidebar-collapsed');
										localStorage.setItem('sidebar-collapsed', document.body.classList.contains('sidebar-collapsed'));
									});
								}
								
								// Right sidebar toggle
								if (!document.querySelector('.right-sidebar-toggle')) {
									const rightToggle = document.createElement('button');
									rightToggle.className = 'right-sidebar-toggle';
									rightToggle.setAttribute('aria-label', 'Toggle table of contents');
									rightToggle.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>';
									
									document.body.appendChild(rightToggle);
									
									const rightCollapsed = localStorage.getItem('right-sidebar-collapsed') === 'true';
									if (rightCollapsed) document.body.classList.add('right-sidebar-collapsed');
									
									rightToggle.addEventListener('click', function() {
										document.body.classList.toggle('right-sidebar-collapsed');
										localStorage.setItem('right-sidebar-collapsed', document.body.classList.contains('right-sidebar-collapsed'));
									});
								}
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
