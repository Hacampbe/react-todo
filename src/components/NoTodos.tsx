// https://undraw.co/illustrations
import todoListSvg from "../assets/images/undraw_relaxation_re_ohkx.svg";

export default function NoTodos() {
  return (
    <div className="noTodosSection">
      <img src={todoListSvg} alt="" />
      <p>
        Nothing to do... for now. Add a task when you're ready to conquer the
        world!
      </p>
    </div>
  );
}
