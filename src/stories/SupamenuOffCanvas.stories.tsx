import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmComponent,
  SpmComponents,
  SpmList,
  SpmListItem,
  ReactSupamenuButton,
  SupamenuOffCanvas,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";
import { SpmDropdownToggleButton } from "../components/SpmDropdownToggleButton";
import { SupamenuComponentProps } from "../types";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuOffCanvas",
  component: SupamenuOffCanvas,

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
} satisfies Meta<typeof SupamenuOffCanvas>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

export const OffCanvas: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuOffCanvas {...args}>
        <SpmComponent>
          <div
            className="spm-logo"
            style={{ fontWeight: "bolder", fontSize: "1.1rem" }}
          >
            React supamenu
          </div>
        </SpmComponent>
        <SpmComponent>
          <SpmComponents.Search />
        </SpmComponent>
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
                <a className="active" href="">
                  off canvas menu
                </a>
              </SpmListItem>
              <SpmListItem>
                <a href="">unstyled menu</a>
              </SpmListItem>
            </SpmList>
          </SpmBlockContent>
        </SpmBlock>
        <SpmBlock>
          <SpmDropdownToggleButton labelVisible label="Another list" />
          <SpmBlockContent>
            <SpmList>
              {Array(24)
                .fill("item")
                .map((item, index) => {
                  return (
                    <SpmListItem key={`${item}--${index.toString(36)}`}>
                      {index === 3 ? (
                        <SpmBlock>
                          <SpmDropdownToggleButton
                            labelVisible
                            label="Submenu"
                          />
                          <SpmBlockContent>
                            <SpmList>
                              {Array(8)
                                .fill("item")
                                .map((item, newIndex) => (
                                  <SpmListItem
                                    key={`${item}--${index.toString(
                                      36
                                    )}--${newIndex.toString(36)}`}
                                  >
                                    <a href="">
                                      Sub-{item} - {newIndex + 1}
                                    </a>
                                  </SpmListItem>
                                ))}
                            </SpmList>
                          </SpmBlockContent>
                        </SpmBlock>
                      ) : (
                        <a href="">
                          {item} - {index + 1}
                        </a>
                      )}
                    </SpmListItem>
                  );
                })}
            </SpmList>
          </SpmBlockContent>
        </SpmBlock>
      </SupamenuOffCanvas>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
