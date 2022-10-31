/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			animation: {
				'grow-to-right': 'grow-to-right 1s ease'
			},
			keyframes: {
				'grow-to-right': {
					'0%': { width: '0%' },
					'30%': { width: '0%' },
					'100%': { width: '100%' }
				}
			}
		}
	},
	plugins: []
};
