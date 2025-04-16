import {useMemo} from "react";
import {Box, LoadingOverlay} from "@mantine/core";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";;
import {BespokeRendererStaticProps, BespokeRendererStaticPaths, dbApiFactory, getDB} from "@datawheel/bespoke/server";
import {BespokeRenderer} from "@datawheel/bespoke/report";
import {storeWrapper} from "@datawheel/bespoke/store";
import {NextSeo} from "next-seo";
import TileWrapper from "../../components/tiles/TileWrapper";

function ReportPage(props) {

  const bespokeStyles = useMemo(
    () => ({
      components: {
        ReportTile: TileWrapper,
      },
      Section: {
        root: (theme, {position}) => {
          const styles = {
            sticky: {
              // nav styles
              top: "var(--navbar-height)",
              border: "none",
              padding: 0,
              margin: 0,
              boxShadow: theme.shadows.md,
              backgroundColor: theme.colors["cotec-primary-bg"],
              zIndex: 10,
              "& a": {
                fontSize: theme.spacing.sm,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "none",
                },
              },
            },
            none: {
              
            },
          };
          return styles[position] ? styles[position] : {};
        },

        container: (theme, {width, position}) => {
          const styles = {
            full: {
              normal: {
                "& .bespoke-section-content":{
                  gap: "3rem",
                  [theme.fn.smallerThan("md")]: {
                    gap: "2rem"
                  },
                  [theme.fn.smallerThan("sm")]: {
                    gap: "1rem"
                  }
                },
                "& .bespoke-section-col": {
                  "& .bespoke-visualization-wrapper": {
                    marginTop: "3rem",
                  },
                  minWidth: 0,
                  [theme.fn.smallerThan("md")]: {
                    maxWidth: "auto",
                    marginTop: "0rem",
                    "& .bespoke-Block-wrapper": {
                      width: "100%"
                    }
                  },
                  "& .bespoke-Block-wrapper:has(h2)": {
                    margin: "3rem 0 0 0",
                    paddingBottom: 0
                  },
                  "& .bespoke-Block-wrapper:has(div[id^='bespoke-subtitle-'])": {
                    margin: 0,
                    padding: "0 auto",
                    textAlign: "center"
                  },                
                  "& .mantine-Group-root": {
                    //justifyContent: "center",
                    //gap: "0px",
                    "& h3.mantine-Text-root": {
                      color: theme.colors["cotec-accent"],
                      letterSpacing: "0.2rem",
                      //padding: "0.5em",
                      //textAlign: "center",
                    },
                    "&:has(h2)": {
                      justifyContent: "center",
                    },
                    "& .mantine-Group-root:has(h2)": {
                      flexDirection: "column",
                      gap: ".5rem",
                    },
                  },
                  "& div[id^='bespoke-stat-']": {
                    paddingRight: "1rem",
                    "div.mantine-Text-root": {
                      "&:nth-of-type(1)": {
                        lineHeight: "1.4rem",
                        fontSize: "0.9rem",
                        textTransform :"uppercase",
                        "p": {
                          margin: "0.1rem 0"
                        }
                      },
                      "&:nth-of-type(2)": {
                        fontSize: "1.5rem",
                        fontWeight: 700
                      },
                      "&:nth-of-type(3)": {
                        lineHeight: "1.4rem",
                        fontSize: "0.9rem",
                        color: theme.colors["cotec-accent"],
                        "p": {
                          margin: "0.1rem 0"
                        }
                      },
                    }
                  }
                },
                // Splashs
                /* "&.bespoke-Section-1, &.bespoke-Section-3, &.bespoke-Section-60, &.bespoke-Section-84": {
                  padding: "8rem 5rem",
                  [theme.fn.smallerThan("lg")]: {
                    padding: "8rem 3rem",
                  },
                  [theme.fn.smallerThan("md")]: {
                    padding: "5rem 2rem",
                  },
                  [theme.fn.smallerThan("sm")]: {
                    padding: "2rem 1rem",
                  },
                  "& .bespoke-section-content": {
                    "& .bespoke-section-col": {
                      
                      "&:nth-of-type(1)": {
                        backgroundColor: "red"
                      },
                      "&:nth-of-type(2)": {
                        backgroundColor: "green"
                      },
                      [theme.fn.smallerThan("md")]: {
                        minWidth: 0,
                      },
                    },  
                  },
                  "& .bespoke-title-wrapper": {
                    padding: "2rem 0 2rem 0",
                    "& .mantine-Group-root .mantine-Group-root": {
                      flexWrap: "nowrap",
                      "h1":{
                        padding: "1rem 0 1rem 0",
                        fontWeight: 500
                      },
                      [theme.fn.smallerThan("sm")]: {
                        flexWrap: "wrap",
                      },
                    }
                  },
   
                  ".mantine-ActionIcon-root": {
                    backgroundColor: theme.colors.black,
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    transition: "background-color .4s ease-in-out",
                    flex: "0 0 50px",
                    "& svg": {
                      stroke: theme.colors["cotec-accent"],
                      transition: "stroke .4s ease-in-out",
                    },
                    "&:hover": {
                      backgroundColor: theme.colors.white,
                      "& svg": {
                        stroke: theme.colors.black,
                      },
                    }
                  },
                  "div[id^='bespoke-subtitle-']:nth-of-type(1)": {
                    textAlign: "left",
                    marginBottom: "4rem",
                    color: theme.colors.white,
                    textTransform :"uppercase",
                    "a": {
                      color: theme.colors.white,
                      transition: "color .4s ease-in-out",
                      "&:hover": {
                        color: theme.colors["cotec-accent"],
                      }
                    }
                  },
                  "& div[id^='bespoke-stat-']": {
                    paddingRight: "1rem",
                    ".mantine-Group-root:first-of-type": {
                      flexWrap: "noWrap",
                    },
                    "div.mantine-Text-root": {
                      "&:nth-of-type(1)": {
                        lineHeight: "1.4rem",
                        fontSize: "0.9rem",
                        textTransform :"uppercase",
                        "p": {
                          margin: "0.1rem 0"
                        }
                      },
                      "&:nth-of-type(2)": {
                        fontSize: "1.5rem",
                        fontWeight: 700
                      },
                      "&:nth-of-type(3)": {
                        lineHeight: "1.4rem",
                        fontSize: "0.9rem",
                        color: theme.colors["cotec-accent"],
                        "p": {
                          margin: "0.1rem 0"
                        }
                      },
                    }
                  }
                  background: "none",
                  padding: "100px",
                  "& .bespoke-section-col": {
                    padding: "2rem",
                    background: "none",
                    "& .mantine-Group-root": {
                      justifyContent: "flex-start",
                      gap: "1rem",
                      "& .mantine-Title-root": {
                        width: "auto",
                        background: "none",
                        padding: 0,
                        margin: 0,
                      },
                    },
                  },
                }, */
              },
              sticky: {
                padding: "0px",
                borderBottom: `1px solid #444`,
                "& .bespoke-nav-wrapper": {
                  paddingBottom: 0,
                },
                "& .bespoke-title-wrapper": {
                  paddingTop: 0,
                  paddingBottom: "5px",
                  minWidth: "0px !important",
                  [theme.fn.smallerThan("md")]: {
                    padding: "3px !important",
                  },
                },
                "& .mantine-Text-root": {
                  fontSize: "1.1rem",
                  textTransform: "uppercase"
                },
                "& h5.mantine-Text-root": {
                  fontSize: "1.1rem",
                  marginLeft: "10px !important",
                  [theme.fn.smallerThan("md")]: {
                    marginLeft: "5px !important",
                  },
                },
                "& h6.mantine-Text-root": {
                  fontSize: "0.9rem",
                  marginLeft: "10px !important",
                  "& a": {
                    textDecoration: "underline",
                    fontSize: "0.9rem",
                  },
                  [theme.fn.smallerThan("md")]: {
                    display: "none",
                  },
                }
              },
            },
            center: {
              normal: {
                "& .bespoke-section-col": {
                  minWidth: 0,
                  paddingTop: "50px",
                  "& h3.mantine-Text-root": {
                    color: theme.colors["cotec-accent"],
                    fontWeight: "normal",
                    letterSpacing: "0.2rem",
                    //padding: "0.5em",
                    //textAlign: "center",
                  }
                },
              },
              sticky: {

              },
            },
          };
          // example splash
          return styles[width] && styles[width][position] ? styles[width][position] : {};
        },

        content: (theme, {style}) => {
          const styles = {
            none: {
              color: theme.colors["cotec-primary-text"],
            },
            card: {
              color: theme.colors.black,
              padding: theme.spacing.xl,
            },
          };
          return styles[style] ? styles[style] : {};
        },
      },
    }),
    [],
  );

  const translations = useMemo(
    () => ({
      options: {
          "download_title": "Descargar datos",
          "share_title": "Compartir",
          "image_title": "Guardar Imagen",
          "image_tab": {
              "download": "Descargar {imageFormat}",
          }
      },
      explore: {
          "search": "Busca un reporte",
      },
      sections: {
          "image_by": "imagen por"
      }
    }), []);

  const {profileProps} = props;
  const {content_id, name} = profileProps;

  const BASE_URL = new URL(`api/cms/member/image?member=${content_id}&format=thumb`, process.env.NEXT_PUBLIC_BASE_URL);

  const seoConfig = {
    title: name ? `${name}: Exportaciones, importaciones, patrones de comercio y complejidad económica` : undefined,
    description: name ? `Explore las últimas estadísticas de comercio y datos de complejidad económica para ${name}` : undefined,
    openGraph: {
      images: [
        {url: BASE_URL},
      ],
    },
  };

  return (
    <>
      <NextSeo {...seoConfig} />
      <Box mih="100vh" id="Profile">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <BespokeRenderer
          bespokeStyles={bespokeStyles}
          profilePrefix="/report"
          translations={translations}
          loader={<LoadingOverlay className="report-bespoke-loader" visible/>}
          sectionLoader={<LoadingOverlay className="section-bespoke-loader" visible/>}
          {...props} 
        />
      </Box>
    </>
  );
}

