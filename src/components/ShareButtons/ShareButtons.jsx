import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareButtons = ({ article }) => {
  return (
    <>
      {" "}
      <RedditShareButton
        url={article.web_url + " Shared from: https://euriskomobility.com/"}
        quote={"Eurisko News"}
      >
        <RedditIcon size={25} round />
      </RedditShareButton>
      <LinkedinShareButton
        url={article.web_url + " Shared from: https://euriskomobility.com/"}
        quote={"Eurisko News"}
      >
        <LinkedinIcon size={25} round />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={article.web_url + " Shared from: https://euriskomobility.com/"}
        quote={"Eurisko News"}
      >
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>
    </>
  );
};

export default ShareButtons;
