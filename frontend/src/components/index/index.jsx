import React from 'react'
import SimpleMap from '../map/map'

class IndexComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }




    addServiceForm() {
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <label >Service Title
                <input type="text" />
            </label>
        </form>
    }

    render() {
        return (
            <div>
                <h2>Index Component</h2>
                
                {/* <SimpleMap /> */}
                {/* {need to nest individual items underneath the logged in user} */}
                
            </div>
        )
    }
}

export default IndexComponent;