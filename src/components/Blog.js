import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card, Row, Container, Col, ListGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Blog = () => {

  const[blogs, setBlogs]=useState([])

  const getData=async()=>{
    let res = await axios.get("http://localhost:8080/api/blogs")
    setBlogs(res.data)
  }

  const deleteData=async(id)=>{
    await axios.delete(`http://localhost:8080/api/blogs/${id}`)
    getData()
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    // <Container className='mt-3'>
    //   <Link className='btn btn-primary mt-3' to="/add">Ajouter</Link>
    //   <Row>
    //     {blogs.map((blog)=> (
    //       <Col key={blog.id} md={4}>
    //         <Card className="mt-3">
    //           <Card.Body>
        
    //             <Card.Title>{blog.titre}</Card.Title>
    //             <Card.Subtitle className="mb-2 text-muted">
    //               {blog.auteur}
    //             </Card.Subtitle>
    //             <Card.Text>{blog.contenu}</Card.Text>
                
    //             <Link to={`/blog/${blog.id}`}>Lire la suite</Link>
    //           </Card.Body>
    //           <ListGroup variant="flush">
    //             {blog.tags.map(tag => (
    //               <ListGroup.Item key={tag}>{tag}</ListGroup.Item>
    //             ))}
    //           </ListGroup>
    //         </Card>
           
    //          <Link className='btn btn-success mt-1' to={`/update/${blog.id}`}>Modifier</Link>
    //         <button className='btn btn-danger mx-2 mt-1' onClick={()=>deleteData(blog.id)}>Supprimer</button>
           
    //       </Col>
    //     ))}
    //   </Row>
     
    // </Container>
    <div className="container mt-3">
      <Link className='btn btn-primary mt-3' to="/add">Ajouter</Link>
      <ListGroup className='mt-3'>
        {blogs.map(blog => (
          <ListGroup.Item key={blog.id}>
            <Card>
              <Card.Body className='mt-3'>
                <Card.Title> <small>Titre : </small> {blog.titre}</Card.Title>
                <Card.Title> <small> Auteur : </small> <strong>{blog.auteur} </strong> </Card.Title>
                <Card.Text>{blog.preview}</Card.Text>
                <Link className='btn btn-primary' to={`/blog/${blog.id}`}>Lire la suite...</Link>
                <Link className='btn btn-success mx-2' to={`/update/${blog.id}`}>Modifier</Link>
                <button className='btn btn-danger mx-1' onClick={()=>deleteData(blog.id)}>Supprimer</button>
              </Card.Body>
              
            </Card>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Blog;