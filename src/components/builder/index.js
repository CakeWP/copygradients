/**
 * External dependencies
 */
import React, { Component, Fragment } from 'react';
import {
  Modal,
  Button,
//   __experimentalCustomGradientPicker as GradientPicker
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './styles/style.scss';
import GradientPicker from '../gradient-picker';

class GradientBuilder extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: 'linear-gradient(90deg,rgb(0,198,255) 0%,rgb(0,114,255) 100%)'
    };
  }
  render() {
    const { onClose } = this.props;
    return (
      <Fragment>
        <Modal
          className="w-full h-full"
          title="Gradients Builder"
          onRequestClose={onClose}
        >
          <div className="flex flex-wrap h-full w-full">
            <div className="w-3/4 h-full pr-10 gradient-preview">
              <div
                className="h-full w-full"
                style={{ backgroundImage: this.state.value }}
              ></div>
            </div>
            <div className="w-1/4">
              <GradientPicker
                value={this.state.value}
                onChange={newValue => {
                  this.setState({ value: newValue });
                }}
              />
              <p className="text-xs text-gray-500">
                Click on the colorbar to add/edit colors.
              </p>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default GradientBuilder;
