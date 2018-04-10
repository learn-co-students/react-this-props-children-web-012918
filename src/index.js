// Code Goes Here

// <MovieBrowser>
//   <Movie title="Mad Max: Fury Road" />
//   <Movie title="Harry Potter & The Goblet Of Fire" />
// </MovieBrowser>

export default class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isPlaying: child.props.title === currentPlayingTitle
      });
    });

    return (
      <div className="movie-browser">
        {childrenWithExtraProp}
      </div>
    );
  }
}

// React.Children.map has two parameters: the first one is the children themselves, and the second one is a function that transforms the value of the child. In this case, we're adding an extra prop. We do that using React.cloneElement. As the first argument we pass in the child component itself, and as the second argument, we pass in any additional props. Those additional props get merged with the child's existing props, overwriting any props with the same key.

export default class SomeComponent extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className="some-component-special-class">{child}</div>
      );
    });

    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
