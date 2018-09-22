import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const List = ({albums}) => {
  return (
    <table className="table">
      <tbody>
      {Array.isArray(albums) && albums.map((item, i) => {

  return(
    <div key={item.albumId} style={{ width:'calc(33.3% - 10px)', height: window.innerWidth/3, margin:5, display:'inline-block', backgroundColor:'grey'}}>
      <div style={{position:'relative', margin: 'auto', width:'100px', height:'30px', top:'calc(50% - 25px)', lineHeight:'50px'}} >
        <Link to={'/album/' + item.albumId}>ALBUM {item.albumId}</Link>
      </div>
    </div>
  )
})}
      </tbody>
    </table>
  );
};

List.propTypes = {
  albums: PropTypes.array.isRequired
};

export default List;
