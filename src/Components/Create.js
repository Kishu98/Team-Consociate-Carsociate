import React from 'react';

const Create = () => {
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0, 10);
    return (
        <div>
            <form>
                <label>
                    No. of Passengers:
                     <input type="text" />
                </label>
                <br />
                <label>
                    Set time:
                <input id="dateRequired" type="time" name="dateRequired" defaultValue={date} />
                </label>
            </form>
        </div>
    )
}

export default Create;