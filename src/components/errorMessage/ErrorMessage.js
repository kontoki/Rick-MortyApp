import error from "../../resourses/img/error.gif";

const ErrorMessage = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div
      onClick={refreshPage}
      style={{ cursor: "pointer", textAlign: "center", fontSize: "32px" }}
    >
      Unexpected problem. To refresh the page, click.
      <img
        src={error}
        alt="error"
        style={{ display: "flex", margin: "0 auto", cursor: "pointer" }}
      />
    </div>
  );
};

export default ErrorMessage;
