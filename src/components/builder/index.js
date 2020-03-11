/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import FileCopy from '@material-ui/icons/FileCopy';
import {
  Modal,
  ClipboardButton,
  //   __experimentalCustomGradientPicker as GradientPicker
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./styles/style.scss";
import GradientPicker from "../gradient-picker";

class GradientBuilder extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: "linear-gradient(90deg,rgb(0,198,255) 0%,rgb(0,114,255) 100%)"
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
          <div className="flex flex-wrap h-full w-full gradient-builder">
            <div className="w-3/4 h-full pr-10 gradient-preview">
              <div
                className="h-full w-full rounded-md"
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
              <div className="bg-gray-800 py-3 px-4 mt-12 rounded-md text-green-300 text-xs code">
                <span className="text-orange-300 ">
                  {this.state.value.split('(')[0]}
                </span>
                {this.state.value.replace(this.state.value.split('(')[0], '')}
              </div>
              <ClipboardButton
                text={this.state.value}
                onCopy={() => {
                  //   this.setState({
                  //     copied: true,
                  //     date: new Date(),
                  //     message: 'Copied gradient CSS to your clipboard.'
                  //   });
                }}
              >
                <FileCopy
                  className="fill-current w-4 h-4 mr-2"
                  style={{ width: '1rem', height: '1rem' }}
                />
                <span>Copy Gradient</span>
              </ClipboardButton>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default GradientBuilder;
