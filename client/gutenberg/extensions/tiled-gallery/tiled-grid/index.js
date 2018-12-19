/**
 * Internal dependencies
 */
import { TiledGalleryLayout } from './layout';
import { Jetpack_Tiled_Gallery_Shape } from './shapes/jetpack-tiled-gallery-shape';
import { DEFAULT_GALLERY_WIDTH, TILE_MARGIN } from '../constants.js';

/*
 * Rectangular tiled gallery layout
 *
 * Implements `Jetpack_Tiled_Gallery_Layout_Rectangular` from:
 * https://github.com/Automattic/jetpack/blob/0d837791212dcfab0e75145a21857cc507e4c9d3/modules/tiled-gallery/tiled-gallery/tiled-gallery-rectangular.php
 */
export const rectangularLayout = ( {
	images,
	margin = TILE_MARGIN,
	contentWidth = DEFAULT_GALLERY_WIDTH,
} ) => {
	const layout = new TiledGalleryLayout( {
		attachments: images,
		contentWidth,
		margin,
	} );
	Jetpack_Tiled_Gallery_Shape.reset_last_shape();
	return layout.get_columns();
};
