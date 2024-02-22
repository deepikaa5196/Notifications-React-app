const Notification = (props) => {
  const { className, imageUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={imageUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notification-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="primary-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information message"
      />
      <Notification
        className="success-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success message"
      />
      <Notification
        className="warning-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning message"
      />
      <Notification
        className="danger-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
