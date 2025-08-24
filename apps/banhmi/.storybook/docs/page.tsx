import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from "@storybook/addon-docs";
import { ReactElement } from "react";
import { background } from "main/src/core";
import { DocsMetaParameter } from "main/src/docs/utils/parameter";
import s from "./page.module.css";

export const StorybookPage = (): ReactElement => {
  const meta = useOf("meta");

  const parameters =
    meta.type === "meta"
      ? (meta.csfFile.meta.parameters as DocsMetaParameter)
      : {};
  const { gallery, hideArgs } = parameters;
  const primary = parameters.primary ?? "sticky";

  return (
    <div className={primary === "sticky" ? s.sticky : ""}>
      <Title />
      <Subtitle />
      <Description />
      {gallery !== undefined && (
        <>
          <h3 id="props">Gallery</h3>
          <div id="gallery" className={s.gallery}>
            {gallery}
          </div>
        </>
      )}
      <Stories includePrimary={false} />
      {!hideArgs && (
        <div>
          <h3 id="props" className="sbdocs sbdocs-h3">
            All Props
          </h3>
          {primary !== "none" && (
            <div className={[s.primary, background.strong].join(" ")}>
              <Primary />
            </div>
          )}
          <div className={s.table}>
            <Controls />
          </div>
        </div>
      )}
    </div>
  );
};
