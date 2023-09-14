import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmList,
  SpmListItem,
  ReactSupamenuButton,
  SupamenuClassic,
  SpmComponent,
  SpmBlockTitle,
  SpmMegamenuContentBlock,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";

import { SupamenuComponentProps } from "../types";
import { SpmDropdownToggleButton } from "../components/SpmDropdownToggleButton";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuClassic",
  component: SupamenuClassic,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
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
} satisfies Meta<typeof SupamenuClassic>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

export const Customized: Story = {
  args: {
    ...baseArgs,
    position: "sticky",
    align: "left",

    theme: {
      colorDark: "#18032b",
      background: "#6df0d3",
      classicMenuBorder: "1px solid var(--supamenu-border-color)",
      classicMenuDropdownBorder: "1px solid #56c9b0",
      iconColor: "var(--supamenu-text-color)",
      linkColorHover: "#f16b42",
      classicMenuDropdownBorderRadius: "0",
    },
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuClassic {...args}>
        <SpmComponent align="left">
          <div
            className="spm-logo"
            style={{
              lineHeight: "60px",
              color: "#0f0e0e",
              background: "#fff",
              borderRadius: "50%",
              height: 40,
              width: 40,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{
                fontSize: ".7rem",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#195245",
                border: "4px solid #f16b42",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ transform: "rotate(-15deg)" }}>S</div>
            </div>
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
                      {index === 3 ? (
                        <SpmBlock>
                          <SpmDropdownToggleButton
                            label="Submenu"
                            labelVisible
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
                                      {item} - {newIndex + 1}
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
        <SpmBlock megamenu>
          <SpmBlockTitle
            label="mega menu"
            dropdownButtonLabel="Show mega menu"
          />
          <SpmBlockContent isMegamenu>
            <SpmMegamenuContentBlock title="Lorem Ipsum yeah">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corporis sunt enim non sint nesciunt nostrum ullam ratione ab
                amet voluptas esse maxime fuga ipsa exercitationem expedita,
                repellendus, aspernatur magni ad eius? Officia facere fuga
                accusamus assumenda eos totam, debitis sequi sint repellat
                corporis. Maiores accusamus aut consequuntur molestias deserunt,
                id eveniet quaerat ipsa quibusdam voluptatum impedit veritatis
                molestiae minus!
              </p>
              <div>
                <a href="">Learn more &rarr;</a>
              </div>
            </SpmMegamenuContentBlock>
            <SpmMegamenuContentBlock title="Another title">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corporis sunt enim non sint nesciunt nostrum ullam ratione ab
                amet voluptas esse maxime fuga ipsa exercitationem expedita,
                repellendus, aspernatur magni ad eius? Officia facere fuga
                accusamus assumenda eos totam, debitis sequi sint repellat
                corporis. Maiores accusamus aut consequuntur molestias deserunt,
                id eveniet quaerat ipsa quibusdam voluptatum impedit veritatis
                molestiae minus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus illo officia cupiditate, excepturi
                quod saepe quis possimus quisquam molestiae, deleniti eius rem
                culpa error architecto nam, corrupti ab nisi! Excepturi.
              </p>
              <div>
                <a href="">Learn more &rarr;</a>
              </div>
            </SpmMegamenuContentBlock>
            <SpmMegamenuContentBlock title="Assumenda eos totam">
              <div>
                <img
                  src="https://fastly.picsum.photos/id/481/400/300.jpg?grayscale&hmac=uDwF4Y0Z5yDH2D9UtG32xavJWOKbw8RhpJ4K6BGTZrs"
                  alt=""
                />
              </div>
              <div>
                <a href="">Learn more &rarr;</a>
              </div>
            </SpmMegamenuContentBlock>
          </SpmBlockContent>
        </SpmBlock>
      </SupamenuClassic>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
    </SupamenuProvider>
  ),
};
