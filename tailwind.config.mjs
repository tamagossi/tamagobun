import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#111827', // Very dark grey/black for primary text/elements
				'background-light': '#FAFAFA', // Off-white background
				'background-dark': '#0F0F0F', // Very dark background for dark mode
				'surface-light': '#FFFFFF', // White surface
				'surface-dark': '#1A1A1A', // Dark surface
				'border-light': '#E5E7EB', // Light gray border
				'border-dark': '#333333', // Dark gray border
				'text-light': '#1F2937', // Dark gray text
				'text-dark': '#E5E5E5', // Light gray text for dark mode
				'text-secondary-light': '#6B7280', // Muted text light
				'text-secondary-dark': '#9CA3AF', // Muted text dark
			},
			fontFamily: {
				display: ['Inter', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				DEFAULT: '0px', // Minimalist sharp edges based on screenshot
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.text-light'),
						'--tw-prose-body': theme('colors.text-light'),
						'--tw-prose-headings': theme('colors.primary'),
						'--tw-prose-links': theme('colors.primary'),
						maxWidth: 'none',
						p: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
							lineHeight: '1.75',
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.text-dark'),
						'--tw-prose-body': theme('colors.text-dark'),
						'--tw-prose-headings': theme('colors.text-dark'),
						'--tw-prose-links': theme('colors.white'),
						strong: {
							color: theme('colors.white'),
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
};
