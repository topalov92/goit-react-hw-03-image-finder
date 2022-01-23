import React from 'react';

import { Overlay, ModalContainer } from './Modal.styles';

export class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalContainer>{this.props.children}</ModalContainer>
            </Overlay>
        );
    }
}
