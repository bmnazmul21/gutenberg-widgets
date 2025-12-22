import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useeffect, useState } from '@wordpress/element';


function edit( attributes) {
    const blockProps = useBlockProps();
    const onValueChange = (newValue, setAttributes ) => {
        setAttributes({heading: newValue});
    };

    const [items, setItems ]=useState([]);

    useeffect(() => {
        let url = ajaxurl + '?action=popular_post_fetch';
        fetch( ajaxurl). then( response =>response.json()).then( (response)=>{
            setItems(response);

        });
    }, []);

    return(
        <div {...blockProps}>
            <RichText tagName="h2" value={attributes.heading} onChange={onValueChange}/>
            this is popular post block
        </div>
    )
}
export default edit;