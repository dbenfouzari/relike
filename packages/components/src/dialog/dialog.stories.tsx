import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useState } from "react";

import Container from "../container";
import Padding from "../padding";
import Toolbar from "../toolbar";
import Dialog, { DialogProps } from "./dialog";

export default {
  title: "Dialog",
  component: Dialog,
  argTypes: {
    children: { control: { disable: true } },
    onClose: { control: { disable: true } },
  },
} as ComponentMeta<typeof Dialog>;

const Component = (props: DialogProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <button onClick={openModal}>Open modal</button>

      <Dialog isOpen={isOpen} onClose={closeModal}>
        {props.children}
      </Dialog>
    </div>
  );
};

const Template: ComponentStory<typeof Dialog> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  children: (
    <>
      <header>
        <Toolbar>
          <h3>Important Information</h3>
        </Toolbar>
      </header>

      <Container padding={Padding.symmetric({ horizontal: 24 })}>
        Nihil hic munitissimus habendi senatus locus, nihil horum? At nos hinc posthac, sitientis piros Afros. Magna
        pars studiorum, prodita quaerimus. Integer legentibus erat a ante historiarum dapibus. Praeterea iter est
        quasdam res quas ex communi. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Inmensae subtilitatis,
        obscuris et malesuada fames. Me non paenitet nullum festiviorem excogitasse ad hoc. Cum ceteris in veneratione
        tui montes, nascetur mus. Etiam habebis sem dicantur magna mollis euismod. Quis aute iure reprehenderit in
        voluptate velit esse. Phasellus laoreet lorem vel dolor tempus vehicula. Ambitioni dedisse scripsisse
        iudicaretur. Paullum deliquit, ponderibus modulisque suis ratio utitur. Ab illo tempore, ab est sed
        immemorabili. Nec dubitamus multa iter quae et nos invenerat. Tu quoque, Brute, fili mi, nihil timor populi,
        nihil! Morbi fringilla convallis sapien, id pulvinar odio volutpat. Cras mattis iudicium purus sit amet
        fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Quisque ut dolor gravida, placerat libero
        vel, euismod.
      </Container>

      <footer>
        <Toolbar
          after={
            <>
              <button>Cancel</button>
              <button>Accept</button>
            </>
          }
        />
      </footer>
    </>
  ),
};
