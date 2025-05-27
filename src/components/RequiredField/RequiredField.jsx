import formStyles from "../../styles/FormStyles.Module.css";

const RequiredField = () => {
  return (
    <span className={formStyles.requiredField} aria-hidden="true">
      *
    </span>
  );
};

export default RequiredField;
