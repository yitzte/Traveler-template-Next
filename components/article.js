import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Article = (props) => {
  return (
    <>
      <div className={`article-article ${props.rootClassName} `}>
        <img alt="image" src={props.image} className="article-image" />
        <div className="article-content">
          <div className="article-heading">
            <h2 className="article-header">{props.header}</h2>
            <p className="article-description">{props.description}</p>
          </div>
          <button className="button-arrow button">
            <span className="article-text1">Read more</span>
            <span className="article-text2">&gt;</span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .article-article {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 500px;
            align-items: center;
            flex-direction: column;
          }
          .article-image {
            width: 100%;
            height: 375px;
            object-fit: cover;
          }
          .article-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .article-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .article-header {
            color: rgb(53, 43, 42);
            width: 100%;
            font-size: 40px;
            max-width: 800px;
            font-style: normal;
            font-family: Cormorant Infant;
            font-weight: 600;
            line-height: 60px;
          }
          .article-description {
            color: rgb(53, 43, 42);
            max-width: 800px;
            font-family: Lora;
            line-height: 24px;
          }
          .article-text1 {
            font-style: normal;
            font-weight: 500;
          }
          .article-text2 {
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 767px) {
            .article-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .article-header {
              font-size: 32px;
              line-height: 38px;
            }
            .article-description {
              font-size: 14px;
              line-height: 21px;
            }
            .articleroot-class-name {
              max-width: 100%;
            }
            .articleroot-class-name1 {
              max-width: 100%;
            }
            .articleroot-class-name2 {
              max-width: 100%;
            }
            .articleroot-class-name3 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Article.defaultProps = {
  rootClassName: '',
  image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  header: 'Understand your customers',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default Article
