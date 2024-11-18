import PRIORITY from "@/constants/todoPriority";
import style from "./TodoLabel.module.css";

interface TodoLabelPropsType {
  priority: (typeof PRIORITY)[keyof typeof PRIORITY];
}

export default function TodoLabel({ priority }: TodoLabelPropsType) {
  let label = "";

  switch (priority) {
    case PRIORITY.URGENT: {
      label = "높음";
      break;
    }
    case PRIORITY.NORMAL: {
      label = "보통";
      break;
    }
    case PRIORITY.LOW: {
      label = "낮음";
      break;
    }
  }

  return (
    <div className={`${style["label-wrapper"]} ${style[priority]}`}>
      <p className={`${style["label"]}`}> {label}</p>
    </div>
  );
}
