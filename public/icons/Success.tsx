import { Icon } from '@types';

export const Success = ({ customStyles, handleClick }: Icon) => {
	return (
		<svg
			className={customStyles}
			onClick={handleClick}
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
		>
			<g id="Group_4218" data-name="Group 4218" transform="translate(-23407 -8449)">
				<circle
					id="Ellipse_665"
					data-name="Ellipse 665"
					cx="9"
					cy="9"
					r="9"
					transform="translate(23407 8449)"
					fill="#1b8c00"
				/>
				<path
					id="tick_"
					data-name="tick'"
					d="M10.67.176a.6.6,0,0,1,0,.852L4.042,7.657a.6.6,0,0,1-.852,0L.176,4.644a.6.6,0,0,1,.852-.852L3.615,6.379l6.2-6.2A.6.6,0,0,1,10.67.176Z"
					transform="translate(23410.492 8454.168)"
					fill="#fff"
					fillRule="evenodd"
				/>
			</g>
		</svg>
	);
};
