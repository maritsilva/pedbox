/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                'fade-in': { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.3s ease-out',
            },
            safelist: [
                'bg-red-500', 'bg-purple-500', 'bg-orange-500', 'bg-green-500',
                'bg-cyan-500', 'bg-lime-500', 'bg-yellow-500', 'bg-red-400',
                'bg-teal-600', 'bg-blue-500', 'bg-blue-600',
                'text-red-500', 'text-purple-500', 'text-orange-500', 'text-green-500',
                'text-cyan-500', 'text-lime-500', 'text-yellow-500', 'text-teal-600',
                'text-blue-500', 'text-blue-600',
                'from-red-500', 'from-purple-500', 'from-orange-500', 'from-green-500',
                'from-cyan-500', 'from-lime-500', 'from-yellow-500', 'from-teal-600',
                'from-blue-500', 'from-blue-600',
                'border-red-200', 'border-purple-200', 'border-orange-200', 'border-green-200',
                'border-cyan-200', 'border-lime-200', 'border-yellow-200', 'border-teal-200',
                'border-blue-200',
                'bg-red-50', 'bg-purple-50', 'bg-orange-50', 'bg-green-50',
                'bg-cyan-50', 'bg-lime-50', 'bg-yellow-50', 'bg-teal-50', 'bg-blue-50',
                'bg-indigo-50', 'bg-amber-50', 'bg-pink-50',
                'border-indigo-200', 'border-amber-200', 'border-pink-200',
                'text-indigo-500', 'text-amber-500', 'text-pink-500', 'text-teal-500',
                'bg-indigo-500', 'bg-amber-500', 'bg-pink-500', 'bg-teal-500', 'bg-lime-500',
                'from-indigo-500', 'from-amber-500', 'from-pink-500', 'from-teal-500', 'from-lime-500',
                'text-lime-500', 'border-lime-200', 'bg-lime-50',
                'bg-indigo-600', 'from-indigo-500', 'border-indigo-200', 'bg-indigo-50', 'text-indigo-700', 'bg-indigo-100', 'bg-indigo-500',
            ]
        }
    },
    plugins: [require("tailwindcss-animate")],
}
