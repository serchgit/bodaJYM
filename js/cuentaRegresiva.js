const getRemainTime = deadline => {
	let now = new Date(),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

		return{
			remainTime,
			remainSeconds,
			remainMinutes,
			remainHours,
			remainDays
		}
};
// console.log(getRemainTime("Sat Aug 16 2025 13:00:00 GMT-0600"));

const countdown = (deadline,elem, finalMessage) =>{
	const el = document.getElementById(elem);

	const timerUpdate = setInterval( ()=>{
		let t = getRemainTime(deadline);
		el.innerHTML = `Faltan ${t.remainDays} dias - ${t.remainHours}H :${t.remainMinutes}m :${t.remainSeconds}s`;

		if (t.remainTime <= 1) {
			clearInterval(timerUpdate)
			el.innerHTML = finalMessage;
		}
	}, 1000)
};

countdown("Sat Aug 16 2025 13:00:00 GMT-0600", "reloj", "¡Es hoy, no llegues tarde!")
//countdown("wed may 28 2025 12:14:00 GMT-0600", "reloj", "¡Es hoy, no llegues tarde!")