
const React = require('react');
const Def = require('./default');


function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>

                <div>
                <img src="/images/storm-trooper-daniel-k-cheung-unsplash.jpg" alt="storm-trooper-daniel-cheung-unsplash" height="400vh" />
                <div>
                    Photo by <a href="https://unsplash.com/@danielkcheung?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel K Cheung</a> on <a href="https://unsplash.com/photos/stormtrooper-minifigure-walking-on-the-sand-cPF2nlWcMY4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
            </main>
        </Def>
    )
};


module.exports = error404;
