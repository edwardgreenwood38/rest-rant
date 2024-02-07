const React = require('react');
const Def = require('../default');


function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>

                <form action="/places" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pic">Pic URL</label>
                        <input type="url" id="pic" name="pic" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>


                    <input type="submit" value="Add Place" className="btn btn-primary" />
                </form>
            </main>
        </Def>
    )
};


module.exports = new_form;
