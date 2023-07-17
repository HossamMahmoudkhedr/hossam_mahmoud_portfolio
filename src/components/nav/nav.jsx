import React from 'react';
import { Box, Stack } from '@mui/material';
import LogoImage from '../../assets/images/Logo.png';
import { styled } from 'styled-components';

const Sytledlinks = styled.ul`
	display: flex;
	gap: 3.2rem;
	align-items: center;
`;

const SytledlinksItems = styled.a`
	color: var(--red-text);
	transition: all 0.2s linear;

	&:hover {
		color: var(--white-text);
	}
`;
const Nav = () => {
	return (
		<Box
			component="nav"
			className="navContainer"
			sx={{ backgroundColor: 'var(--home-background)' }}>
			<Stack
				direction="row"
				sx={{
					justifyContent: 'space-between',
					padding: '1rem 5rem',
					alignItems: 'center',
				}}>
				<Box
					className="logo"
					sx={{ transform: 'scale(1.2)' }}>
					<a href="/">
						<img
							style={{ paddingTop: '5px' }}
							src={LogoImage}
							alt="Hossam Mahmoud"
						/>
					</a>
				</Box>

				<Sytledlinks>
					<li>
						<SytledlinksItems href="#home">Home</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#about">About me</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#services">Services</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#exed">
							Experience & Education
						</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#work">My work</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#">Skills</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#">Testimonials</SytledlinksItems>
					</li>
					<li>
						<SytledlinksItems href="#">Contact</SytledlinksItems>
					</li>
				</Sytledlinks>
			</Stack>
		</Box>
	);
};

export default Nav;
