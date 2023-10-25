import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
	title: 'Boilerplate Next App Router',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
