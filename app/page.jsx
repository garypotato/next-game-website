import Heading from '@/components/Heading';
import { getFeatureReview } from '@/lib/reviews';
import Link from 'next/link';

export default async function HomePage() {
	const review = await getFeatureReview();

	return (
		<>
			<Heading>Indie Game</Heading>

			<p className='pb-3'>only the best indie games, reviewed for you</p>

			<div className='border bg-white rounded shadow hover:shadow-lg font-orbitron font-semibold w-80 sm:w-full'>
				<Link
					href={`/reviews/${review.slug}`}
					className='flex flex-col sm:flex-row'
				>
					<img
						src={review.image}
						alt={review.title}
						width='320'
						height='180'
						className='rounded-t sm:rounded-l sm:rounded-r-none'
					/>
					<h2 className='py-1 text-center sm:px-2'>{review.title}</h2>
				</Link>
			</div>
		</>
	);
}
