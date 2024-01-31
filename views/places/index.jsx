const React = require('react');
const Def = require('../default');


function places (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6">
                <h2><a href={`/places/${index}`} >{place.name}</a></h2>

                <p>
                    {place.cuisines}
                </p>
                
                <img src={place.pic} alt={place.name} height="250vh" />
                <div>
                    Photo by <a href={place.photoByLink}>{place.photoBy}</a> on <a href={place.onLink}>Unsplash</a>
                </div>

                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    });

    return (
        <Def>
            <main className="text-center">
                <h1>Places to Rant or Rave About</h1>

                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    );
};


module.exports = places;