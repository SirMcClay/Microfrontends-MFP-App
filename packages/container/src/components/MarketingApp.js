import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				console.log(nextPathname);
			},
		});
	});

	return <div ref={ref} />;
};
