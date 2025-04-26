import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog, Tree } from "../../core";
import { Utils } from "../utils/utils";

const meta: Meta = {
  title: "Draft/Tree",
  component: Tree,
  argTypes: {
    parentMode: Utils.arg(["select", "expand"]),
  },
};

export default meta;

const root = {
  id: "root",
  label: "Document",
  children: [
    {
      id: "hello-file",
      label: "hello.txt",
    },
    {
      id: "gallery-folder",
      label: "Gallery",
      children: [
        {
          id: "autumn-picture",
          label: "autumn.png",
        },
        {
          id: "summer-picture",
          label: "summer.png",
        },
      ],
    },
  ],
};

export const Primary: StoryObj<typeof Tree> = {
  render: (props) => {
    const [expanded, setExpanded] = useState<Set<string>>(new Set());
    const [selected, setSelected] = useState<Set<string>>(new Set());

    return (
      <div style={{ width: 200 }}>
        <Tree
          expanded={expanded}
          setExpanded={setExpanded}
          selected={selected}
          setSelected={setSelected}
          node={root}
          parentMode={props.parentMode}
          getRowActions={(node) => [
            { label: "Say", fn: () => Dialog.alert(node.label) },
          ]}
        />
      </div>
    );
  }
};
