import { Link, LinkProps } from "expo-router";
import TextLocal, { ITextLocal } from "../Text";

interface ILinkLocal extends LinkProps {
  textOptions?: Omit<ITextLocal, "children">;
}

export default function LinkLocal({
  children,
  textOptions,
  ...restProps
}: ILinkLocal) {
  const variantText = textOptions?.variant ?? "bodySm";

  return (
    <Link {...restProps}>
      <TextLocal variant={variantText} {...textOptions} textAlign="center">
        {children}
      </TextLocal>
    </Link>
  );
}
