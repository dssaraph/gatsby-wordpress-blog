import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share'


export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true} iconFillColor={"#86868b"}/>
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon size={32} round={true} iconFillColor={"#86868b"}/>
    </TwitterShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round={true} iconFillColor={"#86868b"}/>
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={32} round={true} iconFillColor={"#86868b"}/>
    </WhatsappShareButton>
  </div>
)

export default ShareButtons