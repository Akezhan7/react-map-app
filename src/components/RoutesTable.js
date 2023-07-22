import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { selectRoute, fetchPolyline } from '../redux/routesSlice';

const RoutesTable = () => {
    const dispatch = useDispatch();
    const routes = useSelector((state) => state.routes.routes);
    const selectedRoute = useSelector((state) => state.routes.selectedRoute);
  
    const columns = [
      {
        title: 'Маршрут',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <a
            onClick={() => {
              dispatch(selectRoute(record.id));
            }}
          >
            {text}
          </a>
        ),
      },
      // другие колонки ...
    ];
  
    return (
      <Table
        rowKey="id"
        columns={columns}
        dataSource={routes}
        rowClassName={(record) =>
          record.id === selectedRoute?.id ? 'selected-row' : ''
        }
      />
    );
  };
  
  export default RoutesTable;
  