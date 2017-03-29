import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_search">
        <form>
          <input type="text" placeholder="Поиск" />
          <button type="button" />
        </form>
      </div>      
    )
  }
}

export default Search;
