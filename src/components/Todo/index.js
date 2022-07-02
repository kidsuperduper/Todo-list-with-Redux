import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

// import { toggleStatus } from "../../redux/actions";
import todoListSlice from "../TodoList/todoListSlice";
import styles from "./todo.module.css";

const priorityColorMapping = {
    High: "red",
    Medium: "blue",
    Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(completed);

    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(todoListSlice.actions.toggleStatus(id));
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked
                    ? { opacity: 0.5, textDecoration: "line-through" }
                    : {}),
            }}
        >
            <Checkbox
                className={styles.checkbox}
                checked={checked}
                onChange={toggleCheckbox}
            >
                {name}
            </Checkbox>
            <Tag
                className={styles.tag}
                color={priorityColorMapping[prioriry]}
                style={{ margin: 0 }}
            >
                {prioriry}
            </Tag>
            <span
                onClick={() => dispatch(todoListSlice.actions.deleteTodo(id))}
            >
                &times;
            </span>
        </Row>
    );
}
