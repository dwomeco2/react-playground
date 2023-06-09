import {Suspense} from 'react';
import Accordion from './Accordion';
import ShareCard from './ShareContentCard';
import PuffLoader from '../share/PuffLoader';
import {LazyImage} from '../share/LazyImage';
import {imageSources} from '../share/ImageData';

function ProfileCardComponent() {
	const imageSrc = `${imageSources[0]}?sig=profile`;
	return (
		<div className='flex flex-col rounded-lg overflow-clip pd-4 w-64 h-80 bg-white shadow-md shadow-gray-400'>
			<div>
				<figure className='bg-[#2f4f4f]'>
					<Suspense fallback={
						<div className='w-full h-32 flex justify-center items-center'>
							<PuffLoader/>
						</div>
					}
					>
						<LazyImage
							className='h-32 object-cover'
							src={imageSrc}
							height='100%'
							width='100%'/>
					</Suspense>
				</figure>
			</div>
			<div className='flex-1 relative'>
				<img src='https://picsum.photos/50/50' width='50' height='50' className='absolute top-[calc(-25px)] left-[calc(50%_-_25px)] rounded-full outline outline-4 outline-offset-0 outline-white'/>
				<div className='ml-4 my-4 items-center mt-12'>
					<div>
						<span className='text-xl font-bold'>Victor Crest &nbsp;</span>
						<span>26</span>
					</div>
					<span className='font-light text-xs'>London</span>
				</div>
			</div>
			<hr/>
			<div className='flex w-full mt-2 justify-evenly text-center pb-2'>
				<div className='w-[calc(30%_-_2px)] my-auto'>
					<div className='flex flex-col'>
						<div className='font-bold'>80K</div>
						<span className='text-xs'>Followers</span>
					</div>
				</div>
				<div className='w-[calc(30%_-_2px)] my-auto'>
					<div className='flex flex-col'>
						<div className='font-bold'>803K</div>
						<span className='text-xs'>Likes</span>
					</div>
				</div>
				<div className='w-[calc(30%_-_2px)] my-auto'>
					<div className='flex flex-col'>
						<div className='font-bold'>1.4K</div>
						<span className='text-xs'>Photos</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ProfileCard() {
	return (
		<div className='flex flex-col gap-8 justify-center items-center text-[var(--colar-teal-12)]'>
			<ProfileCardComponent/>
			<ShareCard/>
			<Accordion/>
		</div>
	);
}