/* export const getStaticPaths = async () => {
  const db = await getDB();
  const geoProfiles = dbApiFactory(db).searchMember({
    query: "",
    limit: 100000,
    format: "plain",
    locale: "es",
    noImage: false,
    visible: true,
    report: [],
    dimension: [1,2,4],
    variant: [],
    includes: true,
  });

  const productProfiles = [4,5,6,7].map((variantId) => dbApiFactory(db).searchMember({
    query: "",
    limit: 50,
    format: "plain",
    locale: "es",
    noImage: false,
    visible: true,
    report: [],
    dimension: [3],
    variant: [variantId],
    includes: true,
  }));

  const profiles = await Promise.all([geoProfiles, ...productProfiles ])
    .then(results => {
      // Merge the arrays using Array.concat
      const mergedArray = [].concat(...results.map((res) => res.data.results));
      
      // You can return the merged array or perform further actions
      return mergedArray;
    })
    .catch(error => {
      // Handle errors if any of the promises reject
      console.error('Error:', error);
    });

  console.log("Profiles to create on build:");
  console.table(profiles.map((d) => ({
    dimension: d.dimension.name,
    variant: d.variant.name,
    id: d.id,
    slug: `/${d.variant.slug}/${d.slug}`
  }))// Sorting by city and then by name
  .sort((a, b) => {
    const dimComparison = a.dimension.localeCompare(b.dimension);
    if (dimComparison !== 0) {
      return dimComparison;
    }
    return a.variant.localeCompare(b.variant);
  }));

  const paths = profiles
    .map((item) => ({
      params: {
        bespoke: [item.variant.slug, item.slug],
      },
    }));

  return {
    fallback: true,
    paths,
  };
};

// export const getStaticPaths = BespokeRendererStaticPaths({limit: 100, fallback:false});
*/ 

export const getStaticProps = async (context) => {
  const {locale = "es"} = context;
  const bespokeProps = await BespokeRendererStaticProps()(context);
  const i18nProps = await serverSideTranslations(locale, ["common"]);
  const profileProps = bespokeProps.props.initialState.status.previews[0];
  return {
    props: {
      ...i18nProps,
      ...bespokeProps.props,
      profileProps
    },
  };
};

export default storeWrapper.withRedux(ReportPage);


export const getStaticPaths = BespokeRendererStaticPaths({limit: 10});

// export const getStaticProps = BespokeRendererStaticProps();
