/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				'320': '320px',
				'375': '375px',
				'425': '425px',
				'768': '768px',
				'1024': '1024px',
				'1440': '1440px',
				'1535': '1535px',
				'1827': '1827px',
				'2000': '2000px',
				'2560': '2560px',
			},
			fontFamily: {
				roboto: ['Roboto-Regular', 'sans-serif'],
				fairplay: ['Fair Play Display', 'serif'],
			},
		},
	},
	plugins: [],
};
