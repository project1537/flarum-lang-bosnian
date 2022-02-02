dayjs.locale('bs', {
	months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
  monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
  weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
  weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
  weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	longDateFormat : {
		LT : 'H:mm',
		LTS : 'H:mm:ss',
		L : 'DD.MM.YYYY',
		LL : 'D. MMMM YYYY',
		LLL : 'D. MMMM YYYY H:mm',
		LLLL : 'dddd, D. MMMM YYYY H:mm'
	},
	calendar : {
		sameDay: '[danas u] LT',
		nextDay: '[sutra u] LT',
		nextWeek: 'dddd [u] LT',
		lastDay: '[prošlu] LT',
		lastWeek: function () {
		return (this.day() === 0 || this.day() === 6) ?
		'[prošlu] dddd [u] LT' : // Saturday + Sunday
		'[prošli] dddd [u] LT'; // Monday - Friday
	},
	sameElse: 'L'
	},
	relativeTime : {
		future : 'za %s',
		past : 'prije %s',
		s : 'par sekundi',
		m : 'jednu minutu',
		mm : '%d minuta',
		h : 'jedan sat',
		hh : '%d sati',
		d : 'jedan dan',
		dd : '%d dana',
		M : 'jedan mjesec',
		MM : '%d mjeseci',
		y : 'jednu godinu',
		yy : '%d godina'
	},
	ordinalParse: /\d{1,2}º/,
	ordinal : '%dº'
});
