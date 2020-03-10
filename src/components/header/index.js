/**
 * External dependencies
 */
import React, { Component, Fragment } from 'react';

class Header extends Component {

	render() {
		return (
      <Fragment>
        <header className="bg-white border-b border-gray-200">
          <nav class="flex items-center justify-between flex-wrap p-6 max-w-screen-xl w-full mx-auto">
            <div class="flex items-center flex-shrink-0 text-blue-900 mr-6">
              <a href="" class="font-semibold text-xl tracking-tight">
                Copy Gradients
              </a>
            </div>
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500 mr-4"
                >
                  Docs
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500 mr-4"
                >
                  Examples
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500"
                >
                  Blog
                </a>
              </div>
              <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    );
	}
}

export default Header;
