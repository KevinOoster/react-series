import * as React from 'react';
import { Card, Grid } from '@material-ui/core';
import './AccommodationCard.css';

import { HouseIcon } from '../../resources/HouseIcon';

export default class AccommodationCard extends React.Component {
  state = { ...this.props.accommodation };

  toggleFavorite = () => {
    this.setState(state => ({ favorite: !state.favorite }));
  };

  render() {
    const { image, name, location, favorite, description } = this.state;

    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Card className="accommodation-card">
          <header>
            <img className="preview" src={image} alt="img of accomodation" />
          </header>
          <main>
            <h2>{name}</h2>
            <div className="sub-header">{location}</div>
            <p>{description}</p>
          </main>
          <footer>
            <HouseIcon
              onClick={this.toggleFavorite}
              className={
                favorite ? 'heart-icon heart-icon-favorite' : 'heart-icon'
              }
            />
          </footer>
        </Card>
      </Grid>
    );
  }
}
