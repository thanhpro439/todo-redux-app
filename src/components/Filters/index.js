import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPriorityChange, filterStatusChange, searchFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setPriority] = useState([]);

  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    dispatch(searchFilterChange(searchText));
  };

  const handleFilterStatus = (e) => {
    const status = e.target.value;
    setFilterStatus(status);
    dispatch(filterStatusChange(status));
  };

  const handleFilterPriority = (e) => {
    const priority = e;
    setPriority(priority);
    dispatch(filterPriorityChange(priority));
  };

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchInput} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleFilterStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handleFilterPriority}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
