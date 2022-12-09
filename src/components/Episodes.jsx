import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import { width } from '@mui/system';

export default function Episodes() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: '100%',bgcolor: '#303030', position: 'relative', overflow: 'auto', maxHeight: '10rem' }}>
      {[0].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={true}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <img
                  alt="IMG"
                  src={'https://sm.ign.com/t/ign_br/video/e/every-time/every-time-r2-d2-saves-the-day_rz4k.640.jpg'}
                  style={{
                    width: '100px'
                  }}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Episódio 1`} className="mx-3"/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}