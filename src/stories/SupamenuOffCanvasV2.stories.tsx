import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmComponent,
  SpmComponents,
  SpmList,
  SpmListItem,
  ReactSupamenuButton,
  SupamenuOffCanvasV2,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";
import { SpmDropdownToggleButton } from "../components/SpmDropdownToggleButton";
import { SupamenuComponentProps } from "../types";
import { SpmBlockTitle, SpmFooter, SpmGroup } from "../components";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuOffCanvasV2",
  component: SupamenuOffCanvasV2,

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
} satisfies Meta<typeof SupamenuOffCanvasV2>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

export const OffCanvasV2: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuOffCanvasV2 {...args}>
        <SpmComponent>
          <SpmComponents.Search />
        </SpmComponent>
        <SpmGroup>
          <SpmBlock>
            <SpmBlockTitle label="variants" />
            <SpmList>
              <SpmListItem>
                <a href="">modal menu</a>
              </SpmListItem>
              <SpmListItem>
                <a className="active" href="">
                  off-canvas v2 menu
                </a>
              </SpmListItem>
              <SpmListItem>
                <a href="">unstyled menu</a>
              </SpmListItem>
            </SpmList>
          </SpmBlock>
          <SpmBlock>
            <SpmDropdownToggleButton
              labelVisible
              label="variants"
              className="active"
              icon="chevron"
            />
            <SpmBlockContent>
              <SpmDropdownToggleButton
                labelVisible
                label="Back"
                icon="chevron"
                data-action="close"
              />
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
            <SpmDropdownToggleButton
              labelVisible
              label="Another list"
              icon="chevron"
            />
            <SpmBlockContent>
              <SpmDropdownToggleButton
                labelVisible
                label="Back"
                icon="chevron"
                data-action="close"
              />
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
                              icon="chevron"
                            />
                            <SpmBlockContent>
                              <SpmDropdownToggleButton
                                labelVisible
                                label="Back"
                                icon="chevron"
                                data-action="close"
                              />
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
        </SpmGroup>
        <SpmGroup bottom>
          <SpmBlockTitle label="Additional content" />
          <SpmBlock>
            <SpmDropdownToggleButton
              labelVisible
              label="variants"
              className="active"
              icon="chevron"
            />
            <SpmBlockContent>
              <SpmDropdownToggleButton
                labelVisible
                label="Back"
                icon="chevron"
                data-action="close"
              />
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
            <SpmDropdownToggleButton
              labelVisible
              label="Another list"
              icon="chevron"
            />
            <SpmBlockContent>
              <SpmDropdownToggleButton
                labelVisible
                label="Back"
                icon="chevron"
                data-action="close"
              />
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
        </SpmGroup>
        <SpmFooter>
          <SpmComponent>
            Powered by
            <div className="spm-logo">supamenu</div>
          </SpmComponent>
        </SpmFooter>
      </SupamenuOffCanvasV2>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
