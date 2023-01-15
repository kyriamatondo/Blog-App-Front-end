import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {

  let navigate = useNavigate()


  const[blog, setBlog]=useState({
    titre:"",
    contenu:"",
    auteur:"",
    preview:""
    
  })

  const{titre, contenu, auteur, preview}=blog

  const onInputChange=(e)=>{
    setBlog({...blog, [e.target.name]:e.target.value})
  }

  const addStudent=async(e)=>{
      e.preventDefault()
      await axios.post("http://localhost:8080/api/blogs", blog)
      navigate("/blogs")
    }



  return (
    <Container>
    <h1>Ajouter un nouveau blog</h1>
    <Form onSubmit={(e)=>addStudent(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Entrer le titre" name='titre' value={titre} onChange={(e)=>onInputChange(e)} />
        <Form.Label>Auteur</Form.Label>
        <Form.Control type="text" placeholder="Entrer l'auteur" value={auteur} name='auteur' onChange={(e)=>onInputChange(e)} />
        <Form.Label>Resumé</Form.Label>
        <Form.Control type="text" placeholder="Entrer le resumé" name='preview' value={preview} onChange={(e)=>onInputChange(e)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contenu</Form.Label>
        <Form.Control as="textarea" rows="3" name='contenu' value={contenu} onChange={(e)=>onInputChange(e)} />
      </Form.Group>
      <Button className='mt-3' variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  </Container>
  );
};

export default AddBlog;