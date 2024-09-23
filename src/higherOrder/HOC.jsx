import React from "react";

// HOC => Higher Order Components
const withMessage = (WrappedComponent, message) => {
  return (props) => {
    return (
      <>
        <h1>Hello Shivansh</h1>
        <WrappedComponent message={message} {...props} />
      </>
    );
  };
};

// Base Component
const WrappedComponent = (props) => {
  return <div>{props.message} </div>;
};

// Enhanced Component
const EnhancedComponent = withMessage(WrappedComponent, "Hello Shivansh");

export default EnhancedComponent;
