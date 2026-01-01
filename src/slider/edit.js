
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<p>Slider Block</p>
		</div>
	);
}import { useBlockProps } from '@wordpress/block-editor';