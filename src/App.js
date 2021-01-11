import React, { Component } from 'react'
import Table from './Table'


class App extends Component {
    render() {
      const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
    }
  }

/*Note the last line in the App.js file. It makes the component available to be imported into other components or files (like we did in the index.js -- see the import).*/
export default App