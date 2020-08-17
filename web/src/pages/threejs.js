import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import BlockContent from "../components/block-content";

export const query = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    mainCube: allSanityExperienceMain {
      edges {
        node {
          name
          _createdAt(formatString: "MMMM DD, YYYY")
          _rawDescription
          categories {
            title
            description
          }
          logo {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
          subItems {
            name
            _rawDescription
            keywords
            logo {
              asset {
                fixed(width: 100) {
                  ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
      }
    }
    subCube: allSanityExperienceSubItem {
      edges {
        node {
          name
        }
      }
    }
  }
`;

const ThreeJsPage = props => {
  const {
    data: { site, mainCube, subCube },
    errors
  } = props;
  console.log(site);
  console.log(mainCube);
  console.log(subCube);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 style={{ fontSize: "60px" }}>Data structure example</h1>
        <h1>Main Cubes</h1>
        {mainCube &&
          mainCube.edges.map(main => (
            <>
              <div key={Math.random()}>
                <h2>TITLE -> {main.node.name}</h2>
                <p>ADDED ON -> {main.node._createdAt}</p>
                <h3>DESCRIPTION:</h3>
                {main.node._rawDescription && (
                  <BlockContent blocks={main.node._rawDescription || []} />
                )}
                {main.node.logo.asset.fluid && (
                  <Img
                    fluid={main.node.logo.asset.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt=""
                  />
                )}
                {main.node.categories &&
                  main.node.categories.map(category => (
                    <>
                      <div>
                        <h4>CATEGORY: {category.title}</h4>
                        <p>CATEGORY DESCRIPTION: {category.description}</p>
                      </div>
                    </>
                  ))}
                {main.node.subItems && (
                  <>
                    <h3>Sub Items:</h3>
                    <ul>
                      {main.node.subItems.map(subItem => (
                        <li key={Math.random()}>
                          <p>TITLE -> {subItem.name}</p>
                          {subItem._rawDescription && (
                            <>
                              <h3>DESCRIPTION:</h3>
                              <BlockContent blocks={subItem._rawDescription || []} />
                            </>
                          )}
                          <Img
                            fixed={subItem.logo.asset.fixed}
                            objectFit="cover"
                            objectPosition="50% 50%"
                            alt=""
                          />
                          {subItem.keywords && (
                            <>
                              <h3>KEYWORDS:</h3>
                              <ul>
                                {subItem.keywords.map(item => (
                                  <li key={Math.random()}>{item}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "black",
                  margin: "150px 0"
                }}
              />
            </>
          ))}
      </Container>
    </Layout>
  );
};

export default ThreeJsPage;
