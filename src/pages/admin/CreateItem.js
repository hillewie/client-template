import React, { Component } from 'react'

export class CreateItem extends Component {
    render() {
        return (
            <div>
                <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Titel"
                    value=""

                />
                <br/>
                <br/>

                <textarea
                    name="content"
                
                />  
                
                <input
                    type="text"
                    name="tag"
                    placeholder="Skapa en tag..."
                    value=""

                />

                <button onClick="">Fnittra</button>
                </form>
            </div>
        )
    }
}

export default CreateItem
