import { StyledItem } from "../Styles/StyledItem";
import { ItemDelete } from "./ItemDelete_Component";

const Item = (props) => {
  return (
    <StyledItem
      id={props.content.id}
      onClick={(event) => {
        event.stopPropagation();
        props.changeCheck(event.target.id);
      }}
      check={props.content.check}
    >
      <span>{props.content.content}</span>
      <ItemDelete
        id={props.content.id}
        check={props.content.check}
        deleteTodo={props.deleteTodo}
      />
    </StyledItem>
  );
};

export { Item };
