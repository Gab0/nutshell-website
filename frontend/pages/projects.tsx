import {Layout} from "../components/layout/Layout";
import { parse } from 'yaml';

import styles from '../styles/Projects.module.css';

import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';

export default function Project() {

  //const cardsData = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));

  const cardsData = [
    { title: 'japonicus',
      content: 'A genetic algorithm system developed to evolve crypto trading bot strategies.',
      image: 'japonicus.png',
      github: 'https://github.com/gab0/japonicus'
    },
    { title: 'autoGromacs',
      content: 'A pipeline to coordinate GROMACS molecular dynamics runs and analyze mutation effects on protein structures.',
      image: 'auto-gromacs.png',
      github: 'https://github.com/gab0/auto-gromacs'
    },
    { title: 'Lampreia Engine',
      content: 'A relatively fast chess engine written in C with multiple parameters that can be evolved by genetic algorithms.',
      image: 'lampreia-engine.png',
      github: 'https://github.com/Gab0/lampreia-engine',
      description: undefined,
      priority: 10
    },
    { title: 'Hippie Oracle',
      content: 'Gives random places to visit and have fun. Uses the Google Maps Static API to retrieve map snapshots.',
      image: 'hippie-oracle.png',
      github: "https://github.com/Gab0/hippieoracle",
      service: "https://hippie.nutshellbiotech.com/"
    },
    { title: 'Nutshell Biotech Website',
      content: 'This website. It features a cool animation inspired by the "Biomorph" automata described by Richard Dawkins in his book The Blind Watchmaker.',
      image: 'nutshell-biotech.png',
      github: 'https://github.com/Gab0/nutshell-website',
      service: 'https://nutshellbiotech.com/'
    },
    { title: 'Psychological Experiments',
      content: 'A collection of psychological experiments implemented in JavaScript. It includes the Hanoi Tower, the Balloon Analogue Risk Task, and others.',
      image: 'psychological-experiments.png',
      github: 'https://github.com/Gab0/psychological-expt',
      service: 'https://psy.nutshellbiotech.com/',
      priority: 20
    },
    { title: 'Methylation Pipeline',
      content: 'A pipeline pull raw methylation data from GEO and analyze it.',
      image: 'methylation-pipeline.png',
      priority: 5
    },
    { title: 'GPT Podcast Highlights',
      content: 'A system that takes a subtitle file from a podcast and uses an LLM to highlight the most interesting parts.',
      image: 'podcast-highlights.png',
      priority: -5
    }
  ];

  cardsData.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  const element = <Grid container spacing={3} className={styles.projectPanel}>
      {cardsData.map((card, id) => (
        <Grid item key={id} xs={3} sm={6} md={3} lg={3}>
          <Card className={styles.projectCard}>
            <CardContent className={styles.cardContent}>
              <CardMedia
                component="img"
                height="194"
                image={"/project/" + card.image}
                alt={card.image}
                className={styles.projectImage}
              />
        <Typography variant="h5" component="h2" className={styles.cardTitle}>
        {card.title}
        </Typography>
        <Typography color="textSecondary" className={styles.cardText}>
        {card.content}
        </Typography>
        <Typography align="center" className={styles.cardLinkPanel}>
        <IconButton
        href={card.github!}
        disabled={card.github === undefined}
        >
        <GitHubIcon />
        </IconButton>
      <IconButton
       href={card.description!}
       disabled={card.description === undefined}
     >
       <DescriptionTwoToneIcon />
     </IconButton>

     <IconButton
        href={card.service!}
        disabled={card.service === undefined}
     >
      <LiveTvTwoToneIcon />
     </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
  </Grid>

  return (
    <Layout content={element}/>
  );
}
