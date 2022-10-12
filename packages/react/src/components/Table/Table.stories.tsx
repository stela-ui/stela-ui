import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpansionPanel } from '../ExpansionPanel/ExpansionPanel';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

const Story: ComponentMeta<typeof Table> = {
  component: Table,
  title: 'General/Table',
};
export default Story;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
      <TableCell>Cell 4</TableCell>
      <TableCell row={1} column={6}>
        Cell 6
      </TableCell>
      <TableCell>Cell 5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
      <TableCell>Cell 4</TableCell>
      <ExpansionPanel title="Expansion">
        <TableCell row={3} columnStart={1} columnEnd={7}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aut
          animi doloribus pariatur ducimus corporis vitae. Maiores eos natus qui
          dignissimos suscipit, eligendi perferendis iste odio architecto illum
          veritatis facilis?
        </TableCell>
      </ExpansionPanel>
      <ExpansionPanel title="Expansion">
        <TableCell columnStart={1} columnEnd={7} row={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aut
          animi doloribus pariatur ducimus corporis vitae. Maiores eos natus qui
          dignissimos suscipit, eligendi perferendis iste odio architecto illum
          veritatis facilis?
        </TableCell>
      </ExpansionPanel>
    </TableRow>
  </Table>
);

export const Primary = Template.bind({});
Primary.args = { columns: 6 };
