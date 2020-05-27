import React from 'react';

function Work() {
    const myStlye = {
        backgroundColor: "White",
        width: "30%",
        height: "100%"
    }
    return (
        <div style={myStlye}>
            <h1>CarSociate</h1>
            <form>
                <label>
                    Destination:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}

export default Work;    