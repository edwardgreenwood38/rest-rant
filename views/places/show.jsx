const React = require('react')
const Def = require('../default')


function show (data) {
    //console.log(data);
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )

    if (data.place.comments.length > 0) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot+ c.stars
        }, 0)

        let averageRating = sumRatings / data.place.comments.length

        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )

        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4">
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

                    <h2>Rating:</h2>
                    {rating}

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

                <a href={`/${data.id}/comment`} className="btn btn-primary">Add comment</a>
                {comments}
            </div>
          </main>
        </Def>
    )
}


module.exports = show
