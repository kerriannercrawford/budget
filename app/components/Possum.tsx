import Image from 'next/dist/client/image';
import possumImg from '../../public/Daco_5167274.png';

export default function Possum() {
	return (
		<div style={{ display: 'flex' }}>
		<div style={{ width: '65%' }}><Image src={possumImg} alt='Welcoming Possum'/></div>
		<div style={{ marginLeft: '10%' }}>
			<p>oh, hello.
				welcome.
			</p>
		</div>
	</div>
	)
}