import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer((props) => {
	const { colors, removeColor } = props;
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, i) => (
				<DraggableColorBox
					color={color.color}
					index={i}
					name={color.name}
					key={color.name}
					handleClick={() => removeColor(color.name)}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
