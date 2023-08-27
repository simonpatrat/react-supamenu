import type { Meta, StoryObj } from "@storybook/react";

import {
  ReactSupamenu,
  SpmBlock,
  SpmBlockContent,
  SpmBlockTitle,
  SpmComponent,
  SpmComponents,
  SpmList,
  SpmListItem,
  SpmMegamenuContentBlock,
} from "../index";
import {
  SupamenuProvider,
  useSupaMenu,
} from "../components/context/SpmContext";

const MENU_ID = "menu-1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Supamenu/ReactSupamenu",
  component: ReactSupamenu,

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
    type: {
      options: ["classic", "modal", "off-canvas"],
      control: "select",
    },
    align: {
      options: ["left", "center", "right"],
      control: "radio",
    },
    position: {
      options: ["sticky", "sticky-bottom", "fixed", "fixed-bottom"],
      control: "select",
    },
  },
} satisfies Meta<typeof ReactSupamenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const Button = () => {
  const { menus } = useSupaMenu();

  console.log({ menus });
  return (
    <button
      type="button"
      onClick={() => {
        if (menus?.[MENU_ID]) {
          menus[MENU_ID].toggle();
        }
      }}
    >
      Show / hide Menu
    </button>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Classic: Story = {
  args: {
    id: MENU_ID,
    type: "classic",
    position: "sticky",
  },
  render: (args) => (
    <SupamenuProvider>
      <ReactSupamenu {...args}>
        <SpmComponent align="left">
          <div className="spm-logo">React supamenu</div>
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
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum dolor.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit amet consectetur.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum dolor.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit amet consectetur.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum dolor.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit amet consectetur.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem, ipsum.</a>
              </SpmListItem>
              <SpmListItem>
                <a href="">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </SpmListItem>
              <SpmListItem>
                <a href="">Lorem ipsum dolor sit.</a>
              </SpmListItem>
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
        <SpmComponent align="right">
          <SpmComponents.Search />
        </SpmComponent>
      </ReactSupamenu>
      <Button />
      <div style={{ height: 800 }}></div>
    </SupamenuProvider>
  ),
};
