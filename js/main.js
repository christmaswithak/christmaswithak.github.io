function music() {
    var video = [
        'aAkMkVFwAoo', 
        'E8gmARGvPlI', 
        'j3fSknbR7Y4', 
        'AkJGxDbSSt8', 
        '66ySm0B4OHk', 
        'IgDgQbhHuZw', 
        'FIzjIkJcBG4', 
        'rhM_RyU1EeI', 
        'NTxtAjeu8-4',
        'Q_yuO8UNGmY',
        'aBTH6D0UL-Q',
        'EM2Fnp_qnE8',
        'j9jbdgZidu8',
        'Wyicd4wqYdA',
        'Ble0-rKW8Zo',
        'kUPVwiLX2j4',
        'Y3DG1uq2KJk'
    ]  
    var randomizer = Math.floor(Math.random() * video.length);
    var link = 'https://www.youtube.com/watch?v=' + video[randomizer];
    window.open(link);
}