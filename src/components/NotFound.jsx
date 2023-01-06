import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";

// import { Illustration } from './Illustration';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: "relative",
  },

  content: {
    paddingTop: 220,
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Abel, sans-serif, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export function NothingFoundBackground() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        {/* <Illustration className={classes.image} /> */}
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL
          </Text>
          <Group position="center">
            <a href="/">
              <Button size="md" style={{ backgroundColor: "#88AABF" }}>
                Take me back to home page
              </Button>
            </a>
          </Group>
        </div>
      </div>
    </Container>
  );
}
