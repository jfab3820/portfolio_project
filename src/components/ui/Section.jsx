import { Children } from "react";

export default function Section({
  as: Tag = "section",
  className = "",
  children,
}) {
  return (
    <Tag className={`py-16 sn:py-20 lg:py-24 } ${className}`}>{children}</Tag>
  );
}
