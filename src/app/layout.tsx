import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Grid templateRows='88px auto 88px' minH='100vh'>
						<GridItem bg='white'>
							<Container maxW='container.xl'>
								<Header />
							</Container>
						</GridItem>
						<GridItem bg='gray.100'>
							<Container maxW='container.xl'>
								<Grid templateColumns='250px auto' templateRows='46px auto' padding={5} gap={5}>
									<GridItem colSpan={2}>
										<Navigation />
									</GridItem>
									<GridItem>
										<Sidebar />
									</GridItem>
									<GridItem>{children}</GridItem>
								</Grid>
							</Container>
						</GridItem>
						<GridItem bg='blackAlpha.800'>
							<Container maxW='container.xl'>
								<Footer />
							</Container>
						</GridItem>
					</Grid>
				</Providers>
			</body>
		</html>
	)
}
