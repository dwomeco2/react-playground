import {useEffect, useReducer, useRef} from 'react';
import styles from './index.module.css';

type TimerProps = {
	state: {
		totalSeconds: number;
	};
	countdownParams: {initTotalSeconds: number; timerInterval: number};
	countdownReturns: [
		{days: number; hours: number; minutes: number; seconds: number},
		(ti: number) => void,
	];
};

function useCountDownTimer({
	initTotalSeconds,
	timerInterval,
}: TimerProps['countdownParams']): TimerProps['countdownReturns'] {
	function reducer(
		state: TimerProps['state'],
		action: {type: string},
	): TimerProps['state'] {
		const {totalSeconds} = state;
		if (action.type === 'tick') {
			if (totalSeconds > 0) {
				return {totalSeconds: totalSeconds - 1};
			}

			return {totalSeconds: 0};
		}

		throw new Error();
	}

	const [{totalSeconds}, dispatch] = useReducer(reducer, {
		totalSeconds: initTotalSeconds,
	});

	useInterval(() => {
		dispatch({type: 'tick'});
	}, timerInterval);

	function disembleCountdown(totalSeconds: number) {
		const days = Math.floor(totalSeconds / (60 * 60 * 24));
		const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
		const seconds = totalSeconds % 60;
		return {days, hours, minutes, seconds};
	}

	return [
		disembleCountdown(totalSeconds),
		(ti: number): void => {
			timerInterval = ti;
		},
	];
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: () => void, delay: number) {
	const callbackRef: React.MutableRefObject<() => void> = useRef(callback);

	// Always update callbackRef to the latest callbacks
	useEffect(() => {
		callbackRef.current = callback;
	});

	useEffect(() => {
		function tick() {
			callbackRef.current();
		}

		if (delay !== null) {
			const id = setInterval(() => {
				tick();
			}, delay);
			return () => {
				clearInterval(id);
			};
		}
	}, [delay]);
}

function randomWithRange(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mod(n: number, m: number) {
	return ((n % m) + m) % m;
}

function FlippingCountDownComponent({
	num,
	upperLimit,
	scale,
}: {
	num: number;
	upperLimit: number;
	scale: string;
}) {
	// Add one here, when state is 1, we want to flipped to 1, not from 1 to 0
	const current = (num + 1) % (upperLimit + 1);
	const next = mod(current - 1, upperLimit + 1);

	useEffect(() => {
		const contentNextTick = (element: Element) => {
			element.innerHTML = (
				String(mod(Number(element.innerHTML) - 1, upperLimit + 1))
			).padStart(2, '0');
		};

		const topHalf = document.querySelector(`.${scale}.${styles['top-half']}`);
		const bottomHalf = document.querySelector(
			`.${scale}.${styles['bottom-half']}`,
		);

		const topHalfFlip = document.querySelector(
			`.${scale}.${styles['top-half-flip']}`,
		);
		const bottomHalfFlip = document.querySelector(
			`.${scale}.${styles['bottom-half-flip']}`,
		);

		if (
			!topHalf
			|| !bottomHalf
			|| !topHalfFlip
			|| !bottomHalfFlip
		) {
			return;
		}

		const topHalfFlipAnimationstartCallback = () => {
			contentNextTick(topHalf);
		};

		const topHalfFlipAnimationendCallback = () => {
			contentNextTick(topHalfFlip);
			topHalfFlip.classList.remove(`${styles.flip_animate}`);
			bottomHalfFlip.classList.add(`${styles.flip_animate}`);
		};

		const bottomHalfFlipAnimmationendCallback = () => {
			contentNextTick(bottomHalf);
			contentNextTick(bottomHalfFlip);
			bottomHalfFlip.classList.remove(`${styles.flip_animate}`);
		};

		topHalfFlip.addEventListener(
			'animationstart',
			topHalfFlipAnimationstartCallback,
		);
		topHalfFlip.addEventListener(
			'animationend',
			topHalfFlipAnimationendCallback,
		);
		bottomHalfFlip.addEventListener(
			'animationend',
			bottomHalfFlipAnimmationendCallback,
		);

		return () => {
			topHalfFlip.removeEventListener(
				'animationstart',
				topHalfFlipAnimationstartCallback,
			);
			topHalfFlip.removeEventListener(
				'animationend',
				topHalfFlipAnimationendCallback,
			);
			bottomHalfFlip.removeEventListener(
				'animationend',
				bottomHalfFlipAnimmationendCallback,
			);
		};
	}, [scale, upperLimit]);

	useEffect(() => {
		const topHalfFlip = document.querySelector(
			`.${scale}.${styles['top-half-flip']}`,
		);
		if (topHalfFlip) {
			topHalfFlip.classList.add(`${styles.flip_animate}`);
		}
	}, [current, scale]);

	return (
		<div className={`${styles.flip_card}`}>
			<div className={`${styles['top-half']} ${scale}`}> {current}</div>
			<div className={`${styles['bottom-half']} ${scale}`}> {current}</div>
			<div className={`${styles['top-half-flip']} ${scale}`}> {current}</div>
			<div className={`${styles['bottom-half-flip']} ${scale}`}> {next}</div>
		</div>
	);
}

export default function CountdownTimer() {
	const initTotalSeconds = randomWithRange(1, 8639999);

	const [state]: TimerProps['countdownReturns'] = useCountDownTimer({
		initTotalSeconds,
		timerInterval: 1000,
	});

	const {days, hours, minutes, seconds} = state;

	return (
		<div className='flex justify-center mt-12'>
			<div className='flex justify-center text-center sm:w-full w-[450px] scale-x-[.65] scale-y-[.65] sm:scale-100 transition-all'>
				<div className={`${styles.clock} flex gap-4`}>
					<div className='flex flex-col'>
						<FlippingCountDownComponent
							num={days}
							upperLimit={99}
							scale='countdown_days'
						/>
						<div className='font-bold mt-6'>Days</div>
					</div>
					<div className='flex flex-col'>
						<FlippingCountDownComponent
							num={hours}
							upperLimit={23}
							scale='countdown_hours'
						/>
						<div className='font-bold mt-6'>Hours</div>
					</div>
					<div className='flex flex-col'>
						<FlippingCountDownComponent
							num={minutes}
							upperLimit={59}
							scale='countdown_minutes'
						/>
						<div className='font-bold mt-6'>Minutes</div>
					</div>
					<div className='flex flex-col'>
						<FlippingCountDownComponent
							num={seconds}
							upperLimit={59}
							scale='countdown_second'
						/>
						<div className='font-bold mt-6'>Seconds</div>
					</div>
				</div>
			</div>
		</div>
	);
}
