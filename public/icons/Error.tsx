import { Icon } from '@types';

export const Error = ({ customStyles, handleClick }: Icon) => {
	return (
		<svg
			className={customStyles}
			onClick={handleClick}
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
		>
			<g id="Group_4217" data-name="Group 4217" transform="translate(-23384 -8449)">
				<circle
					id="Ellipse_664"
					data-name="Ellipse 664"
					cx="9"
					cy="9"
					r="9"
					transform="translate(23384 8449)"
				/>
				<g id="Group_4216" data-name="Group 4216" transform="translate(23388.689 8453.689)">
					<path
						id="Path_3305"
						data-name="Path 3305"
						d="M949.44,617.18a.615.615,0,0,1,0,.871l-7.389,7.389a.616.616,0,0,1-.871-.871l7.389-7.389A.615.615,0,0,1,949.44,617.18Z"
						transform="translate(-941 -617)"
						fill="#fff"
						fillRule="evenodd"
					/>
					<path
						id="Path_3306"
						data-name="Path 3306"
						d="M941.18,617.18a.615.615,0,0,1,.871,0l7.389,7.389a.616.616,0,0,1-.871.871l-7.389-7.389A.615.615,0,0,1,941.18,617.18Z"
						transform="translate(-941 -617)"
						fill="#fff"
						fillRule="evenodd"
					/>
				</g>
			</g>
		</svg>
	);
};
