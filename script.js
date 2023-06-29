$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Apna Bana Le',
            artist: 'Arijit singh',
            url: 'Songs/Apna Bana Le (Bhediya) - DjBaap.Net.mp3',
            cover: 'images/apna-bana-le.jpg'
        }, {
            name: 'Kesariya',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Pritam',
            url: 'Songs/Kesariya - Brahmāstra.mp3',
            cover: 'Kesariya - Brahmāstra.jpg'
        }, {
            name: 'Kho Gaye',
            artist: 'Taruk Raina',
            url: 'Songs/Kho Gaye - Mismatched Season 2.mp3',
            cover: 'Kho Gaye - Mismatched Season 2.jpg'
        }, {
            name: 'Phir Aur Kya Chaiye',
            artist: 'Arijit Singh',
            url: 'Songs/Phir-Aur-Kya-Chahiye.mp3',
            cover: 'Images/phir-aur-kya-chaiye.jpg'
        }, {
            name: 'Dildara',
            artist: 'Shafqat Amanat Ali,Shekhar Ravjiani',
            url: 'Songs/27   Dildaara (Stand By Me) (Ra.One).mp3',
            cover: 'As It Was - Harry Styles.jpg'
        }, {
            name: 'You',
            artist: 'Armaan Malik',
            url: 'Songs/You- Armaan Malik.mp3',
            cover: 'You- Armaan Malik.jpg'
        }, {
            name: 'Kahani Song',
            artist: 'Amitabh Bhattacharya, Mohan Kannan, Pritam ',
            url: 'Songs/Kahani Song - Laal Singh Chaddha.mp3',
            cover: 'Kahani Song - Laal Singh Chaddha.jpg'
        }, {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Jonita Gandhi, Pritam',
            url: 'Songs/Deva-Deva - Brahmastra.mp3',
            cover: 'Deva-Deva - Brahmastra.jpg'
        }, {
            name: 'Rangi Saari',
            artist: 'Kanishk Seth & Kavita Seth',
            url: 'Songs/Rangi Saari - Kanishk Seth & Kavita Seth.mp3',
            cover: 'Rangi Saari - Kanishk Seth & Kavita Seth.jpg'
        }, {
            name: 'Golden hour',
            artist: 'JVKE',
            url: 'Songs/Golden hour - JVKE.mp3',
            cover: 'Golden hour - JVKE.jpg'
        }, {
            name: 'Dandelions',
            artist: 'Ruth B.',
            url: 'Songs/Dandelions - Ruth B..mp3',
            cover: 'Dandelions - Ruth B..jpg'
        }, {
            name: 'Manike',
            artist: 'Jubin Nautiyal, Rashmi Virag ',
            url: 'Songs/Manike - Thank God.mp3',
            cover: 'Manike - Thank God.jpg'
        }, ]
});
