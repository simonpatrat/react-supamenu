import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmList,
  SpmListItem,
  ReactSupamenuButton,
  SupamenuFullScreen,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";

import { SupamenuComponentProps } from "../types";
import { SpmDropdownToggleButton } from "../components/SpmDropdownToggleButton";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuFullScreen",
  component: SupamenuFullScreen,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",

    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    accentColor: { control: "color" },

    align: {
      options: ["left", "center", "right"],
      control: "radio",
    },
    position: {
      options: ["sticky", "sticky-bottom", "fixed", "fixed-bottom"],
      control: "select",
    },
  },
} satisfies Meta<typeof SupamenuFullScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

export const FullScreen: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuFullScreen {...args}>
        <div>
          <SpmBlock alwaysVisible>
            <SpmBlockContent>
              <SpmList>
                <SpmListItem key={1}>
                  <a href="">Lorem, ipsum dolor.</a>
                </SpmListItem>
                <SpmListItem key={2}>
                  <a href="">Off-canvas menu</a>
                </SpmListItem>
                <SpmListItem key={3}>
                  <a href="">Classic menu</a>
                </SpmListItem>
                <SpmListItem key={4}>
                  <a className="active" href="">
                    Full-screen menu
                  </a>
                </SpmListItem>
                <SpmListItem key={5}>
                  <a href="">Lorem ipsum dolor sit amet consectetur.</a>
                </SpmListItem>
              </SpmList>
            </SpmBlockContent>
          </SpmBlock>
        </div>
        <div>
          <SpmBlock>
            <SpmDropdownToggleButton
              labelVisible
              label="variants"
              className="active"
            />
            <SpmBlockContent>
              <SpmList>
                <SpmListItem>
                  <a href="">modal menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">off canvas menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a className="active" href="">
                    Full screen menu
                  </a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">unstyled menu</a>
                </SpmListItem>
              </SpmList>
            </SpmBlockContent>
          </SpmBlock>
          <SpmBlock>
            <SpmDropdownToggleButton labelVisible label="variants" />
            <SpmBlockContent>
              <SpmList>
                <SpmListItem>
                  <a href="">modal menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">off canvas menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">unstyled menu</a>
                </SpmListItem>
              </SpmList>
            </SpmBlockContent>
          </SpmBlock>
          <SpmBlock>
            <SpmDropdownToggleButton labelVisible label="variants" />
            <SpmBlockContent>
              <SpmList>
                <SpmListItem>
                  <a href="">modal menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">off canvas menu</a>
                </SpmListItem>
                <SpmListItem>
                  <a href="">unstyled menu</a>
                </SpmListItem>
              </SpmList>
            </SpmBlockContent>
          </SpmBlock>
        </div>
      </SupamenuFullScreen>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
