import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const MessageToastifyWrapper = {
	success: (msg: string) => toast.success(msg),
	error: (msg: string) => toast.error(msg),
	warn: (msg: string) => toast.warn(msg),
	warning: (msg: string) => toast.warning(msg),
	info: (msg: string) => toast.info(msg),
	dismiss: () => toast.dismiss(),
	deleteHistory: (
		data: string,
		onClosing: (confirmation: boolean) => void,
	) => {
		toast(Dialog, {
			data,
			onClose: confirmation => {
				if (confirmation) return onClosing(true);
				return onClosing(false);
			},
			autoClose: false,
			closeOnClick: false,
			closeButton: false,
			draggable: false,
		});
	},
};
