import { registerBlockType } from '@wordpress/blocks';

import sdit from './edit'
import save from './save'   

import metadata from './block.json';

registerBlockType(metadata, {
    edit: sdit,
    save: save,
});