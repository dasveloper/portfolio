import React, { Component } from "react";
import LazyLoad from 'react-lazyload';

//Mailslot
import Mailslot from "../assets/images/mailslot-desktop.png";
import MailslotLogo from "../assets/images/mailslot-logo.png";
//Wedcast
import Wedcast from "../assets/images/wedcast-both.png";
import WedcastLogo from "../assets/images/wedcast-logo.png";

//Learning Leathercraft
import LearningLeathercraft from "../assets/images/learning-leathercraft-desktop.png";
import LearningLeathercraftLogo from "../assets/images/learning-leathercraft-logo.png";

//Beard Sumo
import BeardSumo from "../assets/images/beard-sumo-desktop.png";
import BeardSumoLogo from "../assets/images/beard-sumo-logo.png";

//Sprout
import Sprout from "../assets/images/sprout-desktop.png";
import SproutLogo from "../assets/images/sprout-logo.png";

//Slimage
import Slimage from "../assets/images/slimage-desktop.png";
import SlimageLogo from "../assets/images/slimage-logo.png";

//BoldBark
import BoldBark from "../assets/images/boldbark-desktop.png";
import BoldBarkLogo from "../assets/images/boldbark-logo.png";

//Deetz
import Deetz from "../assets/images/deetz-desktop.png";
import DeetzLogo from "../assets/images/deetz-logo.png";

//CORD
import Cord from "../assets/images/cord-desktop.png";
import CordLogo from "../assets/images/cord-logo.png";

//Wishwatch
import WishWatch from "../assets/images/wishwatch-desktop.png";
import WishWatchLogo from "../assets/images/wishwatch-logo.png";

//RYBomb
import RYBomb from "../assets/images/rybomb-mobile.png";
import RYBombLogo from "../assets/images/rybomb-logo.jpg";

//RYBomb
import NewBrew from "../assets/images/newbrew-mobile.png";
import NewBrewLogo from "../assets/images/newbrew-logo.png";

//import ToiletTarget from "../assets/images/toilet-target-desktop.png";

