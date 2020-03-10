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
