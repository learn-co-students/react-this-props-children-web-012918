// Code Goes Here

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
