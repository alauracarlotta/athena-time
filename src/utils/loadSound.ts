import gravitationalBeep from '../assets/audios/bell-notification-337658.mp3';

export const loadSound = () => {
	const audio = new Audio(gravitationalBeep);
	audio.load();
	return () => {
		audio.currentTime = 0;
		audio.play().catch(error => console.log('Errouuuuuuuu', error));
	};
};
