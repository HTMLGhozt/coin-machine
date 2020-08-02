import React from 'react';

export default function Label({
	name,
	children,
}: {
	name: string;
	children: React.ReactNode;
}) {
	return (
		<label
			htmlFor={name}
			className="block text-sm font-medium leading-5 text-gray-700"
		>
			{children}
		</label>
	);
}
