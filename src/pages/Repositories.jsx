import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Cards from "../components/Cards.jsx";

import { Box, Container, Typography, Paper, Link,Grid } from '@mui/material';

const  Repositories = () => {
  // State to store the list of repositories
  const [repositories, setRepositories] = useState([]);
  // State to store loading state
  const [isLoading, setIsLoading] = useState(false);
  // State to store any error
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc', {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          },
        });
        
        if (!response.ok) {
          throw new Error('Something went wrong'); // Throws an error if response is not OK
        }
        const data = await response.json();
        //console.log(data.items)
        setRepositories(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  // When loading
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box style={{ width: "100%" }}>
      <Navbar/>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
              Repositories List
          </Typography>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              {repositories.map((repo,index)=> (
                <Grid item xs={12} sm={6} md={6} lg={3} ml ={2} key = {index}>
                <Cards data = {repo} />
               </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
     </Box>
  );
}

export default Repositories;
