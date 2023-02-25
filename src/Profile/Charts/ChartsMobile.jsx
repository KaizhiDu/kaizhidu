/* eslint-disable-next-line id-length */
import React, { Fragment } from 'react';
import { data, data2 } from './data';
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

const Charts = () => (
  <Fragment>
    <div className={'charts-container-mobile'}>

      <ComposedChart
        layout="vertical"
        width={400}
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
        <Bar dataKey="proficiency" barSize={20} fill="#413ea0" />
      </ComposedChart>

    </div>

    <div className={'charts-container-mobile'}>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="AAA" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

    </div>
  </Fragment>

);

export default Charts;
