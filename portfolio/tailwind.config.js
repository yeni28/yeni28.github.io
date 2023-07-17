/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard'],
                NanumNeo: ['NanumNeo'],
                NanumNeoLt: ['NanumNeoLt'],
                NanumNeoEB: ['NanumNeoEB'],
                PreB: ['Pretendard-Bold'],
                PreR: ['Pretendard-Regular'],
                PreS: ['Pretendard-SemiBold'],
            },

            colors: {
                blue: '#0071C1',
                black: '#252525',
                violet: '#3d1549',
            },
        },
    },
    plugins: [],
};
