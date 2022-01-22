import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((item, index) =>
          <th key={`id${index}`}>{item.title}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) =>
        <tr key={index}>
          {config.map((itemConfig, indexConfig) =>
            <td key={`id${indexConfig}`}>
              {
                !itemConfig.component ?
                  item[itemConfig.field] : itemConfig.component(item)}
            </td>
          )}
        </tr>
      )}
    </tbody>
  </table>
)

export default Grid;