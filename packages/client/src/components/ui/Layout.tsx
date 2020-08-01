import React from 'react';

type LayoutProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
};

export default function Layout({ header, children }: LayoutProps) {
	return (
		<div className="bg-gray-100 h-screen p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:px-6">{header}</div>
					<div className="bg-gray-50 px-4 py-5 sm:p-6">{children}</div>
				</div>
			</div>
		</div>
	);
}
