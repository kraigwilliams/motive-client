import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faTrash, faTimes, faPlus, faMinus, faAngleDown, faShare } from '@fortawesome/free-solid-svg-icons'


export default function registerIcons() {
	library.add(
		fab, faPlus, faMinus, faTrash, faTimes, faArrowLeft, faAngleDown, faShare
	);
}