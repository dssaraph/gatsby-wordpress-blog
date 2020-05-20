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
      <FacebookIcon size={32} round={true}/>
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon size={32} round={true}/>
    </TwitterShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round={true}/>
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={32} round={true}/>
    </WhatsappShareButton>
  </div>
)

export default ShareButtons