/* eslint-disable max-lines */
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
import superstar from '../../img/superstar.jpg';
import tapSeries from '../../img/tap-series.png';

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
    <div
      style={{
        marginBottom: 40
      }}
      className="experience-container">

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
                        marginRight: 70
                      }}>2020/07 ~ now
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
                            }}>2020/07 ~ now
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
                      Anchor Ticketing platform
                    </Typography>
                    {isMobile ?
                      <div>
                        {/* eslint-disable-next-line max-len */}
                        {' Anchor services include payment processing, guest check-in, fraud protection, and support worldwide'}
                      </div> :

                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {' Anchor services include payment processing, guest check-in, fraud protection, and support worldwide'}
                      </div>
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                isMobile ? <div/> :
                  <div>
                    <Typography
                      variant="h6"
                      style={{
                        marginRight: 40
                      }}>2019/05 ~ 2019/08
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
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={tapSeries} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>Tap Series</b>
                    {isMobile &&
                                  <div>
                                    <Typography
                                      variant="body"
                                      style={{
                                        marginRight: 40
                                      }}>2019/05 ~ 2019/08
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
                                  TAP Series Food Safety Training System
                    </Typography>

                    {isMobile ?
                      <div >
                        {/* eslint-disable-next-line max-len */}
                        {' With over a million trained individuals around the world, the TAP Series leads the industry in online classes and Cloud solutions'}

                      </div> :
                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {' With over a million trained individuals around the world, the TAP Series leads the industry in online classes and Cloud solutions'}
                      </div>
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                isMobile ? <div/> :
                  <div>
                    <Typography
                      variant="h6"
                      style={{
                        marginRight: 40
                      }}>2018/05 ~ 2018/12
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
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={superstar} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>Chao Xing</b>
                    {isMobile &&
                                  <div>
                                    <Typography
                                      variant="body"
                                      style={{
                                        marginRight: 40
                                      }}>2018/05 ~ 2018/12
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
                                  Chao Xing University Management System
                    </Typography>
                    {isMobile ?
                      <div>
                        {/* eslint-disable-next-line max-len */}
                        {' ChaoXing University System provided management systems for more than 20 universities to help universities manage better'}
                      </div> :
                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {' ChaoXing University System provided management systems for more than 20 universities to help universities manage better'}
                      </div>
                    }
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
