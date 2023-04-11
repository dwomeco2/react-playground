import {useState} from 'react';
import PriceSlider from '../PriceSlider';
import styles from './index.module.css';

function JustaToggle() {
	const [isMonthly, setIsMonthly] = useState(false);

	return (
		<button
			type='button' className={`${styles.pricing_toggle_btn} ${isMonthly ? `${styles.active}` : ''} rounded-full`} onClick={() => {
				setIsMonthly(!isMonthly);
			}}/>
	);
}

function PricingComponent() {
	return (
		<div>
			<h1 className='text-2xl font-bold text-center mb-6 text-[var(--colar-purple-1)]'>Our Pricing</h1>
			<div className='flex justify-center gap-6 items-center text-[var(--colar-purple-1)]'>
				<div className='text-sm'>Annually</div>
				<JustaToggle/>
				<div className='text-sm'>Monthly</div>
			</div>
			<div className='h-full p-4 mt-10 overflow-x-auto no-scrollbar'>
				<div className={`${styles['pricing-container']}`}>
					<div className='shrink-0 w-64 h-[22rem] p-4 bg-[var(--colar-gray-1)] text-gray-600 rounded-xl'>
						<div className='font-bold'>Basic</div>
						<div className='my-6 flex justify-center'>
							<span className='text-2xl font-bold self-center'>$</span>
							<span className='text-4xl font-extrabold'>19.99</span>
						</div>
						<div className='mb-6'>
							<div className='py-2 border-y-2'>500 GB Storage</div>
							<div className='py-2 border-b-2'>2 Users Allowed</div>
							<div className='py-2 border-b-2'>Send up to 3 GB</div>
						</div>
						<button type='button' className={`w-full font-bold py-2 text-xs ${styles.btn_learn_more} rounded-md`}>LEARN MORE</button>
					</div>
					<div className='shrink-0 w-64 h-[24rem] mt-[-1rem] p-4 text-white bg-[var(--pricing-primary-color)] rounded-xl'>
						<div className='mt-[1rem]'/>
						<div className='font-bold'>Professional</div>
						<div className='my-6 flex justify-center'>
							<span className='text-2xl font-bold self-center'>$</span>
							<span className='text-4xl font-extrabold'>24.99</span>
						</div>
						<div className='mb-6'>
							<div className='py-2 border-y-2'>1 TB Storage</div>
							<div className='py-2 border-b-2'>5 Users Allowed</div>
							<div className='py-2 border-b-2'>Send up to 10 GB</div>
						</div>
						<button type='button' className={`w-full font-bold py-2 text-xs ${styles.btn_learn_more_main} rounded-md`}>LEARN MORE</button>
					</div>
					<div className='shrink-0 w-64 h-[22rem] p-4 bg-[var(--colar-gray-1)] text-gray-600 rounded-xl'>
						<div className='font-bold'>Master</div>
						<div className='my-6 flex justify-center'>
							<span className='text-2xl font-bold self-center'>$</span>
							<span className='text-4xl font-extrabold'>39.99</span>
						</div>
						<div className='mb-6'>
							<div className='py-2  border-y-2'>2 TB Storage</div>
							<div className='py-2  border-b-2'>10 Users Allowed</div>
							<div className='py-2  border-b-2'>Send up to 20 GB</div>
						</div>
						<button type='button' className={`w-full font-bold py-2 text-xs ${styles.btn_learn_more} rounded-md`}>LEARN MORE</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Pricing() {
	return (
		<div>
			<PricingComponent/>
			<PriceSlider/>
		</div>
	);
}
