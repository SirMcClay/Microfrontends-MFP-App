import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current, {
			onNavigate: ({ pathname }) => {
				console.log(pathname);
			},
		});
	});

	return <div ref={ref} />;
};
