/* eslint-disable-next-line id-length */
import React from 'react';
import './styles.scss';
import { data, data2 } from './data';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import { Grid, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const header = {
  backgroundColor: 'black',
  padding: 20,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white'
};

const Charts = () => (
  <div className={'charts-container'}>
    <Card>
      <div style={header}>
        <Typography variant="h6">
          Personal Skill
        </Typography>
      </div>

      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Bar dataKey="熟悉度" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </Grid>

          <Grid item xs={6}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="AAA" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>

          </Grid>
        </Grid>
      </CardContent>

    </Card>

  </div>
);

export default Charts;
