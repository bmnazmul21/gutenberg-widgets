j

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<p>Slider Block</p>
		</div>
	);
}mport { useBlockProps } from '@wordpress/block-editor';