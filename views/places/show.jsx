const React = require('react')
const Def = require('../default')


function show (data) {
    return (
        <Def>
          <main className="container">
            <div className="row">
                <h1>{data.place.name}</h1>
            </div>
            
            <div className="row">
                <div className="col-4">
                    <p>Cuisines: {data.place.cuisines}</p>

                    <p>Rating: currently unrated</p>

                    <p>Location: {data.place.city}, {data.place.state}</p>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </div>

                <div className="col-8">
                    <img src={data.place.pic} alt={`${data.place.pic}`} height="400vh" />
                </div>
            </div>

            <div>
                <h3>Comments</h3>

                <p>no comments yet!</p>
            </div>
          </main>
        </Def>
    )
}


module.exports = show
