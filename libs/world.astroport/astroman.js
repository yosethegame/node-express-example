var astroman = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('astroman.html');
};

module.exports = astroman;
