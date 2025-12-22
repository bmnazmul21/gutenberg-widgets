import { useBlockProps, RichText } from '@wordpress/block-editor';

function edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const saveAttributes = (propertyName, newValue) => {
        setAttributes({ [propertyName]: newValue });
    };

    return (
        <div {...blockProps}>
            <RichText
                tagName="h2"
                placeholder="Enter Hero Title"
                value={attributes.heading}
                onChange={ e=>saveAttributes('heading', e)}
            />
            <RichText
                tagName="p"
                placeholder="Enter Hero Description"
                value={attributes.paragraph}
                onChange={ e=>saveAttributes('paragraph', e)}
            />
        </div>
    );
}

export default edit;