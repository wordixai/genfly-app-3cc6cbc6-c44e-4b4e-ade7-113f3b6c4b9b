import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Pop Art Color Palette
				'pop-orange': {
					DEFAULT: 'hsl(18, 100%, 55%)',
					light: 'hsl(18, 100%, 65%)',
					dark: 'hsl(18, 100%, 45%)'
				},
				'pop-pink': {
					DEFAULT: 'hsl(330, 100%, 65%)',
					light: 'hsl(330, 100%, 75%)',
					dark: 'hsl(330, 100%, 55%)'
				},
				'pop-yellow': {
					DEFAULT: 'hsl(48, 100%, 50%)',
					light: 'hsl(48, 100%, 60%)'
				},
				'pop-blue': {
					DEFAULT: 'hsl(210, 100%, 60%)',
					light: 'hsl(210, 100%, 70%)'
				},
				'pop-purple': {
					DEFAULT: 'hsl(270, 100%, 70%)',
					light: 'hsl(270, 100%, 80%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'comic': ['Comic Sans MS', 'Marker Felt', 'cursive'],
				'handwrite': ['Brush Script MT', 'Lucida Handwriting', 'cursive']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-fun': {
					'0%, 20%, 50%, 80%, 100%': {
						transform: 'translateY(0)'
					},
					'40%': {
						transform: 'translateY(-10px)'
					},
					'60%': {
						transform: 'translateY(-5px)'
					}
				},
				'pop-scale': {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'rotate-slow': {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-fun': 'bounce-fun 2s infinite',
				'pop-scale': 'pop-scale 0.3s ease-in-out',
				'rotate-slow': 'rotate-slow 8s linear infinite'
			},
			backgroundImage: {
				'dots-pattern': 'radial-gradient(circle, #000 2px, transparent 2px)',
				'comic-dots': 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px)'
			},
			backgroundSize: {
				'dots-sm': '20px 20px',
				'dots-md': '30px 30px',
				'dots-lg': '40px 40px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;