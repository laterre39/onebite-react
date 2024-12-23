import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라 Props 가 바뀌었는지 안바뀌었는지 확인 True = 리렌더링 X, False = 리렌더링 O
//     if (prevProps.id !== nextProps.id) return false
//     if (prevProps.isDone !== nextProps.isDone) return false
//     if (prevProps.content !== nextProps.content) return false
//     if (prevProps.date !== nextProps.date) return false
//
//     return true;
// });

export default memo(TodoItem);