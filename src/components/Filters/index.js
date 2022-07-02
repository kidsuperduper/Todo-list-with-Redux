import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

// import {
//     searchTextChange,
//     statusFilterChange,
//     priorityFilterChange,
// } from "../../redux/actions";
import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [priorityFilter, setPriorityFilter] = useState([]);

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(filtersSlice.actions.searchTextChange(e.target.value));
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
        dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
    };

    const handlePriorityFilterChange = (value) => {
        setPriorityFilter(value);
        dispatch(filtersSlice.actions.priorityFilterChange(value));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    value={searchText}
                    placeholder="input search text"
                    onChange={handleSearchTextChange}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                >
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}
                    value={priorityFilter}
                    onChange={handlePriorityFilterChange}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
