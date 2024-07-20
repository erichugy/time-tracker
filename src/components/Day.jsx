import React, { useState } from 'react';

export default function Day () {
    const [selectedCells, setSelectedCells] = useState([]);

    const handleCellClick = (cellIndex) => {
        if (selectedCells.includes(cellIndex)) {
            setSelectedCells(selectedCells.filter((index) => index !== cellIndex));
        } else {
            setSelectedCells([...selectedCells, cellIndex]);
        }
    };

    const renderTable = () => {
        const table = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const cellIndex = hour * 4 + minute / 15;
                const isSelected = selectedCells.includes(cellIndex);
                const cellStyle = {
                    backgroundColor: isSelected ? 'yellow' : 'white',
                };
                table.push(
                    <div
                        key={cellIndex}
                        className="cell"
                        style={cellStyle}
                        onClick={() => handleCellClick(cellIndex)}
                    />
                );
            }
        }
        return table;
    };

    return <div className="calendar">{renderTable()}</div>;
};