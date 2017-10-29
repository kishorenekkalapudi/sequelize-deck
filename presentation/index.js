import React from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  S
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  obama: require("../assets/obama.jpg"),
  seq: require("../assets/seq-logo.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "lavender",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  state = {
    steps: 0
  };

  updateSteps = steps => {
    if (this.state.steps !== steps) {
      // eslint-disable-line no-invalid-this
      this.setState({ steps }); // eslint-disable-line no-invalid-this
    }
  };

  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["fade"]} bgColor="white" bgImage={images.seq.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Sequelize
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" bgColor="#68aac7" size={1} fit bold>
            Sequelize is a promise-based ORM
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is ORM
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={4} bold>
            ORM (Object Relational Mapping)
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={4} bold>
            ORMs provide a high-level abstraction upon a relational database that allows a developer
            to write code instead of SQL
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Using SQL
          </Heading>
          <CodePane
            lang="sql"
            source={require("raw-loader!../assets/using-sql")}
            style={{ fontSize: "0.6em" }}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Using Sequelize
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/using-seq")}
            style={{ fontSize: "0.6em" }}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={["fade", "spin"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Ready to see more Sequelize
          </Heading>
        </Slide>

        <Slide
          transition={["fade", "spin"]}
          bgColor="primary"
          bgImage={images.obama.replace("/", "")}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code-example")}
          style={{ fontSize: "0.6em" }}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [2, 3], note: "import sequelize" },
            { loc: [4, 15], note: "connect to the database and configure sequelize" },
            { loc: [16, 25], note: "notify about connection status" },
            { loc: [26, 34], note: "create models" },
            { loc: [35, 55] },
            { loc: [56, 64], note: "helper functions" },
            { loc: [65, 78], note: "create records function part1" },
            { loc: [88, 101], note: "create records function part2" },
            { loc: [102, 107], note: "findTeams()" },
            { loc: [108, 115], note: "findTeamsWithCoach()" },
            { loc: [116, 124], note: "findTeamsWithCoachAndPlayers()" },
            { loc: [125, 136], note: "findTeamsWithDeepAssociations()" },
            { loc: [137, 142], note: "findPlayers()" },
            { loc: [143, 151], note: "findPlayersWithTeam()" },
            { loc: [152, 160], note: "findPlayersWithTeamAndSponsors()" },
            { loc: [161, 171], note: "promises, promises..." },
            { loc: [171, 172], note: "the end" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} caps fit lineHeight={1.5} textColor="primary">
            Made with ❤️ in San Bruno
          </Heading>
          <Heading size={2} caps fit lineHeight={1.5} textColor="primary">
            Walmart Creative Dev Team
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
