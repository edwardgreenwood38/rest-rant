const React = require('react')
const Def = require('../default')


function comment(data) {
    return (
        <Def>
            <h2>Add Comment</h2>

            <form action='/places' method="POST">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input id="author" name="author" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="rant">Rant or Rave</label>
                    <input type="checkbox" id="rant" name="rant"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="stars">Rating</label>
                    <input id="stars" name="stars" min="1" max="5" className="form-control" required></input>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Comment</label>
                    <input type="textarea" id="content" name="content" className="form-control"></input>
                </div>

                <input type="submit" value="Add Comment" className="btn btn-primary" />
            </form>
        </Def>
    )
}