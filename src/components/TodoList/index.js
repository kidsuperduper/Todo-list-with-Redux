import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";

import Todo from "../Todo";
// import { addTodo } from "../../redux/actions";
import todoListSlice from "./todoListSlice";
import { todoListRemaining } from "../../redux/selectors";

export default function TodoList() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todoListRemaining);

    const handleSubmit = () => {
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: input,
                priority: priority,
                completed: false,
            })
        );
        setInput("");
        document.getElementById("inputTodo").focus();
        setPriority("Medium");
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        id="inputTodo"
                        value={input}
                        placeholder="Enter a job"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={(value) => setPriority(value)}
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
                    <Button type="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
