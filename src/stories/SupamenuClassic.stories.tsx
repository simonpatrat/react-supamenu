import type { Meta, StoryObj } from "@storybook/react";

import {
  SpmBlock,
  SpmBlockContent,
  SpmBlockTitle,
  SpmComponent,
  SpmComponents,
  SpmList,
  SpmListItem,
  SpmMegamenuContentBlock,
  ReactSupamenuButton,
  SupamenuClassic,
} from "../index";
import { SupamenuProvider } from "../context/SpmContext";
import { SpmDropdownToggleButton } from "../components/SpmDropdownToggleButton";
import { SupamenuComponentProps } from "../types";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/SupamenuClassic",
  component: SupamenuClassic,

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
} satisfies Meta<typeof SupamenuClassic>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: SupamenuComponentProps = {
  id: MENU_ID,
  autoDetectColorScheme: false,
  darkMode: false,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Classic: Story = {
  args: {
    ...baseArgs,
    position: "sticky",
  },
  render: (args) => (
    <SupamenuProvider>
      <SupamenuClassic {...args}>
        <SpmComponent align="left">
          <div
            className="spm-logo"
            style={{
              fontWeight: "bolder",
              fontSize: "1.1rem",
              background:
                "-webkit-linear-gradient(120deg, var(--supamenu-accent-color), #c21c82)",
              // @ts-ignore ignore css properties
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            React supamenu
          </div>
        </SpmComponent>
        <SpmBlock>
          <SpmBlockTitle
            label="variants"
            dropdownButtonLabel="Show submenu for Block 1"
            icon="chevron"
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
            icon="chevron"
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
                            icon="chevron"
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
            icon="chevron"
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
                  src="https://fastly.picsum.photos/id/866/768/480.jpg?hmac=MdtpTFqt93NcCP-yqolH2hsk8k9GUmfm9rlbN-VKrNU"
                  alt=""
                />
              </div>
            </SpmMegamenuContentBlock>
          </SpmBlockContent>
        </SpmBlock>
        <SpmComponent align="right">
          <SpmComponents.Search />
        </SpmComponent>
      </SupamenuClassic>
      <ReactSupamenuButton
        className="demo-button"
        menuId={MENU_ID}
        label="Show / hide menu"
      />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
