let isRunning = false;

self.onmessage = function (event) {
	/* console.log('uiiiiiiiiiiiii', event.data);

	switch (event.data) {
		case 'Maria do bairro':
			self.postMessage('Soooooooy');
			break;
	} */

	if (isRunning) return;

	isRunning = true;

	const state = event.data;
	const { activeTask, secondsRemaining } = state;

	const endDate = activeTask.startDate + secondsRemaining * 1000; // milisegundos
	const now = Date.now();
	let countDownSeconds = Math.ceil((endDate - now) / 1000);

	const tickTack = () => {
		self.postMessage(countDownSeconds);
		const now = Date.now();
		countDownSeconds = Math.floor((endDate - now) / 1000);

		setTimeout(tickTack, 1000);
	};

	tickTack();
};
