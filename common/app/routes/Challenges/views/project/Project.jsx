import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Col, Image } from 'react-bootstrap';

import SidePanel from './Side-Panel.jsx';
import ToolPanel from './Tool-Panel.jsx';
import HelpModal from '../../Help-Modal.jsx';

import { challengeMetaSelector } from '../../redux';
import { challengeSelector } from '../../../../redux';

const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  (
    {
      id,
      description,
      image
    },
    { title }
  ) => ({
    id,
    image,
    title,
    description
  })
);
const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  image: PropTypes.string,
  isCompleted: PropTypes.bool,
  title: PropTypes.string
};

export class Project extends PureComponent {
  render() {
    const {
      id,
      title,
      image = 'ovKSXMs',
      isCompleted,
      description
    } = this.props;
    const imageURL = 'https://i.imgur.com/' + image + '.png';
    return (
      <Col
        md={ 8 }
        xs={ 12 }
        >
        <SidePanel
          description={ description }
          isCompleted={ isCompleted }
          title={ title }
        />
        <Image
          id={ id }
          responsive={ true }
          src={ imageURL }
        />
        <br />
        <ToolPanel />
        <HelpModal />
      </Col>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(
  mapStateToProps
)(Project);
