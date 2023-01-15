import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Read = () => {

  const[blogs, setBlogs]=useState([])

  const{id}=useParams()

 
  const getData=async()=>{
    let res = await axios.get(`http://localhost:8080/api/blogs/${id}`)
    setBlogs(res.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
        {
          <Col key={blogs.id} >
            <Card className="mt-3">
              <Card.Body>
        
                <Card.Title>{blogs.titre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blogs.auteur}
                </Card.Subtitle>
                <Card.Text>{blogs.contenu}</Card.Text>
              </Card.Body>
             
            </Card>
            <Link className='btn btn-primary mt-3' to="/blogs">Back to home</Link>
            
           
          </Col>
        }
      </Row>
      
    </Container>
  );
};

export default Read;