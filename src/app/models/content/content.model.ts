export interface ContentText {
	variant: 'text';
	title?: string;
	subtitle?: string;
	image?: string;
	imgWidth?: number;
	link?: string;
}

export interface ContentImage {
	variant: 'image';
	file: string;
	link?: string;
}

export type Content = ContentText | ContentImage;
