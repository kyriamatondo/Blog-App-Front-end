import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  
  let navigate = useNavigate()

  const[blog, setBlog]=useState({
    titre:"",
    auteur:"",
    contenu:"",
    
  })

  const{id}=useParams()


  const{titre, auteur, contenu}=blog

  const onInputChange=(e)=>{
    setBlog({...blog, [e.target.name]:e.target.value})
  }


  const Edit=async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:8080/api/blogs/${id}`, blog)
    navigate("/blogs")
    alert("Un blog modifié")
    

}

  useEffect(()=>{
    getData()
  }, [])

  const getData=async()=>{
    let res = await axios.get(`http://localhost:8080/api/blogs/${id}`)
    setBlog(res.data)
  }


  return (
    <Container>
    <h1>Modifier un blog</h1>
    <Form onSubmit={(e)=>Edit(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" name='titre' value={titre}  onChange={(e)=>onInputChange(e)}/>
      <label htmlFor="auteur">Auteur</label>
        <Form.Control type="text" name='auteur' placeholder="Entrer l'auteur" value={auteur}  onChange={(e)=>onInputChange(e)}/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contenu</Form.Label>
        <Form.Control as="textarea" rows="3" name='contenu' value={contenu}  onChange={(e)=>onInputChange(e)} />
      </Form.Group>
      <Button className='mt-3' variant="primary" type="submit">
        Modifier
      </Button>
    </Form>
  </Container>
  );
};

export default Update;