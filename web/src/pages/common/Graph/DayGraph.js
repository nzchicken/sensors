import React, { Fragment } from 'react'
import { Collection } from '@potion/layout'
import { Group, Text, Circle, Line, Rect } from '@potion/element'
import { addHours, format } from 'date-fns'
import { timeHour } from 'd3-time'
import { timeFormat } from 'd3-time-format'

import { XAxis, YAxis } from './Axes'

import './index.css'

import { useTimeScale } from '../../../hooks/graphScales'

const DayGraph = (props) => {
  const {
    transform,
    width,
    height,
    date,
    data,
    yScale,
    ppmColorScale,
    animate
  } = props;

  const from = addHours(date, 6),
        to = addHours(date, 20);

  const xScale = useTimeScale({ width, from, to });

  const yMin = yScale.domain()[0];

  const clipId = `clip-${date}`;
  const clipPath = `url(#${clipId})`;

  return (
    <Group transform={transform}>
      <Text y={-2} x={5}>{format(date, 'ddd\tDD\tMMM')}</Text>
      <XAxis
        scale={xScale}
        transform={{translate: [0, height]}}
        gridline={height}
        className="x-axis"
        ticks={timeHour.every(1)}
        tickFormat={timeFormat('%H:%M')}
      />
      <YAxis
        scale={yScale}
        gridline={width}
        className="y-axis"
        ticks={7}
      />
      <Group className="plot">
        <clipPath id={clipId}>
          <Rect width={width} height={height} />
        </clipPath>
        <Collection
          data={data}
          nodeEnter={d => ({ ...d, median: yMin, upper: yMin, lower: yMin })}
          animate={animate}
        >
          {nodes => nodes.map(({key, date, median, lower, upper}) => {
            const x = xScale(date);
            return (
              <Fragment key={key}>
                <Line x1={x} x2={x} y1={yScale(lower)} y2={yScale(upper)} clipPath={clipPath}/>
                <Circle cx={x} cy={yScale(median)} r={3} fill={ppmColorScale(median)} stroke="grey" strokeWidth="1px" clipPath={clipPath}/>
              </Fragment>
            );
          })}
        </Collection>
      </Group>
    </Group>
  );
}

export default DayGraph;