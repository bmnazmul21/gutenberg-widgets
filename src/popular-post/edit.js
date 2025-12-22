import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';


function edit( { attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const onValueChange = (newValue, setAttributes ) => {
        setAttributes({heading: newValue});
    };

    const [items, setItems ]=useState([]);

    useEffect(() => {
        let url = ajaxurl + '?action=popular_post_fetch';
        fetch( url). then( response =>response.json()).then( (response)=>{
            setItems(response);

        });
    }, []);

    return(
        <div {...blockProps}>
            <RichText tagName="h2" value={attributes.heading} onChange={(value) => setAttributes({heading: value})}/>
            {items.map(item =>(
                <h4>{item.post_title}</h4>
            ))}
        </div>
    )
}
export default edit;