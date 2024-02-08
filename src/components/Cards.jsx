import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

// Card conponment, can display in repo page
// Contains title, lang, desc and link 
const Cards = ({ data }) => {
   return (
    <Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.language}
        </Typography>
        <Typography variant="body2">
          {data.description}
        </Typography>

        <Link href={data.html_url} sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          maxWidth: '100%', 
          verticalAlign: 'middle'
        }} >
          <Typography variant="body2">
         {data.html_url}
        </Typography>
        </Link>
      </CardContent>
    </Card>
    );
}
export default Cards;
