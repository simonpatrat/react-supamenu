import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmComponent,
  SpmList,
  SpmListItem,
  ReactSupamenuButton,
  SupamenuModal,
  SpmBlockTitle,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";

import { SupamenuComponentProps } from "../types";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuModal",
  component: SupamenuModal,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",

    docs: {
      story: {
        inline: false,
        iframeHeight: 1000,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    accentColor: { control: "color" },
  },
} satisfies Meta<typeof SupamenuModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

export const Modal: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuModal {...args}>
        <SpmComponent align="left">
          <div
            className="spm-logo"
            style={{ fontWeight: "bolder", fontSize: "1.1rem" }}
          >
            React supamenu
          </div>
        </SpmComponent>
        <SpmBlock>
          <SpmBlockTitle
            label="variants"
            dropdownButtonLabel="Show submenu for Block 1"
          />
          <SpmBlockContent>
            <SpmList>
              <SpmListItem>
                <a href="/modal.html">modal menu</a>
              </SpmListItem>
              <SpmListItem>
                <a href="/off-canvas.html">off canvas menu</a>
              </SpmListItem>
              <SpmListItem>
                <a href="/unstyled.html">unstyled menu</a>
              </SpmListItem>
            </SpmList>
          </SpmBlockContent>
        </SpmBlock>
        <SpmBlock>
          <SpmBlockTitle
            label={<a href="">about</a>}
            dropdownButtonLabel="Show submenu for About"
          />
          <SpmBlockContent>
            <SpmList>
              {Array(24)
                .fill("item")
                .map((item, index) => {
                  return (
                    <SpmListItem key={`${item}--${index.toString(36)}`}>
                      <a href="">
                        {item} - {index + 1}
                      </a>
                    </SpmListItem>
                  );
                })}
            </SpmList>
          </SpmBlockContent>
        </SpmBlock>
        <SpmBlock>
          <SpmBlockTitle
            label="variants"
            dropdownButtonLabel="Show submenu for Block 1"
          />
          <SpmBlockContent>
            <SpmList>
              <SpmListItem>
                <a href="/modal.html">modal menu</a>
              </SpmListItem>
              <SpmListItem>
                <a href="/off-canvas.html">off canvas menu</a>
              </SpmListItem>
              <SpmListItem>
                <a href="/unstyled.html">unstyled menu</a>
              </SpmListItem>
            </SpmList>
          </SpmBlockContent>
        </SpmBlock>
      </SupamenuModal>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
