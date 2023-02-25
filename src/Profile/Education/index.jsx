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
import cut from '../../img/cut.png';
import clu from '../../img/clu.jpg';
import zqsz from '../../img/zqsz.jpg';

const header = {
  backgroundColor: 'black',
  padding: 20,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white'
};

export default function Education({ isMobile }) {
  return (
    <div className="experience-container">

      <Card>

        <div style={header}>
          <Typography variant="h6">
                        Education
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
                      }}>2017/12 ~ 2020/05
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
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={clu} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>California Lutheran University</b>
                    {isMobile &&
                                            <div>
                                              <Typography
                                                variant="body"
                                                style={{
                                                  marginRight: 40
                                                }}>2017/12 ~ 2020/05
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
                                            Master Degree
                    </Typography>
                    {isMobile ?
                      <div>
                        {/* eslint-disable-next-line max-len */}
                        {'California Lutheran University is a private university in Thousand Oaks, California. '}
                      </div> :

                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {'California Lutheran University is a private university in Thousand Oaks, California. '}
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
                      }}>2012/09 ~ 2016/06
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
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={cut} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>Changchun University of Technology</b>
                    {isMobile &&
                                            <div>
                                              <Typography
                                                variant="body"
                                                style={{
                                                  marginRight: 40
                                                }}>2012/09 ~ 2016/06
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
                        Bachelor Degree
                    </Typography>

                    {isMobile ?
                      <div >
                        {/* eslint-disable-next-line max-len */}
                        {'Changchun University of Technology is a comprehensive university located in Changchun City, Jilin Province, China'}

                      </div> :
                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {'Changchun University of Technology is a comprehensive university located in Changchun City, Jilin Province, China'}
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
                      }}>2009/09 ~ 2012/05
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
                <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={zqsz} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginLeft: 2, marginTop: 2.5 }}
                primary= {
                  <div>
                    <b>Zhangqiu No. 4 High School</b>
                    {isMobile &&
                                            <div>
                                              <Typography
                                                variant="body"
                                                style={{
                                                  marginRight: 40
                                                }}>2009/09 ~ 2012/05
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
                                            High School
                    </Typography>
                    {isMobile ?
                      <div>
                        {/* eslint-disable-next-line max-len */}
                        {'Zhangqiu No. 4 High School is a provincial key high school located in Jinan City, Shandong Province, China'}
                      </div> :
                      <div style={{
                        width: '600px'
                      }}>
                        {/* eslint-disable-next-line max-len */}
                        {'Zhangqiu No. 4 High School is a provincial key high school located in Jinan City, Shandong Province, China'}
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
