import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
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
	)
}

export default layout
