import { StyledBreadcrumb } from "../atoms/StyledBreadcrumbs.jsx";

export default function Breadcrumbs(props) {
  return (
    <StyledBreadcrumb className="Breadcrumbs">
      <ul>{props.children}</ul>
    </StyledBreadcrumb>
  );
}
