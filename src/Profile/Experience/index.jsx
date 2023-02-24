import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent } from '@mui/material';
import hornblower from '../../img/hornblower.jpeg';

const header = {
  backgroundColor: 'black',
  padding: 20,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white'
};

export default function Experience({ isMobile }) {
  return (
    <div className="experience-container">

      <Card>

        <div style={header}>
          <Typography variant="h6">
                        Experience
          </Typography>
        </div>

        <CardContent>
          <List sx={{
            width: isMobile ? '350px' : '1000px',
            bgcolor: 'background.paper',
            marginBottom: '40px',
            borderRadius: '10PX'
          }}>
            <ListItem
              secondaryAction={
                isMobile ? <div/> :
                  <div>
                    <Typography
                      variant="h6"
                      style={{
                        marginRight: 40
                      }}>2020/7 ~ now
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        marginRight: 40
                      }}>
                      <Button>KNOW MORE</Button>
                    </Typography>
                  </div>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={hornblower} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>Hornblower - Encore</b>
                    {isMobile &&
                        <div>
                          <Typography
                            variant="body"
                            style={{
                              marginRight: 40
                            }}>2020/7 ~ now
                            <Button>KNOW MORE</Button>
                          </Typography>
                        </div>
                    }
                  </div>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body1"
                      color="text.primary"
                    >
                      Anchor Ticketing platform -
                    </Typography>
                    {/* eslint-disable-next-line max-len */}
                    {' Anchor services include payment processing, guest check-in, fraud protection, and support worldwide'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                                            to Scott, Alex, Jennifer
                    </Typography>
                    {' — Wish I could come, but I\'m out of town this…'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                                            Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </CardContent>

      </Card>

    </div>

  );
}
