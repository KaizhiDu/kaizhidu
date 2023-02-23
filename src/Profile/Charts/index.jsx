/* eslint-disable-next-line id-length */
import React, { Component } from 'react';
import './styles.scss';
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
import { Grid } from '@mui/material';

const data = [
  {
    name: 'Page A',
    uv: 590,
    熟悉度: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: 'Page B',
    uv: 868,
    熟悉度: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: 'Page C',
    uv: 1397,
    熟悉度: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: 'Page D',
    uv: 1480,
    熟悉度: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: 'Page E',
    uv: 1520,
    熟悉度: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: 'Page F',
    uv: 1400,
    熟悉度: 680,
    amt: 1700,
    cnt: 380
  }
];

const data2 = [
  {
    subject: 'Math',
    AAA: 100,
    fullMark: 150
  },
  {
    subject: 'Chinese',
    AAA: 98,
    fullMark: 150
  },
  {
    subject: 'English',
    AAA: 86,
    fullMark: 150
  },
  {
    subject: 'Geography',
    AAA: 99,
    fullMark: 150
  },
  {
    subject: 'Physics',
    AAA: 85,
    fullMark: 150
  },
  {
    subject: 'History',
    AAA: 65,
    fullMark: 150
  }
];

class Charts extends Component {
  render() {
    return (
      <div className="charts-container">

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

      </div>
    );
  }
}

export default Charts;
