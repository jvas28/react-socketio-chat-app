import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { string, shape, oneOf, number, arrayOf } from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
  },
});

const dateShape = string;
const rateShape = arrayOf(number);
const completeShape = arrayOf(string);
const mapShape = shape({
  lat: number,
  lng: number,
});

const DateWidget = (props) => {
  const hashMap = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Thuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const { data: date } = props;
  const dates = [];
  const dateObject = new Date(date);
  dateObject.setDate(dateObject.getDate() - 1);
  for (let i = 0; i < 4; i += 1) {
    dateObject.setDate(dateObject.getDate() + 1);
    const dayNumber = dateObject.getDay();
    const baseDayName = hashMap[dayNumber];
    if (dayNumber > 0 && dayNumber < 6) {
      dates.push({ n: dayNumber, name: baseDayName, date: { ...dateObject } });
    } else {
      i -= dayNumber === 0 ? 1 : 2;
    }
  }
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Please choose a date: </Typography>
      {dates.map(({ name }) => (
        <Button variant="outlined">{name}</Button>
      ))}
    </Box>
  );
};
DateWidget.propTypes = {
  data: dateShape.isRequired,
};
const RateWidget = () => (
  <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend">Please, rate our service: </Typography>
    <Rating name="simple-controlled" value={0} />
  </Box>
);
RateWidget.propTypes = {};
const CompleteWidget = () => (
  <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend">Is your requirement complete? </Typography>
    <Button color="primary" variant="outlined">
      Yes
    </Button>
    <Button variant="outlined">No</Button>
  </Box>
);
CompleteWidget.propTypes = {};
const MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_TOKEN;

const MapWidget = (props) => {
  const {
    data: { lat, lng },
  } = props;
  const width = window.innerWidth - 40;
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <img
        alt="map"
        style={{ width: '100%', height: '300px' }}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=${width}x300&key=${MAPS_API_KEY}&markers=${lat},${lng}`}
      />
    </Box>
  );
};
MapWidget.propTypes = {
  data: mapShape.isRequired,
};
const mapWidgets = {
  date: DateWidget,
  map: MapWidget,
  rate: RateWidget,
  complete: CompleteWidget,
};

const Widget = (props) => {
  const { data, type } = props;
  const Component = mapWidgets[type] || null;
  const classes = useStyles();

  return (
    <ListItem>
      <Card className={classes.card}>
        <CardContent>
          <Component data={data} />
        </CardContent>
      </Card>
    </ListItem>
  );
};

Widget.propTypes = {
  type: oneOf(['map', 'rate', 'complete', 'date']).isRequired,
  data: oneOf([dateShape, rateShape, completeShape, mapShape]).isRequired,
};

export default Widget;
