/**
 * External dependencies
 */
import React, { Component, Fragment } from 'react';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer
          className="bg-black border-b border-gray-200 w-full py-10"
          style={{
            backgroundImage:
              'linear-gradient(165deg, rgb(21, 26, 35) 85%, rgb(255, 216, 151) 85%)'
          }}
        >
          <div className="max-w-screen-xl w-full mx-auto">
            <h2 className="text-5xl font-bold text-white">About</h2>
            <p className="text-white text-xl py-5">
              CopyGlyphs is a simple online tool that helps you easily copy any
              special characters and symbols (also known as glyphs) then paste
              them to any document or app that you are using.
            </p>
            <h2 className="text-5xl font-bold text-white pt-10">
              Using WordPress?
            </h2>
            <p className="text-white text-xl py-5">
              CopyGlyphs is a simple online tool that helps you easily copy any
              special characters and symbols (also known as glyphs) then paste
              them to any document or app that you are using.
            </p>
            <p className="text-white text-xl py-5">
              Made by{' '}
              <a href="https://twitter.com/phpbits" className="underline">
                Jeffrey Carandang↗
              </a>{' '}
              - creator of EditorsKit plugin for WordPress.
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
