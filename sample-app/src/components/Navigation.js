import React from 'react';


const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class Navigation extends React.Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">            
            <NavItem path="/new" name="Add New" /> 
            <NavItem path="/list" name="Article List" />
            <NavItem path="/comment" name="Add Comment" />            
          </ul>
          
        </div>
      </nav>
      
    )
  }
}

export default Navigation;