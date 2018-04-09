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
