import { create } from 'zustand';

export const useVehicleModalStore = create(set => ({
	showVehicleModal: false,
	showVehicleModalClass: '',
	launchVehicleModal() {
		const body = document.getElementsByTagName('body');
		body[0].classList.add('scroll-block');
		set({ showVehicleModal: true });

		setTimeout(() => {
			set({ ...arguments, showVehicleModalClass: 'is-active' });
		});
	},
	hideVehicleModal() {
		const body = document.getElementsByTagName('body');
		body[0].classList.remove('scroll-block');
		set({ showVehicleModalClass: '' });

		setTimeout(() => {
			set({ ...arguments, showVehicleModal: false });
		}, 600);
	},
}));
