import React from 'react';

import Konva from 'konva';
import { Stage, Layer, Rect, Text} from 'react-konva';

class ColoredRect extends React.Component {
  constructor(props) {
    super(props)
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize (e) {
    e.preventDefault();
    // to() is a method of `Konva.Node` instances
    this.rect.to({
      scaleX: Math.random() + 0.8,
      scaleY: Math.random() + 0.8,
      duration: 0.2
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill="red"
        ref={node => {
          this.rect = node;
        }}
        shadowBlur={5}
        onDragEnd={e => this.changeSize(e)}
        onDragStart={e => this.changeSize(e)}
        draggable
      />
    );
  }
}


export default ColoredRect;