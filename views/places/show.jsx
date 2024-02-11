const React = require('react')
const Def = require('../default')


function show (data) {
    //console.log(data);
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!  :-(' : 'Rave! :-)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )   
        })
    };
    

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

                    <h3>{data.place.showEstablished()}</h3>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form action={`/places/${data.id}?_method=DELETE`} method="POST">
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </div>

                <div className="col-8">
                    <img src={data.place.pic} alt={`${data.place.pic}`} height="400vh" />
                    <h3>Location: {data.place.city}, {data.place.state}</h3>
                </div>
            </div>

            <div>
                <h3>Comments</h3>
                {comments}
            </div>
          </main>
        </Def>
    )
}


module.exports = show
