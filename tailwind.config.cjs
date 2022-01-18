module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cstm: {
					'rich-black': '#0B0D17',
					'lavender-blue': '#D0D6F9'
				}
			},
			fontFamily: {
				bellefair: ['Bellefair', 'serif'],
				'barlow-condensed': ['Barlow Condensed', 'sans-serif']
			}
		}
	},
	plugins: []
};
