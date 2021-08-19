import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from "swiper/core";
import image1 from "../images/ankit-verma--k8CMLIhG6E-unsplash.jpg";
import image2 from "../images/annie-spratt--9vMBjrU-RA-unsplash.jpg";
import image3 from "../images/bruno-figueiredo-uoteo7uO5OI-unsplash.jpg";
import image4 from "../images/drew-beamer-pY3OMwVxqsk-unsplash.jpg";
import image5 from "../images/jen-theodore-lU_9C2N46X4-unsplash.jpg";
import image6 from "../images/mason-summers-08G6495ONK0-unsplash.jpg";
import image7 from "../images/museums-victoria-eq9Mcakhmug-unsplash.jpg";
import image8 from "../images/yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg";
import image9 from "../images/tim-hufner-9qBSeAN9vps-unsplash.jpg";
import image10 from "../images/tim-hufner-Br7YAeLNmPA-unsplash.jpg";

import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "../swiper.css";
import {
  CardActions,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  imageBar: {
    position: "absolute",
    zIndex: 1000,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.75)",
    transform: "translateY(75%)",
    height: "35%",
    transition: "all 0.5s ease",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  image: {},
  swiperSlideHorizontal: {
    overflow: "hidden",
    "&:hover": {
      "& div": {
        transform: "translateY(0%)",
      },
    },
  },
  icons: {
    fill: "white",
  },
  buttonChevron: {
    marginLeft: "auto",
  },
  title: {
    fontFamily: "Book Antiqua",
  },
}));

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
]);

const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export default function SwipeableMain() {
  const classes = useStyles();
  return (
    <Swiper
      mousewheel={true}
      keyboard={{ enabled: true }}
      direction={"vertical"}
      className="mySwiper swiper-container-h"
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>Vertical Slide 1</SwiperSlide>
      <SwiperSlide>
        <Swiper
          keyboard={{ enabled: true }}
          className="mySwiper2 swiper-container-v"
          loop={true}
          spaceBetween={10}
          effect="coverflow"
          breakpoints={{
            "640": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "768": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            "1024": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {data.map((item: string, idx: number) => (
            <SwiperSlide className={classes.swiperSlideHorizontal} key={idx}>
              <img className={classes.image} src={item} alt="placeholder" />
              <div className={classes.imageBar}>
                <Typography className={classes.title} variant="h4">
                  Movie Title
                </Typography>
                <Typography variant="body1">FIRST | SECOND | THIRD</Typography>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon className={classes.icons} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon className={classes.icons} />
                  </IconButton>
                  <IconButton
                    className={classes.buttonChevron}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon className={classes.icons} />
                  </IconButton>
                </CardActions>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>Horizontal Slide 3</SwiperSlide>
      <SwiperSlide>Horizontal Slide 4</SwiperSlide>
    </Swiper>
  );
}
