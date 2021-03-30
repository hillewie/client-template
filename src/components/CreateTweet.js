import React, { Component } from 'react'

export class CreateTweet extends Component {
    render() {
        return (
            <div>
                Skapa ett fniss
                <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Skapa ett fniss..."
                    value=""

                />
                <br/>
                <br/>
                <textarea
                    name="content"
                
                />          

                </form>
                
            </div>
        )
    }
}

export default CreateTweet
