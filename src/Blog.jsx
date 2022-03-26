import { useState } from 'react'


//import styled from 'styled-components';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};
/**
 * 
 */
const Blog = () => {


    const [BlogEntry, setBlogEntry] = useState('');
     
    console.log('loaded')
    const getTitle = (e) =>{
      console.log(e.target.value)
      setBlogEntry(e.target.value)
   
    }


    return <div className='container'>

        <div className="row">
            <label htmlFor="">Title</label>
            <input type="text" className='form-control' onChange={(e)=>getTitle(e)} /> 
            <label htmlFor="">Description</label>
            <textarea  className='form-control'>
            </textarea>
            <button className ="btn btn-outline-primary mt-5" > Add new</button>
         
           
        </div>

        <div className="row mt-5">
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Blog T</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>;
}



Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;
// #endregion

export default Blog;