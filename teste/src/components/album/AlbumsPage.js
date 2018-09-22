import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as albumActions from '../../actions/albumActions';
import List from './List';

class AlbumsPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {albums} = this.props;

    return (
      <div>
        <List albums={albums}/>
      </div>
    );
  }
}

AlbumsPage.propTypes = {
  albums: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(albumActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
