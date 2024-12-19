import "./List.css"
import TodoItem from "./TodoItem";
import {useMemo, useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilterdData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilterdData();

    const {totalCount, doneCount, notDoneCount} =
        useMemo(() => {
            console.log("getAnalyzedData 호출!")
            const totalCount = todos.length;
            const doneCount = todos.filter((todo) => todo.isDone).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            }
        }, [todos]) // deps 를 이용한 특정 조건이 만족되지 않았을 때는 다시 수행하지 않도록 함

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>

            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>

            <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    );
};

export default List;