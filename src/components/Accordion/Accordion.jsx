
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
  },
  heading: {
    margin: '0px',
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({name, resume}){

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            {resume}
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}