
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import CrossreferenceEditing from './crossreferenceediting';
import CrossreferenceUI from './crossreferenceui';

export default class Crossreference extends Plugin {
	static get requires() {
		return [ CrossreferenceEditing, CrossreferenceUI ];
	}
}
