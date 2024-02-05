//
const React = require('react');
const Def = require('../default.jsx'); 


function edit_form (data) {
    return (
        <Def>
          <main>
                <h1>Edit Place</h1>

                <form action={`/places/${data.place.id}?_method=PUT`} method="POST">
                    <div className="row">
                      <div className="form-group col-md-6">
                          <label htmlFor="name">Place Name</label>
                          <input id="name" name="name" className="form-control" value={data.place.name} required />
                      </div>

                      <div className="form-group col-md-6">
                          <label htmlFor="pic">Pic URL</label>
                          <input type="url" id="pic" name="pic" className="form-control" />
                      </div>

                      <div className="form-group col-md-6">
                          <label htmlFor="city">City</label>
                          <input id="city" name="city" className="form-control" />
                      </div>

                      <div className="form-group col-md-6">
                          <label htmlFor="state">State</label>
                          <input id="state" name="state" className="form-control" />
                      </div>

                      <div className="form-group">
                          <label htmlFor="cuisines">Cuisines</label>
                          <input id="cuisines" name="cuisines" className="form-control" required />
                      </div>
                    </div>
                    
                    <input type="submit" value="Add Place" className="btn btn-primary" />
                    
                </form>
            </main>
        </Def>
    )
};


// exports
module.exports = edit_form;
