var options = {
	figureTagName: 'a',
	urlForSize: function (filename, size) {
		return './img/prep/' + size + '/' + filename;
    },
    getMinAspectRatio: function(lastWindowWidth) {
        if (lastWindowWidth <= 1280) {
            return 2;
        }
        else if (lastWindowWidth <= 1440) {
            return 3;
        }
        else if (lastWindowWidth <= 1920) {
            return 4;
        }
        else if (lastWindowWidth <= 2560) {
            return 5;
        }
        return 6;
  },
}

var imageData = [
    {
        "dateTaken":  "\/Date(1716045167000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130398.jpg"
    },
    {
        "dateTaken":  "\/Date(1716045190000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130409.jpg"
    },
    {
        "dateTaken":  "\/Date(1716045207000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130410.jpg"
    },
    {
        "dateTaken":  "\/Date(1716045408000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130434.jpg"
    },
    {
        "dateTaken":  "\/Date(1716045704000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130445.jpg"
    },
    {
        "dateTaken":  "\/Date(1716046948000)\/",
        "aspectRatio":  1,
        "filename":  "P1130457.jpg"
    },
    {
        "dateTaken":  "\/Date(1716049069000)\/",
        "aspectRatio":  1,
        "filename":  "P1130464.jpg"
    },
    {
        "dateTaken":  "\/Date(1716049074000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130467.jpg"
    },
    {
        "dateTaken":  "\/Date(1716049088000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130474.jpg"
    },
    {
        "dateTaken":  "\/Date(1716049146000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130512.jpg"
    },
    {
        "dateTaken":  "\/Date(1716049825000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130525.jpg"
    },
    {
        "dateTaken":  "\/Date(1716050378000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130527.jpg"
    },
    {
        "dateTaken":  "\/Date(1716050413000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130542.jpg"
    },
    {
        "dateTaken":  "\/Date(1716051012000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130556.jpg"
    },
    {
        "dateTaken":  "\/Date(1716051030000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130559.jpg"
    },
    {
        "dateTaken":  "\/Date(1716051072000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130566.jpg"
    },
    {
        "dateTaken":  "\/Date(1716051131000)\/",
        "aspectRatio":  1.333,
        "filename":  "DJI_0210.jpg"
    },
    {
        "dateTaken":  "\/Date(1716051231000)\/",
        "aspectRatio":  1.333,
        "filename":  "DJI_0215.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053174000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130575.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053200000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130576.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053508000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130581.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053527000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130584.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053546000)\/",
        "aspectRatio":  1,
        "filename":  "P1130586.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053549000)\/",
        "aspectRatio":  1,
        "filename":  "P1130589.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053569000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130592.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053579000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130593.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053598000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130595.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053604000)\/",
        "aspectRatio":  1.4,
        "filename":  "P1130597.jpg"
    },
    {
        "dateTaken":  "\/Date(1716053635000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130601.jpg"
    },
    {
        "dateTaken":  "\/Date(1716055820000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130603.jpg"
    },
    {
        "dateTaken":  "\/Date(1716055839000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130605.jpg"
    },
    {
        "dateTaken":  "\/Date(1716055925000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130617.jpg"
    },
    {
        "dateTaken":  "\/Date(1716055931000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130627.jpg"
    },
    {
        "dateTaken":  "\/Date(1716055938000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130646.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056041000)\/",
        "aspectRatio":  1,
        "filename":  "P1130671.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056242000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130677.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056262000)\/",
        "aspectRatio":  1,
        "filename":  "P1130684.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056515000)\/",
        "aspectRatio":  0.751,
        "filename":  "P1130693.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056568000)\/",
        "aspectRatio":  1,
        "filename":  "P1130710.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056691000)\/",
        "aspectRatio":  1.028,
        "filename":  "P1130715.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056761000)\/",
        "aspectRatio":  1,
        "filename":  "P1130723.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056786000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130734.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056786000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130733.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056829000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130754.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056846000)\/",
        "aspectRatio":  1.25,
        "filename":  "P1130761.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056855000)\/",
        "aspectRatio":  1,
        "filename":  "P1130763.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056881000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130767.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056887000)\/",
        "aspectRatio":  1.5,
        "filename":  "P1130777.jpg"
    },
    {
        "dateTaken":  "\/Date(1716056998000)\/",
        "aspectRatio":  0.751,
        "filename":  "P1130815.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057031000)\/",
        "aspectRatio":  1,
        "filename":  "P1130829.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057073000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130846.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057074000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130849.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057075000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130860.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057075000)\/",
        "aspectRatio":  0.667,
        "filename":  "P1130858.jpg"
    },
    {
        "dateTaken":  "\/Date(1716057653000)\/",
        "aspectRatio":  1,
        "filename":  "P1130885.jpg"
    }
];

const lightbox = GLightbox({
    touchNavigation: true
})

window.onload = function () {
	var pig = new Pig(imageData, options).enable();

    lightbox.reload();
};

window.onresize = function () {
    lightbox.reload();
};

window.onscroll = function () {
    lightbox.reload();
};