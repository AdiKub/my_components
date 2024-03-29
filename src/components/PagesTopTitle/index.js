import './PagesTopTitle.scss'
import React from 'react'
const PagesTopTitle = props => {
	const { title, link } = props;
	
	return (
		<div className='pages-top-subheader'>
			<img 
				src='https://img3.goodfon.com/original/1920x1200/5/5f/balcony-sky-bench-resort.jpg' 
				alt='hotel' 
				className='pages-top-subheader__img'/>
				<div className='container'>
				<div className='pages-top-subheader-wrapper'>
					<h1
						className='pages-top-subheader__title'>
						{title}
					</h1>
					<ul className='pages-top-subheader__list'>
						{link.map((linkItem) => (
							<li key={linkItem}>
								<a
									href='/'
									className='pages-top-subheader__link'>
									{linkItem}
									<span> >> </span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
)}

export default PagesTopTitle;