import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    name: "Mailslot",
    image: Mailslot,
    logo: MailslotLogo,
    color: "#6003f7",
    tags: ["In Production", "React", "Mongo", "Node", "SCSS", "AWS", "SAAS"],
    link: "https://mailslot.herokuapp.com/",
    git: "https://github.com/dasveloper/mailslot-ducks",
    description:
      "Email marketing is vital for every online business. Incentivize email sign ups by giving away free digital products in exchange for email addresses. With mailslot you can quickkly and easily upload digital products, set up customizable landing pages, and track email subscriptions."
  }, 

  {
    name: "Wedcast",
    image: Wedcast,
    logo: WedcastLogo,
    color: "#88e5d3",
    tags: [
      "On Hold",
      "React Native",
      "React",
      "Mobile App",
      "Firebase",
      "AWS",
      "SCSS",
      "Illustrator"
    ],
    link: "https://wedcast.herokuapp.com/",
    git: "https://github.com/dasveloper/wedcast-refactor",
    description:
      "Wedcast is a photo sharing app designed to make your special day even more special by putting your guests in charge of the photography. Easily sign guests in with just a name, instatnly share photos with all of your friends and family, and easily download all of your photos when you are done."
  },
  {
    name: "Beard Sumo",
    image: BeardSumo,
    logo: BeardSumoLogo,
    color: "#fdd30f",
    tags: [
      "Discontinued",
      "Shopify",
      "Physical Product",
      "Photography",
      "SCSS",
      "jQuery",
      "Illustrator",
      "Photoshop"
    ],
    git: "https://github.com/dasveloper/beardsumo",
    description:
      "Beard Sumo supplies men around the world with premium beard oils and balms. Beard Sumo stands above the competition with fair prices, fast shipping, a variety of scents, and all natural ingredients."
  },
  {
    name: "WishWatch",
    image: WishWatch,
    logo: WishWatchLogo,
    color: "#6f438f",
    link: "https://wishwatch.herokuapp.com/",
    git: "https://github.com/dasveloper/WishWatch",
    tags: [
      "On Hold",
      "React",
      "Node",
      "Postgres",
      "SAAS",
      "AWS",
      "SCSS",
      "Illustrator"
    ],
    description:
      "WishWatch is a SAAS wishlist platform for eCommerce businesses. Allow you customers to save your products for future purchase reducing abandonment, in turn customers will recieve automatic updates on price drops and deals."
  },
  {
    name: "Sprout",
    image: Sprout,
    logo: SproutLogo,
    color: "#68ddc4",
    link: "https://sprout-app.herokuapp.com",
    git: "https://github.com/dasveloper/sprout",
    tags: ["On Hold", "React", "Node", "SCSS", "Illustrator", "Photoshop"],
    description:
      "Raising a kid is expensive, averaging over $200,000. Sprout is a crowdfunding platform aimed at expecting parents that allows friends and family to contribute to goals you set up."
  },
  {
    name: "Learning Leathercraft",
    image: LearningLeathercraft,
    logo: LearningLeathercraftLogo,
    color: "#de001d",
    link: "https://www.learningleathercraft.com",
    git: "https://github.com/dasveloper/learning-leathercraft",
    tags: ["In Production", "React", "GatsbyJS", "Photography"],
    description:
      "Learning Leathercraft is a blog focusing on the art of leathercrafting to help beginners learn more about the craft. Learning Leathercraft features articles on the industry, beginner tutorials, patterns, and project showcases."
  },

  {
    name: "Deetz",
    image: Deetz,
    logo: DeetzLogo,
    color: "#52aca8",
    link: "https://deetz.herokuapp.com/",
    git: "https://github.com/dasveloper/deetz",
    tags: ["In Production", "React", "Node", "Mongo", "SCSS"],
    description:
      "Deetz allows users to collect names, emails, addresses, and phone number from anyone with a shareable link. With a quick setup, zero cost, and intuitive interface, Deetz is a must have when it comes to collecting contacts."
  },
  {
    name: "CORD",
    image: Cord,
    logo: CordLogo,
    color: "#f8f8f8",
    link: "https://www.kickstarter.com/projects/519083647/cord-knives",
    tags: [
      "Discontinued",
      "Physical Product",
      "Photography",
      "Photoshop",
      "Illustrator"
    ],
    description:
      "CORD is a series of high quality, customizable, minimalistic knives. Made from 1095 high carbon steel in two colors and lengths, and wrapped in high-quality 550 paracord in over fifty colors, you can truly make your CORD your own."
  },

  {
    name: "Slimage",
    image: Slimage,
    logo: SlimageLogo,
    color: "#45267d",
    link: "https://slimage-web.herokuapp.com/",
    git: "https://github.com/dasveloper/Slimage",
    tags: ["Discontinued", "PHP", "MySql", "jQuery", "SAAS", "AWS"],
    description:
      "Slimage is an image optimization SAAS that automatically implements lazy loading, compression, CDN distribution, and caching for all of your images. Simply upload your images and load the script on your site and the rest is done for you."
  },
  {
    name: "Bold Bark",
    image: BoldBark,
    logo: BoldBarkLogo,
    color: "#e5693f",
    tags: [
      "Discontinued",
      "Shopify",
      "Illustrator",
      "SCSS",
      "Physical Product",
      "jQuery"
    ],
    description:
      "Bold Bark is an eCommerce store selling durable and colorufl dog collars and leashes worldwide. Bold Bark was sold in 2018."
  },
  {
    name: "RYBomb",
    image: RYBomb,
    logo: RYBombLogo,
    color: "#f8f8f8",
    tags: ["Discontinued", "Phonegap", "Mobile App", "jQuery"],
    link: "https://itunes.apple.com/us/app/rybomb/id1192726355",
    description:
      "RYBomb is cross-platform mobile game where you mix and match colors to combine them into new colors, keep mixing before you run out of room and collect powerful boosts along the way."
  },
  {
    name: "NewBrew",
    image: NewBrew,
    logo: NewBrewLogo,
    color: "#f5b840",
    tags: ["Discontinued", "React Native", "Mobile App", "Firebase"],
    git: "https://github.com/dasveloper/NewBrew",
    description: "NewBrew is an app designed to connect breweries to beer lovers. When a brewery releases a new beer, the brewmasters can upload it's details to NewBrew and push notifications are automatically sent to all subscribers."
  }
  // {
  //   name: "Toilet Target Stickers",
  //   image: ToiletTarget,
  //   color: "#e64a33"
  // },
];

class ProjectList extends Component {
  render() {
    const { activeFilters } = this.props;
    return (
      <div className="project-list">
        <div className="project-list-inner">
          {projects.map(function(project, i) {
            return (
              activeFilters.every(r => project.tags.indexOf(r) >= 0) && (
                <div key={i} className="project">
                  <div className="project-description-wrapper">
                    <div className="project-description-header">
                      <div
                        style={{ backgroundColor: project.color }}
                        className="project-logo"
                      >
                        <img alt={`${project.name} logo `} src={project.logo} />
                      </div>
                      <h3 className="project-title">{project.name}</h3>
                    </div>
                    <div className="project-tags">
                      {project.tags.map(function(tag, i) {
                        return <div key={i} className="project-tag">{tag}</div>;
                      })}
                    </div>
                    <p className="project-description">
                      {project.description ||
                        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"}
                    </p>
                    <div className="project-button-wrapper">
                      {project.link && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.link}
                          className="project-button website"
                        >
                          <FaLink className="project-button-icon" />
                          Website
                        </a>
                      )}
                      {project.git && (
                        <a href={project.git} className="project-button github">
                          <FaGithub className="project-button-icon" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: project.color }}
                    className="project-image-wrapper"
                  >
                  <LazyLoad offset={100}>
                    <img alt={`${project.name} screenshot`}className="project-image" src={project.image} />
                    </LazyLoad>

                  </div>
                  <hr />
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;