/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "jet": "#353535",
                "caribbean-current": "#3C6E71",
                "jungle-green": "#46A683",
                "sea-salt": "#FAFBFC",
                "anti-flash-white": "#EBEFF2",
                "mint-green": "#CDE6DE",
                "celestial-blue": "#1BA0F2",
                "indigo-dye": "#284B63",
                "cambridge-blue": "#73BCA2"
            }
        }
    },
    safelist: ['text-red-500', {pattern: /pl-(4|8|12|16|20|28)/}],
    plugins: []
};
