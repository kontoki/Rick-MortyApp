import error from "../../resourses/img/error.gif";

const ErrorMessage = () => {
  return (
    <img
      src={error}
      alt="error"
      style={{ display: "flex", margin: "0 auto" }}
    />
  );
};

export default ErrorMessage;
