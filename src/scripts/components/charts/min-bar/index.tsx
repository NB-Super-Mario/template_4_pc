import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../auto-height';
import './index.less';

@autoHeight()
class MiniBar extends React.PureComponent {
  render() {
    const {
      height,
      forceFit = true,
      color = '#1890FF',
      data = []
    } = this.props;

    const scale = {
      x: {
        type: 'cat'
      },
      y: {
        min: 0
      }
    };

    const padding = [36, 5, 30, 5];

    const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y
      })
    ];

    // for tooltip not to be hide
    const chartHeight = height + 54;

    return (
      <div className="min-bar" style={{ height }}>
        <div className="chart-content">
          <Chart
            scale={scale}
            height={chartHeight}
            forceFit={forceFit}
            data={data}
            padding={padding}
          >
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom
              type="interval"
              position="x*y"
              color={color}
              tooltip={tooltip}
            />
          </Chart>
        </div>
      </div>
    );
  }
}

export default MiniBar;
