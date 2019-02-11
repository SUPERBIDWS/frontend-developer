import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';

import CardAlbuns from './CardAlbuns';

class ListAlbuns extends Component {

  componentDidMount() {
    this.props.actions.getAlbuns()
  }

   render() {
    const { page, currentPage } = this.props
    const { changeSizePage,backPage,nextPage,getPhotos } = this.props.actions

    return (
      <div className='container'>
        <div className='albuns'>
          <div className='controlPages'>
            <a href 
            onClick={() =>backPage(page)} className={page === 1 ? 'disabled' : ''}> &#8249; </a>
            <div>
              <span>Página - {page} de {currentPage ? currentPage.totalPages : ''}</span>
              <select name="size" id="size" onChange={changeSizePage}>
                <option value="10">10</option>
                <option value="15">20</option>
                <option value="25">25</option>
              </select>
            </div>
            {currentPage ? 
            <a href onClick={() => nextPage(page,currentPage)} 
            className={page === currentPage.totalPages ? 'disabled' : ''}> &#8250; </a>:
            ''
            }
          </div>
         
          {currentPage ?
            <CardAlbuns itensPage={currentPage.data} getPhotos={getPhotos}/> :
            <CardAlbuns itensPage={[]} />
          }
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.albuns.currentPage,
  page: state.albuns.page

})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbuns)
