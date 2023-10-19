/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'dark-grey': '#f8f8f8',
                'darker-grey': '#9f9f9f',
                'orange-accent': '#FEA300',
            },
            boxShadow: {
                banner: '5px 5px 25px 0px rgba(121, 121, 121, 0.15);',
            },
        },
    },
    plugins: [],
};
