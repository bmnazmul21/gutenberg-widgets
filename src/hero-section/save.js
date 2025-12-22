import { useBlockProps, RichText } from '@wordpress/block-editor';

function save({ attributes }    ) {
    const blockProps = useBlockProps.save();
    return ( 
        <div {...blockProps}>
            <RichText.Content tagName="h2" value={attributes.heading} />
            <RichText.Content tagName="p" value={attributes.paragraph} />
        </div>
     );
}
export default save;